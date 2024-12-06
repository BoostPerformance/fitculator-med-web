import Button from '../button';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterSection() {
  return (
    <section className="relative w-full h-[763px] bg-white mx-auto">
      {/* 텍스트 컨테이너 */}
      <div className="absolute top-[60px] w-full flex justify-center z-20">
        <div className="flex flex-col max-w-[1920px] w-full px-[2.2rem] md:px-[4rem] sm:px-[2rem]">
          <h1 className="text-[40px] leading-[1.2] text-[#212325] font-black text-center
            lg:text-[36px]
            md:text-[32px]
            sm:text-[24px]">
            환자는 관리받고, 병원은 신뢰받는 위고비 관리 파트너
          </h1>
        </div>
          <div className="absolute top-[60px] w-full flex justify-center z-20">
            <div className="relative flex flex-col items-center gap-4 mt-20">
              <Image
                src="/images/benefit_1.png"
                width={438}
                height={0}
                alt="logo"
                className="w-[438px] sm:w-[80%]"
              />
            </div>
          </div>
        </div>

      {/* 그라데이션 배경 - 좌측 상단 모서리에서 시작 */}
      <div 
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: 'linear-gradient(160deg, #D9EEFF 0%, rgba(255, 255, 255, 0.98) 35%, #FFFFFF 100%)',
          backgroundSize: '100% 300%',
          backgroundPosition: 'top left'
        }}
      />
      
      {/* 배경색 베이스 */}
      <div className="absolute inset-0 w-full h-full bg-white z-0" />
    </section>
  );
}
