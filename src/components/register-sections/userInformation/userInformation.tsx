import Input from '../../input';
import RegisterItemTitle from '../registerItemTitle';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import BatchesDropdown from '@/components/batchesDropdown';
import { UserInformationProps, DropdownOption } from '@/types/types';

export default function UserInformation({
  formData,
  setFormData,
}: UserInformationProps) {
  const now = new Date();
  const koreanTimezoneOffset = 9 * 60; // 한국 시간대는 UTC+9
  now.setMinutes(now.getMinutes() + koreanTimezoneOffset);
  const startMonth = now.getMonth() + 2; // getMonth()는 0부터 시작하므로 +1, 다음 달을 받아야 하니 +2
  const startDay = now.getDate();

  // 기본 기수 설정 (예: 9기는 2024년 8월)
  const baseMonth = 9; // 9월이 기준
  const baseBatch = 10; // 10기가 기본

  const [batchStartDate, setBatchStartDate] = useState(`${startMonth}`);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    birthday: '',
    phone_number: '',
  });

  // 현재 월에 따른 기수 계산
  let rowNO;

  if (startMonth >= baseMonth) {
    rowNO = baseBatch + (startMonth - baseMonth);
  } else {
    rowNO = baseBatch + (startMonth + (12 - baseMonth));
  }

  const searchParams = useSearchParams();

  const title: string | null = searchParams.get('title');
  const proQuestions: boolean = title === 'PRO' ? true : false;
  const healthQuestions: boolean = title === 'Health' ? true : false;

  const emailValidation = (email: string) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!emailRegex.test(email)) {
      return '* 이메일을 입력해 주세요.';
    }
    return '';
  };

  const phoneValidation = (phone_number: string) => {
    const phoneRegex = /^010[0-9]{8}$/;
    if (!phoneRegex.test(phone_number)) {
      return '* 전화번호만 입력해 주세요.';
    }
    return '';
  };

  const birthdayValidation = (birthday: string) => {
    const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdayRegex.test(birthday)) {
      return '* 올바른 생년월일을 입력해 주세요.';
    }
    return '';
  };

  const nameValidation = (name: string) => {
    if (name.length < 2) {
      return '* 이름은 최소 두글자 이상이어야 합니다.';
    }
    return '';
  };

  const handleSelectGender = (item: '남성' | '여성' | '기타' | '비공개') => {
    setFormData((prevData) => ({
      ...prevData,
      user: { ...prevData.user, gender: item },
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      user: {
        ...prevData.user,
        [name]: value,
      },
    }));
  };

  const handleBDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // 숫자 이외의 문자는 제거

    // 년도는 19XX 또는 20XX로만 시작하도록 제한
    if (value.length >= 4) {
      const year = parseInt(value.slice(0, 4), 10);
      if (year < 1900 || year > 2099) {
        return; // 유효하지 않은 년도는 처리하지 않음
      }
    }

    // 월은 1-12 범위로 제한
    if (value.length >= 6) {
      const month = parseInt(value.slice(4, 6), 10);
      if (month < 1 || month > 12) {
        return; // 유효하지 않은 월은 처리하지 않음
      }
    }

    // 일은 1-31 범위로 제한
    if (value.length >= 8) {
      const day = parseInt(value.slice(6, 8), 10);
      if (day < 1 || day > 31) {
        return; // 유효하지 않은 일은 처리하지 않음
      }
    }

    // 형식에 맞게 대시(-) 추가
    if (value.length > 6) {
      value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
    } else if (value.length > 4) {
      value = `${value.slice(0, 4)}-${value.slice(4, 6)}`;
    } else if (value.length > 0) {
      value = `${value.slice(0, 4)}`;
    }

    setFormData((prevData: any) => ({
      ...prevData,
      user: {
        ...prevData.user,
        birthday: value,
      },
    }));
  };

  const handleBlurChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'name') {
      error = nameValidation(value);
    } else if (name === 'email') {
      error = emailValidation(value);
    } else if (name === 'phone_number') {
      error = phoneValidation(value);
    } else if (name === 'birthday') {
      error = birthdayValidation(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBatchesChange = (item: DropdownOption) => {
    setFormData((prev: any) => ({
      ...prev,
      subscriptions: {
        batch_id: item.id,
      },
    }));

    const dropdownBatchStartedMonth =
      baseMonth + (parseInt(item.option) - baseBatch);
    const month =
      dropdownBatchStartedMonth > 12
        ? dropdownBatchStartedMonth - 12
        : dropdownBatchStartedMonth;

    setBatchStartDate(`${month}`);
  };

  return (
    <div>
      <div className="flex gap-[5.19rem] w-[56.5625rem] mb-[5rem] sm:w-[20rem] sm:flex-col sm:gap-[1rem]">
        <RegisterItemTitle title="개인정보" required />

        <div className="flex flex-col gap-[3.12rem] sm:gap-[2.5rem]">
          <div className="flex flex-col sm:gap-[0.1rem]">
            <div className="flex gap-[0.5rem] items-end sm:items-center">
              <div className="text-1.25-700 text-gray-1 sm:text-1-700">
                이름
              </div>
              <p className="text-1-500 text-gray-7 sm:text-0.75-500">
                본명을 적어주세요.
              </p>
            </div>
            <Input
              name="name"
              placeholder="홍길동"
              width="21.25rem"
              value={formData?.user?.name || ''}
              onChange={handleInputChange}
              onBlur={handleBlurChange}
              type="text"
            />
            {errors.name && (
              <span className="text-red text-sm">{errors.name}</span>
            )}
          </div>
          {healthQuestions && (
            <>
              <div className="flex flex-col sm:gap-[0.1rem]">
                <div className="flex gap-[0.5rem] items-end sm:items-center">
                  <div className="text-1.25-700 text-gray-1 sm:text-1-700">
                    나이
                  </div>
                  <p className="text-1-500 text-gray-7 sm:text-0.75-500">
                    생년월일을 적어주세요. (YYYY-MM-DD)
                  </p>
                </div>
                <Input
                  name="birthday"
                  placeholder="YYYY-MM-DD"
                  width="21.25rem"
                  value={formData?.user?.birthday || ''}
                  onChange={handleBDayChange}
                  onBlur={handleBlurChange}
                  type="text"
                />
                {errors.birthday && (
                  <span className="text-red text-sm">{errors.birthday}</span>
                )}
              </div>
            </>
          )}
          {proQuestions && (
            <div className="flex flex-col">
              <div>
                <div className="flex gap-[0.3rem] items-end sm:items-center sm:gap-[0.1rem]">
                  <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
                    참여기수
                  </h1>
                  <p className="text-1-500 text-gray-7 sm:text-0.75-500">
                    시작일은 12월 1일 입니다.
                  </p>
                </div>

                {startDay >= 21 && (
                  <span className="text-0.875-500 text-gray-7 sm:text-0.75-500">
                    *{rowNO}기 마감이 얼마 안남았어요!
                  </span>
                )}
                <BatchesDropdown
                  rowNO={rowNO}
                  onChange={handleBatchesChange}
                  title="기수를"
                />
              </div>
            </div>
          )}
          {!proQuestions && (
            <div className="flex flex-col gap-[0.75rem]">
              <h1 className="text-1.25-700 text-gray-6 sm:text-1-700 ">성별</h1>
              <div className="flex gap-[1.06rem] sm:gap-[0.7rem] sm:text-0.75-500">
                <button
                  onClick={() => handleSelectGender('남성')}
                  type="button"
                  className={`px-[1.25rem] py-[0.625rem] rounded-[0.375rem] border-[0.1rem] ${
                    formData.user.gender === '남성'
                      ? 'border-blue-1 text-blue-1'
                      : 'border-gray-7 text-gray-7'
                  }`}
                >
                  남성
                </button>
                <button
                  onClick={() => handleSelectGender('여성')}
                  type="button"
                  className={`px-[1.25rem] py-[0.625rem] rounded-[0.375rem] border-[0.1rem] ${
                    formData.user.gender === '여성'
                      ? 'border-blue-1 text-blue-1'
                      : 'border-gray-7 text-gray-7'
                  }`}
                >
                  여성
                </button>
                <button
                  onClick={() => handleSelectGender('기타')}
                  type="button"
                  className={`px-[1.25rem] py-[0.625rem] rounded-[0.375rem] border-[0.1rem] ${
                    formData.user.gender === '기타'
                      ? 'border-blue-1 text-blue-1'
                      : 'border-gray-7 text-gray-7'
                  }`}
                >
                  기타
                </button>
                <button
                  onClick={() => handleSelectGender('비공개')}
                  type="button"
                  className={`px-[1.25rem] py-[0.625rem] rounded-[0.375rem] border-[0.1rem] ${
                    formData.user.gender === '비공개'
                      ? 'border-blue-1 text-blue-1'
                      : 'border-gray-7 text-gray-7'
                  }`}
                >
                  비공개
                </button>
              </div>
            </div>
          )}
          <div className="flex flex-col">
            <div className="flex gap-[0.5rem] items-end sm:items-center">
              <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
                이메일 주소
              </h1>
              <p className="text-1-500 text-gray-7 sm:text-0.75-500">
                이메일 주소를 입력해 주세요.
              </p>
            </div>
            <Input
              name="email"
              placeholder="fit@gmail.com"
              width="31.25rem"
              value={formData.user.email || ''}
              onChange={handleInputChange}
              onBlur={handleBlurChange}
              type="email"
            />
            {errors.email && (
              <span className="text-red text-sm">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col sm:gap-[0.75rem]">
            <div className="flex gap-[0.5rem] items-end sm:items-center">
              <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
                연락처
              </h1>
              <p className="text-1-500 text-gray-7 sm:text-0.75-500">
                번호만 입력해 주세요.
              </p>
            </div>
            <Input
              name="phone_number"
              placeholder="01012345678"
              width="21.25rem"
              value={formData.user.phone_number || ''}
              onChange={handleInputChange}
              onBlur={handleBlurChange}
              type="tel"
            />
            {errors.phone_number && (
              <span className="text-red text-sm">{errors.phone_number}</span>
            )}
          </div>
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
