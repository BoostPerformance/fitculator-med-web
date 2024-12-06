'use client';

import { useState } from 'react';

interface ToggleProps {
  handleToggleProduct: (period: string) => void;
  selectedPeriod: string;
}

export default function Toggle({
  handleToggleProduct,
  selectedPeriod,
}: ToggleProps) {
  const [togglePosition, setTogglePosition] = useState(
    selectedPeriod === '1개월' ? 0 : 1
  );

  const handleClick = (period: string, position: number) => {
    setTogglePosition(position); // 슬라이드 위치 설정
    handleToggleProduct(period); // 부모 컴포넌트로 선택한 기간 전달
  };

  return (
    <div className="relative w-[14.5rem] h-[3.1rem] flex items-center border-[0.2rem] border-gray-300 rounded-[2.6rem] bg-white sm:mb-[1.25rem]">
      <div
        className="absolute w-[50%] h-[94%] bg-blue-1 rounded-[3rem] transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(${togglePosition * 100}%)`,
        }}
      ></div>

      <button
        onClick={() => handleClick('1개월', 0)}
        className={`z-10 w-[50%] h-full flex justify-center items-center transition-colors duration-300 ease-in-out ${
          selectedPeriod === '1개월' ? 'text-white' : 'text-gray-500'
        } text-1.25-700`}
      >
        1개월
      </button>

      <button
        onClick={() => handleClick('3개월', 1)}
        className={`z-10 w-[50%] h-full flex justify-center items-center transition-colors duration-300 ease-in-out ${
          selectedPeriod === '3개월' ? 'text-white' : 'text-gray-500'
        } text-1.25-700`}
      >
        3개월
      </button>
    </div>
  );
}
