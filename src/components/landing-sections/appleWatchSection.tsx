import Image from 'next/image';
import Section from './section';

export default function AppleWatchSection() {
  return (
    <section className="flex flex-col items-center py-[6.73rem] mb-[2rem] sm:mb-0 sm:py-[1rem] gap-[2rem] sm:px-[1.8rem] leading-tight">
      <Section
        title={
          <>
            <span className="font-normal">위고비 처방 환자 관리,</span><br className="hidden sm:block" /> <span className="font-bold"> 핏큘레이터와 함께하면 달라집니다.</span>
          </>
        }
        
        reverseY
        textCenter
        title2_5900
        description1_75700
        titleClassName="sm:text-1.25-700"
        descriptionClassName="sm:text-1-600 "
      />
    <Image
      className="w-[332px] h-[514px] sm:w-[250px] sm:h-[386px]"
      src="/images/screen_main.svg"
      alt="smart-watch"
      width={332}
      height={514}
      priority
    />
    
    {/* <h1 className="text-[20px] font-semibold">트레이닝 이론 기반 운동 관리</h1>
    <h1 className="text-[20px] font-semibold text-[#585858] md:text-[20px] sm:text-[20px]">
    웨어러블 디바이스와 연동된 데이터 기반 솔루션</h1> */}
    <h2 className="text-[30px] font-semibold text-center sm:text-[20px]">
      트레이닝 이론 기반 운동 관리
    </h2>
    <p className="text-[20px] font-semibold text-[#585858] text-center md:text-[20px] sm:text-[18px]">
      웨어러블 디바이스와 연동된<br className="hidden sm:block" /> 데이터 기반 솔루션
    </p>
    </section>
  );
}
