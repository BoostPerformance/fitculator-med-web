import ExerciseGuideline from './register-sections/exerciseGuideline';

interface ExerciseModalProps {
  handleModal: () => void;
}

export default function ExerciseModal({ handleModal }: ExerciseModalProps) {
  return (
    <div className="sticky inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white sm:w-[22rem] rounded-[0.625rem] h-[53rem]">
        <ExerciseGuideline />
        <div className="flex justify-end">
          <button className="mr-[1rem] text-gray-1" onClick={handleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
