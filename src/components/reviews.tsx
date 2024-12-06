import Image from 'next/image';
import ReviewItems from './reviewItems';

export default function Reviews() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[3rem] sm:gap-[1rem] py-[11rem] sm:py-[5rem] leading-tight">
      <div className="flex flex-col items-center">
        <h1 className="text-2-700 sm:text-1-900">재등록률 높은 핏큘레이터</h1>
        <h1 className="text-2.5-900 sm:text-1.25-900">
          실제 참가자들의 다양한 후기
        </h1>
      </div>
      <div className="py-4 overflow-x-hidden w-full md:w-[90%] sm:w-[100%] sm:h-auto scrollbar-hide relative ">
        <ReviewItems />
      </div>
    </div>
  );
}
