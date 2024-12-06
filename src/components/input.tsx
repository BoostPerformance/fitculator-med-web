import React from 'react';
import { useState } from 'react';

interface InputProps {
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder: string;
  width?: string; // width를 선택적으로 받음
  type: string;
}

export default function Input({
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  width = '15rem',
  type,
}: InputProps) {
  return (
    <>
      <input
        className={`h-[3rem] pl-[1rem] rounded-[0.375rem] border-gray-9 border-[0.1rem] ${width} sm:w-[16.4rem]`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
