import { AccordionItem } from './accordion';

import React, { ReactNode } from 'react';

interface RefundPolicyItems {
  title: string;
  content: ReactNode;
}

const refundPolicyItems: RefundPolicyItems = {
  title: '*환불규정',
  content: (
    <div className="text-gray-7 bg-gray-2 text-1-500 w-[26rem] rounded-[0.625rem] sm:w-[17rem] p-[1.125rem] sm:text-0.75-500">
      <div>프로젝트 시작 7일 전 : 100% 환불</div>
      <div>프로젝트 시작 6일~3일 전 : 50% 환불</div>
      <div>프로젝트 시작 2일 전~1주차 : 20% 환불</div>
      <div>프로젝트 시작 2주차~ : 환불 불가</div>
    </div>
  ),
};

export default function RefundPolicy({ items }: any) {
  return (
    <div className="w-full max-w-[55rem] mx-auto px-[1.37rem] py-0">
      <AccordionItem
        path={false}
        title={refundPolicyItems.title}
        content={refundPolicyItems.content}
        svgColor="#9E9E9E"
        titleFontWeight="text-1-500"
        gap="gap-0"
      />
    </div>
  );
}
