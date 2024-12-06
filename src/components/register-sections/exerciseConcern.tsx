'use client';
import RegisterItemTitle from './registerItemTitle';
import Input from '../input';
import { ExercisePreferenceProps } from '@/types/types';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ExerciseConcern({
  formData,
  setFormData,
}: ExercisePreferenceProps) {
  const [error, setError] = useState({ text: '' });

  const searchParams = useSearchParams();
  const title: string | null = searchParams.get('title');
  const healthQuestions: boolean = title === 'Health' ? true : false;

  const handleConcernChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      exercisePreferences: {
        ...prevData.exercisePreferences,
        exercise_concern: value,
      },
    }));
  };

  return (
    <div className="flex gap-[5.19rem] w-[56.5625rem] mb-[5rem] sm:w-[20rem] sm:flex-col sm:gap-[1rem] sm:mt-[3.75rem]">
      <RegisterItemTitle
        title={`${healthQuestions ? '건강' : '운동'} 고민`}
        required={false}
      />

      <div className="w-auto flex flex-col gap-[0.75rem]">
        <h1 className="text-1.25-700 text-gray-1 sm:text-1-700">
          {`바라는 점 /${healthQuestions ? '건강' : '운동'} 고민`}
        </h1>
        <p className="text-1-500 text-gray-7 sm:text-0.75-500">
          평소 갖고 있었던 {`${healthQuestions ? '건강' : '운동'}`}
          관련 고민, 또는 저희 Fitculator 팀에게 하고 싶은 말이 있다면 작성해
          주세요. <br />이 내용을 최대한 반영하여 더 좋은 서비스를
          제공해드릴게요.
        </p>
        <Input
          name="text"
          placeholder="자유롭게 작성해 주세요."
          width="42.75rem"
          value={formData.exercisePreferences.exercise_concern || ''}
          onChange={handleConcernChange}
          type="text"
        />
        {error.text && (
          <span className="text-red-500 text-sm">{error.text}</span>
        )}
      </div>
    </div>
  );
}
