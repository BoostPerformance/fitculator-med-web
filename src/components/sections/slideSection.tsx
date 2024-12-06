import Section from './section';

export default function SlideSection() {
  return (
    <div className=" bg-blue w-full flex flex-col items-center py-[6.25rem] gap-[8.75rem]">
      <Section
        title={
          <>
            운동기록을 올리면 <br />
            실시간으로
            <br />
            운동량이 계산돼요.
          </>
        }
        description={
          <>
            나의 운동이 부족한지, 과한지
            <br /> 한 눈에 확인하고, <br />
            피드백을 받을 수 있어요.
          </>
        }
        imageSrc="graph"
        imgeSize={350}
      />
      <Section
        title={<>운동량그래프, 피로도 분석</>}
        description={
          <>
            사소한 질문에도
            <br /> 구체적이고, 이해하기 쉽고, <br />
            친절하게 답변을 남겨요.
          </>
        }
        imageSrc="section-image1"
        imgeSize={400}
        reverseX
        textAlign
      />
      <Section
        title={
          <>
            운동관련 질문을
            <br /> 언제든지 할 수 있어요.
          </>
        }
        description={
          <>
            사소한 질문에도 <br /> 구체적이고, 이해하기 쉽고,
            <br /> 친절하게 답변을 남겨요.
          </>
        }
        imageSrc="section-image2"
        imgeSize={400}
      />

      <Section
        title={
          <>
            전문 코치님의 <br /> 피드백을 <br />
            받아보세요.
          </>
        }
        description={
          <>
            코치님이 직접 짜주는 프로그램도
            <br /> 받아볼 수 있어요.
          </>
        }
        imageSrc="section-image3"
        imgeSize={400}
        reverseX
        textAlign
        pro
      />
    </div>
  );
}
