import { useState } from 'react';

const goals = [
  '재미/흥미',
  '운동 수행 능력 향상',
  '다이어트',
  '건강 및 질병 예방',
  '근력/근육량 향상',
  '운동 습관 형성',
];
type MultiSelect = {
  onChange: (item: string[]) => void;
};

const MultiSelectionButtons = ({ onChange }: MultiSelect) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    const updatedGoals = selectedGoals.includes(goal)
      ? selectedGoals.filter((item) => item !== goal) // 이미 선택된 목표 제거
      : [...selectedGoals, goal]; // 새 목표 추가

    onChange(updatedGoals); // 변경된 배열을 부모 컴포넌트로 전달
    setSelectedGoals(updatedGoals);
  };

  return (
    <div className=" w-[42.9rem] h-[5.9rem] sm:flex sm:flex-wrap sm:w-[20rem]">
      {goals.map((goal) => (
        <button
          key={goal}
          onClick={() => toggleGoal(goal)}
          type="button"
          className={`mt-[1.06rem] mr-[1.06rem] px-[1.25rem] py-[0.62rem] rounded-[0.375rem] border-[0.1rem]  sm:w-auto sm:text-center sm:flex-2 sm:text-0.875-500  ${
            selectedGoals.includes(goal)
              ? 'bg-blue-500 text-white'
              : 'border-gray-7 text-gray-7'
          }`}
        >
          {goal}
        </button>
      ))}
    </div>
  );
};

export default MultiSelectionButtons;
