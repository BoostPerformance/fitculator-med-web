'use client';

import React from 'react';

interface RegisterTitleProps {
  title: string | null;
  period: string | null;
}

const RegisterTitle: React.FC<RegisterTitleProps> = ({ title, period }) => {
  return (
    <>
      <div className="w-[56.4375rem] sm:w-[20rem] sm:mb-[2rem]">
        <h1 className="text-3-700 sm:text-1.5-700">
          Fitculator
          <span className="text-blue-1 ">{` ${title} ${period} `}</span>
          신청
        </h1>
        <p className="text-1.25-700 text-gray-1 sm:text-0.875-700">
          WHO 표준운동량에 맞게 운동해보세요.
        </p>
      </div>
    </>
  );
};

export default RegisterTitle;
