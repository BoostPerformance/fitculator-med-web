'use client';
import { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loading from '@/components/loading';
import { useMutation } from '@tanstack/react-query';

const validateFormData = (formData: any) => {
  try {
    const requiredFields = ['user', 'exercisePreferences', 'programs', 'subscriptions'];
    return requiredFields.every(field => formData[field]);
  } catch (error) {
    return false;
  }
};

interface PaymentRequestData {
  orderId: string | null;
  amount: string | null;
  paymentKey: string | null;
 }

const attemptPaymentConfirmation = async (requestData: PaymentRequestData) => {
  let attempts = 0;
  while (attempts < 3) {
    const paymentResponse = await fetch('/api/payments', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    
    if (paymentResponse.ok) {
      const json = await paymentResponse.json();
      if (json.error) {
        throw new Error(json.message || '결제 확인에 실패했습니다');
      }
      return json;
    }

    await new Promise(r => setTimeout(r, 1000));
    attempts++;
  }
  
  throw new Error('결제 확인이 실패했습니다. 잠시 후 다시 시도해주세요.');
};

export default function PaymentComplete() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isProcessingRef = useRef(false);

  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('폼 제출에 실패했습니다.');
      }

      return response.json();
    },
    onSuccess: async (data) => {
      window.location.href = '/payment-success';
    },
    onError: (error) => {
      console.error('폼 제출 중 에러 발생:', error);
      window.location.href = '/payment-fail';
    },
  });

  useEffect(() => {
    if (isProcessingRef.current) return;
    isProcessingRef.current = true;

    const confirmPayment = async () => {
      try {
        const savedFormData = localStorage.getItem('formData');
        if (!savedFormData) {
          throw new Error('신청 폼 데이터가 없습니다');
        }
        
        const formData = JSON.parse(savedFormData);
        if (!validateFormData(formData)) {
          throw new Error('필수 데이터가 누락되었습니다');
        }

        const requestData = {
          orderId: searchParams.get('orderId'),
          amount: searchParams.get('amount'),
          paymentKey: searchParams.get('paymentKey'),
        };

        if (!requestData.orderId || !requestData.amount || !requestData.paymentKey) {
          throw new Error('결제 정보가 누락되었습니다');
        }

        const paymentResult = await attemptPaymentConfirmation(requestData);
        
        mutation.mutate({
          ...formData,
          paymentInfo: {
            amount: requestData.amount,
            order_id: requestData.orderId,
            payment_key: requestData.paymentKey,
            card_type: paymentResult.card?.cardType || '카드 타입',
            owner_type: paymentResult.card?.ownerType || '개인',
            currency: paymentResult.currency || 'KRW',
          },
        });

      } catch (error: Error | any) {
        const errorMessage = error instanceof Error ? error.message : '알 수 없는 에러가 발생했습니다';
        console.error('Payment confirmation error:', error);
        window.location.href = `/payment-fail?message=${encodeURIComponent(errorMessage)}`;
      }
    };

    confirmPayment();
  }, [searchParams, router, mutation]);

  return <Loading ismessage />;
}