// import Image from 'next/image';
// import RegisterItemTitle from './registerItemTitle';
// import { PaymentInformationProps } from '@/types/types';

// export default function PaymentInformation({
//   formData,
//   setFormData,
// }: PaymentInformationProps) {
//   const handlePaymentMethodChange = (
//     payment_method: '신용카드' | 'Naverpay' | 'Kakaopay'
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       paymentInfo: {
//         ...prev.paymentInfo,
//         payment_method,
//       },
//     }));

//     console.log('Selected payment method:', payment_method);
//   };

//   return (
//     <div className="flex gap-[5.19rem] w-[56.5625rem] mb-[5rem]">
//       <RegisterItemTitle required={false} title="결제수단" />
//       <div className="flex flex-col gap-[3.12rem]">
//         <div className="flex flex-col gap-[1rem]">
//           <button
//             onClick={() => handlePaymentMethodChange('신용카드')}
//             type="button"
//             className="text-black w-[42.8125rem] h-[3.875rem] rounded-[0.375rem] border-[0.1rem] text-center focus:border-blue-1 focus:text-blue-1 focus:bg-[#EDF4F8]"
//           >
//             신용카드, 체크카드
//           </button>
//           <div className="flex justify-around w-[42.8125rem] h-[3.875rem] items-center gap-[0.75rem]">
//             <button
//               onClick={() => handlePaymentMethodChange('Naverpay')}
//               type="button"
//               className="rounded-[0.375rem] border-gray-9 border-[0.1rem] w-1/2 flex justify-center items-center focus:border-blue-1 focus:text-blue-1 focus:bg-[#EDF4F8]"
//             >
//               <Image
//                 className="size-[3.6rem] "
//                 src="/svg/naverPay.svg"
//                 alt="naver pay"
//                 width={24}
//                 height={10}
//               />
//             </button>
//             <button
//               onClick={() => handlePaymentMethodChange('Kakaopay')}
//               type="button"
//               className="rounded-[0.375rem] border-gray-9 border-[0.1rem] w-1/2 flex justify-center items-center focus:border-blue-1 focus:text-blue-1 focus:bg-[#EDF4F8]"
//             >
//               <Image
//                 className="size-[3.6rem]"
//                 src="/svg/kakaoPay.svg"
//                 alt="kakao pay"
//                 width={24}
//                 height={10}
//               />
//             </button>
//           </div>
//         </div>
//         <div className="w-auto flex items-start bg-gray-8 text-gray-7 rounded-[0.625rem] p-[1.25rem]">
//           프로젝트 시작 7일 전 : 100% 환불 <br />
//           프로젝트 시작 6일~3일 전 : 50% 환불
//           <br />
//           프로젝트 시작 2일 전~1주차 : 20% 환불
//           <br />
//           프로젝트 시작 2주차~ : 환불 불가
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// }
