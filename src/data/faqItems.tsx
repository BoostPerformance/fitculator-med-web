import React, { ReactNode } from 'react';

interface FAQItem {
  id: number;
  title: string;
  content: ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    title: '스마트 워치가 없어도 사용할 수 있나요?',
    content: (
      <>
        네. 스마트 워치가 당장 없어도 핏큘레이터를 사용할 수 있지만, 보다 정확한 운동기록을 위해서는 사용하시는 편이 좋습니다. 
      </>
    ),
  },
  {
    id: 2,
    title: '웨어러블 디바이스 종류는 상관없나요?',
    content: (
      <>
        네. 심박 측정이 가능한 워치라면 브랜드 상관없이 모두 핏큘레이터를 사용할
        수 있어요.
        <br />
        (애플워치, 갤럭시워치, 미밴드, 핏빗, 가민, 순토 등)
        <br />꼭 워치가 아니어도 좋아요. <br className="hidden md:inline" />
        폴라나 F45의 라이언하트와 같은 심박측정장비를 가지고 계신 분들도
        핏큘레이터를 사용할 수 있어요.
      </>
    ),
  },
];

export default faqItems;
