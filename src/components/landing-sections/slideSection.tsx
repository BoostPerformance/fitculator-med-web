import Section from './section';
import Image from 'next/image';

export default function SlideSection() {
  return (

    <div className="bg-[#F5FAFF] w-full flex flex-col items-center py-[6.25rem] md:px-[1.8rem] sm:px-[1.8rem] leading-tight">
      {/* 제목 섹션 */}
      <div className="max-w-[1200px] w-full text-center mb-[4rem]">
        <h2 className="text-[30px] font-normal text-[#212325] leading-tight md:text-[26px] sm:text-[22px]">
          환자는 <span className="font-bold">병원 밖에서도 관리받고,<br className="hidden sm:block" /> 병원은 신뢰</span>를 쌓습니다
        </h2>
      </div>

      {/* 카드 섹션 */}
      <div className="w-full max-w-[860px] flex flex-col gap-[17px]">
        {/* 위고비 처방 환자 연계 카드 - 큰 카드 */}
        <div className="w-[860px] h-[290px] rounded-[20px] p-[2rem] flex justify-between items-center md:w-full md:h-auto" style={{ backgroundColor: '#E8EFFF', boxShadow: 'none' }}>
          <div>
              <h3 className="text-[24px] font-bold text-[#212325] mb-[1rem] md:text-[24px] sm:text-[20px]">
                위고비 처방 환자 연계
              </h3>
              <p className="text-[20px] font-semibold text-[#585858] leading-relaxed md:text-[16px] sm:text-[14px]">
                병원에서 핏큘레이터 앱을 추천하여<br />
                환자에게 간편한 관리 환경 제공
              </p>
          </div>
        </div>

        {/* 아래 두 카드를 감싸는 컨테이너 */}
        <div className="flex gap-[22px] w-[860px] md:w-full md:flex-col">
          {/* 병원 전용 커스터마이징 카드 */}
          <div className="w-[419px] h-[290px] rounded-[20px] p-[2rem] md:w-full md:h-auto" style={{ backgroundColor: '#F4EBF6', boxShadow: 'none' }}>
          {/* <div className="w-[419px] h-[290px] rounded-[20px] p-[2rem] flex justify-between items-center md:w-full md:h-auto" style={{ backgroundColor: '#F4EBF6', boxShadow: 'none' }}> */}
            <div>
              <h3 className="text-[24px] font-bold text-[#212325] mb-[1rem] md:text-[24px] sm:text-[20px]">
                병원 전용 커스터마이징
              </h3>
              <p className="text-[20px] font-semibold text-[#585858] leading-relaxed md:text-[16px] sm:text-[14px]">
                병원별 환자 데이터 관리 및<br />
                개인별 보고서 제공
              </p>
            </div>
            {/* <Image
              src="/images/notepad.png"
              alt="notepad"
              width={120}
              height={120}
              className="md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px]"
            /> */}
          </div>

          {/* 비대면 솔루션 카드 */}
          <div className="w-[419px] h-[290px] rounded-[20px] p-[2rem] md:w-full md:h-auto" style={{ backgroundColor: '#E6E6FF', boxShadow: 'none' }}>
            <h3 className="text-[24px] font-bold text-[#212325] mb-[1rem] md:text-[24px] sm:text-[20px]">
              비대면 솔루션
            </h3>
            <p className="text-[20px] font-semibold text-[#585858] leading-relaxed md:text-[16px] sm:text-[14px]">
              병원 밖에서도 환자가 운동과 체중 관리를<br />
              지속할 수 있도록 설계
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className=" bg-white w-full flex flex-col items-center py-[6.25rem] gap-[8.75rem] md:px-[1.8rem] sm:px-[1.8rem] sm:gap-[5.44rem] leading-tight">
    //   <Section
    //     title={
    //       <>
    //         <div>
    //         환자는  병원 밖에서도 관리받고, 병원은 신뢰 를 쌓습니다
    //         </div>
    //       </>
    //     }
    //     className="w-[20rem] sm:w-[10rem]"
    //     title2_5700
    //     description1_75500
    //     textCenter
    //     titleClassName="sm:text-1.25-700 text-left sm:text-center"
    //     descriptionClassName="text-left sm:text-center "
    //   />
    //   <Section
    //     title={
    //       <>
    //         위고비 처방 환자 연계
    //       </>
    //     }
    //     description={
    //       <>
    //         병원에서 핏큘레이터 앱을 추천하여<br />
    //         환자에게 간편한 관리 환경 제공
    //       </>
    //     }
    //     className="w-[20rem]"
    //     title2_5700
    //     description1_75500
    //     titleClassName="sm:text-1.25-700"
    //   />
    //   <Section
    //     title={
    //       <>
    //         운동관련 질문을
    //         <br /> 언제든지 할 수 있어요.
    //       </>
    //     }
    //     description={
    //       <>
    //         사소한 질문에도 <br /> 구체적이고, 이해하기 쉽고,
    //         <br /> 친절하게 답변을 남겨요.
    //       </>
    //     }
    //     imageSrc="/svg/section-image2.svg"
    //     className="w-[20rem]"
    //     title2_5700
    //     description1_75500
    //     titleClassName="sm:text-1.25-700"
    //   />

    //   <Section
    //     title={
    //       <>
    //         <div>
    //           전문 코치님의
    //           <br />
    //           세심한 피드백을
    //           <span className="sm:hidden inline">
    //             <br />
    //           </span>
    //           받아보세요.
    //         </div>
    //       </>
    //     }
    //     description={
    //       <>
    //         코치님이 직접 짜주는&nbsp;
    //         <span className="hidden sm:inline">
    //           <br />
    //         </span>
    //         운동 프로그램도
    //         <br /> 받아볼 수 있어요.
    //       </>
    //     }
    //     imageSrc="/svg/section-image3.svg"
    //     className="w-[20rem]"
    //     reverseX
    //     textAlign
    //     pro
    //     title2_5700
    //     description1_75500
    //     titleClassName="sm:text-1.25-700"
    //   />
    // </div>
  );
}
