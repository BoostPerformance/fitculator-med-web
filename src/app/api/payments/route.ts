import { NextResponse } from 'next/server';

interface PaymentConfirmRequest {
 amount: string;
 orderId: string;
 paymentKey: string;
}

export async function POST(req: Request) {
 try {
   const { amount, orderId, paymentKey }: PaymentConfirmRequest = await req.json();

   const secretKey = process.env.TOSS_SECRET_KEY;
   const url = 'https://api.tosspayments.com/v1/payments/confirm';
   const basicToken = Buffer.from(`${secretKey}:`, 'utf-8').toString('base64');

   const response = await fetch(url, {
     method: 'POST',
     headers: {
       Authorization: `Basic ${basicToken}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       amount,
       orderId,
       paymentKey,
     }),
   });

   const responseData = await response.json();

   if (!response.ok || responseData.status === 'FAILED') {
     return NextResponse.json(
       { message: responseData.message || '결제 확인 실패', code: response.status },
       { status: response.status }
     );
   }

   return NextResponse.json(responseData, { status: 200 });

 } catch (error) {
   console.error('Payments error:', error);
   return NextResponse.json(
     { error: 'Error processing payment' },
     { status: 500 }
   );
 }
}