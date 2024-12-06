'use client';
import ProductItem from './productItem';
import Image from 'next/image';
import Toggle from './toggle';
import { useState } from 'react';

const Product = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1개월');

  const handleToggleProduct = (period: string) => {
    setSelectedPeriod(period);
  };
  const perMonth = selectedPeriod;

  return (
    <div
      className="h-auto bg-gray-2 w-full md:w-full py-[6.25rem] flex flex-col items-center gap-[3rem] sm:gap-[1rem] sm:mx-[1.3rem] sm:w-full leading-tight"
      id="product-section"
    >
      <Image src="/images/logo-2.png" alt="logo" width={50} height={50} />
      <div className="flex-row gap-0 flex sm:flex-col sm:items-center sm:mb-[3rem]">
        <h1 className="text-2.5-900 sm:text-1.75-900">
          비대면 운동관리 프로그램
        </h1>
        <h1 className="text-2.5-900 sm:text-1.75-900">
          &nbsp;핏큘레이터 신청하기
        </h1>
      </div>
      {/* <Toggle
        handleToggleProduct={handleToggleProduct}
        selectedPeriod={selectedPeriod}
      /> */}

      <div className="flex flex-row h-auto gap-[3rem] w-[50rem] md:gap-[1.3rem] md:w-[95%] justify-center sm:flex-col">
        <ProductItem
          title="Basic"
          descriptions={[
            '운동량 계산 및 분석',
            '피로도 관리',
            <>
              <div>헬스케어 AI 어시스턴트</div>
              <div>실시간 질문답변, 프로그램 피드백</div>
            </>,
            '커뮤니티',
          ]}
          price={0}
          selectedPeriod={selectedPeriod}
        />
        <ProductItem
          title="PRO"
          descriptions={[
            '운동량 계산 및 분석',
            '피로도 관리',
            <>
              <div>헬스케어 AI 어시스턴트</div>
              <div>실시간 질문답변, 프로그램 피드백</div>
            </>,
            '커뮤니티',
            <>
              <div className="flex flex-col items-start">
                <div className="flex flex-col items-start sm:gap-1">
                  <div>운동 전담 코치 1인 배정</div>
                  <div>맞춤형 운동 프로그램 제공</div>
                </div>
                <div className="flex items-center sm:flex-row gap-1">
                  {/* <div>• 운동 피드백</div> */}
                  <div>운동 피드백</div>
                  <span className="rounded-[1.125rem] py-[0.1rem] px-[0.625rem] md:px-[0.2rem] border-[0.1rem] border-white text-white bg-transparent text-0.875-700 md:text-0.7-700 sm:text-0.7-700 ">
                    인기
                  </span>
                </div>
              </div>
            </>,
          ]}
          targetCustomer="혼자 운동하지만, 전문가의 가이드가 필요한 분"
          price={70000}
          perMonth="1개월"
          pro
          selectedPeriod={selectedPeriod}
        />
        <ProductItem
          title="핏다챌"
          descriptions={[
            '운동량 계산 및 분석',
            '피로도 관리',
            <>
              <div>헬스케어 AI 어시스턴트</div>
              <div>실시간 질문답변, 프로그램 피드백</div>
            </>,
            '커뮤니티',
            <>
              <div>운동 전담 코치 1인 배정</div>
              <div>개인의 체력과 목표에 맞춘 데일리 피드백</div>
            </>,
            <>
              <div className="text-blue-1">식단 전담 코치 1인 배정</div>
              <div className="text-blue-1">
                개인의 일상에 맞춘 꼼꼼한 데일리 피드백
              </div>
            </>,
          ]}
          targetCustomer="식습관 및 운동습관을 점검받아보고 싶으신 분"
          price={59000}
          perMonth="2주"
          selectedPeriod={selectedPeriod}
          health
        />
        {/* <ProductItem
          title="Health"
          descriptions={[
            '운동량 계산 및 분석',
            '피로도 관리',
            <>
              <div>헬스케어 AI 어시스턴트</div>
              <div>• 실시간 질문답변, 프로그램 피드백</div>
            </>,
            '커뮤니티',
            <>
              <div>운동 전담 코치 1인 배정</div>
              <div>• 맞춤형 운동 프로그램 제공</div>
              <div>• 운동 데일리 피드백</div>
            </>,
            <>
              <div className="text-blue-1">식단 전담 코치 1인 배정</div>
              <div className="text-blue-1">• 식단 데일리 피드백</div>
              <div className="text-blue-1">• 생활습관 관리 (수면시간 등)</div>
            </>,
          ]}
          targetCustomer="건강검진에서 이상지질혈증 의심 판정을 받은 분"
          price={135000}
          perMonth={perMonth}
          selectedPeriod={selectedPeriod}
          health
        /> */}
      </div>
    </div>
  );
};

export default Product;
