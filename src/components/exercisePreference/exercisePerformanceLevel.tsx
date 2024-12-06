import RadioButtonSlide from '../radioButtonSlide';

interface ExerciseGoalProps {
  onChange: (item: number) => void; // onChange의 타입을 명시
}

const ExercisePerformanceLevel: React.FC<ExerciseGoalProps> = ({
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-[3rem] sm:gap-0 md:mt-[1rem]">
      <div className="flex items-end gap-1 sm:flex-col sm:items-start sm:mt-[5rem]">
        <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
          운동 수행 능력(1-7)
        </h1>
        <p className="text-1-500 text-gray-7 sm:text-0.75-500">
          본인이 생각하는 운동 수행력을 선택해주세요.
        </p>
      </div>

      <RadioButtonSlide onChange={onChange} />
    </div>
  );
};

export default ExercisePerformanceLevel;
