import Section from './section';
import Image from 'next/image';

export default function LonelySection() {
  return (
    <section className="flex flex-col items-center w-full py-[11rem] h-auto bg-white sm:py-[6em] leading-tight">
    <div className="w-[55rem] flex flex-col items-center md:w-full sm:w-full">
      <h1 className="text-[30px] font-bold sm:text-[24px] text-center mb-8">
        병원의 경쟁력을 높이는<br className="hidden sm:block" /> 사후관리 솔루션
      </h1>
      
      {/* 데스크탑 이미지 */}
      <Image
        src="/images/solution.svg"
        width={10}
        height={10}
        alt="solution"
        className="w-full sm:hidden"/>
      
      {/* 모바일 이미지 */}
      <div className="hidden sm:flex sm:justify-center sm:w-full">
        <Image
          src="/images/solution_vertical.svg"
          width={10}
          height={10}
          alt="solution"
          className="w-[50%]"
        />
      </div>
    </div>
  </section>
    // <section className=" flex flex-col items-center w-full py-[11rem] h-auto bg-white sm:py-[6em] leading-tight">
    //   <Section
    //     title={
    //       <>
    //         병원의 경쟁력을 높이는 사후관리 솔루션
    //       </>
    //     }
    //     imageSrc="/images/solution.svg"
    //     imageSrcSm="/images/solution_vertical.svg"
    //     reverseY
    //     textCenter
    //     className="w-[55rem]"
    //     // title2_5700
    //     isResponsive={true}
    //     titleClassName="text-[30px] font-bold sm:text-[24px]"
    //   />
    // </section>
  );
}
