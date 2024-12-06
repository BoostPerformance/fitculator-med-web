import Dropdown from '../dropdown';
import GoalPercentage from '@/data/goalPercentage';
import ReferralSource from '@/data/referralSource';
import RegisterItemTitle from './registerItemTitle';
import { useSearchParams } from 'next/navigation';
import ExerciseGuideline from './exerciseGuideline';
import {
  RegisterFormData,
  ExercisePreferenceProps,
  DropdownOption,
} from '@/types/types';
import { useState, useEffect } from 'react';
import ExerciseModal from '../exerciseModal';
import DropdownMenu from '../dropdown';
import HealthInformation from '../exercisePreference/healthInformation';
import ExerciseGoal from '../exercisePreference/exerciseGoal';
import ExercisePerformanceLevel from '../exercisePreference/exercisePerformanceLevel';

export default function ExercisePreference({
  formData,
  setFormData,
}: ExercisePreferenceProps) {
  const searchParams = useSearchParams();

  const title: string | null = searchParams.get('title');
  const proQuestions: boolean = title === 'PRO' ? true : false;
  const healthQuestions: boolean = title === 'Health' ? true : false;

  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 기준 너비 설정 (예: 768px 이하를 모바일로 간주)
    };

    checkIsMobile(); // 초기 로드 시 모바일 감지

    window.addEventListener('resize', checkIsMobile); // 윈도우 크기 변경 시 감지

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleReferralSourceChange = (item: DropdownOption) => {
    setFormData((prev: RegisterFormData) => ({
      ...prev,
      exercisePreferences: {
        ...prev.exercisePreferences,
        referral_source: item.option,
      },
    }));
  };

  const handleRadioChange = (item: number) => {
    setFormData((prev: RegisterFormData) => ({
      ...prev,
      exercisePreferences: {
        ...prev.exercisePreferences,
        exercise_level: item,
      },
    }));
  };

  const handleMultiSelectChange = (selectedGoals: string[]) => {
    setFormData((prev: RegisterFormData) => ({
      ...prev,
      exercisePreferences: {
        ...prev.exercisePreferences,
        exercise_goal: selectedGoals.join(','),
      },
    }));
  };

  const handlePerformanceLevelChange = (item: DropdownOption) => {
    setFormData((prev: RegisterFormData) => ({
      ...prev,
      exercisePreferences: {
        ...prev.exercisePreferences,
        exercise_performance_level: item.option,
      },
    }));
  };

  const handleModal = () => {
    setShowModal(false);
  };

  const handleGuidelineClick = () => {
    if (isMobile) {
      setShowModal(true);
    }
  };

  const onChangeTotalChol = (item: DropdownOption) => {
    setFormData((prev: RegisterFormData) => ({
      ...prev,
      exercisePreferences: {
        ...prev.exercisePreferences,
        total_cholesterol: item.option,
      },
    }));
  };

  const onChangeLDLChol = (item: DropdownOption) => {
    setFormData((prev: RegisterFormData) => ({
      ...prev,
      exercisePreferences: {
        ...prev.exercisePreferences,
        ldl_cholesterol: item.option,
      },
    }));
  };

  return (
    <div>
      <div className="flex gap-[5.19rem] w-[56.8rem] mb-[5rem] sm:w-auto sm:flex-col sm:gap-[1rem] sm:mt-[3.75rem]">
        <RegisterItemTitle
          title={`${healthQuestions ? '건강' : '운동'} 정보`}
          required
        />

        <div className="flex flex-col gap-[3.12rem] sm:gap-[2.5rem]">
          {healthQuestions ? (
            <HealthInformation
              onChangeTotalChol={onChangeTotalChol}
              onChangeLDLChol={onChangeLDLChol}
            />
          ) : (
            <>
              <ExerciseGoal onChange={handleMultiSelectChange} />
              <ExercisePerformanceLevel onChange={handleRadioChange} />
            </>
          )}

          {proQuestions ? (
            <div className="flex flex-col gap-[0.7rem]">
              <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
                나의 이번 기수 목표운동량을 선택해주세요.
              </h1>
              <div>
                <p className="text-1-500 text-gray-7 sm:text-0.875-500">
                  선택하신 &apos;목표운동량 + 근력운동 2회&apos;를 매주
                  달성하셔야 페이백 대상자가 됩니다.
                </p>
                <span className="text-1-500 text-gray-7 sm:text-0.75-500">
                  *핏큘레이터가 처음이라면 &apos;100&apos;을 추천해요!
                </span>
              </div>

              <DropdownMenu
                data={GoalPercentage}
                onChange={handlePerformanceLevelChange}
                title="목표운동량을"
              />
              <div className="w-[34.81rem] sm:w-auto ">
                <span
                  onMouseEnter={() => !isMobile && setShowModal(true)}
                  onMouseLeave={() => !isMobile && setShowModal(false)}
                  role="button"
                  className="text-1-500 text-gray-7 sm:cursor-pointer sm:text-0.75-500"
                  onClick={handleGuidelineClick}
                >
                  *목표운동량이란?
                </span>
                {showModal && !isMobile && <ExerciseGuideline />}
                {showModal && isMobile && (
                  <ExerciseModal handleModal={handleModal} />
                )}
              </div>
            </div>
          ) : (
            <div>
              <div>
                <h1 className="text-1.25-700 text-gray-6">
                  Fitculator를 알게된 경로
                </h1>
                <p className="text-1-500 text-gray-7">
                  저희를 어떻게 알게 되셨나요?
                </p>
              </div>
              <Dropdown
                data={ReferralSource}
                onChange={handleReferralSourceChange}
                title="옵션을"
              />
            </div>
          )}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="2"
        viewBox="0 0 938 2"
        fill="none"
      >
        <path d="M0 1H938" stroke="#CACACA" strokeWidth="5" />
      </svg>
    </div>
  );
}
