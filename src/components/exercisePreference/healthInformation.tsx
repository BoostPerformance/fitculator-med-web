import DropdownMenu from '../dropdown';
import { totalCholesterol, LDLCholesterol } from '@/data/healthItems';
import { DropdownOption } from '@/types/types';

interface HealthInfoProps {
  onChangeTotalChol: (item: DropdownOption) => void;
  onChangeLDLChol: (item: DropdownOption) => void;
}

export default function HealthInformation({
  onChangeTotalChol,
  onChangeLDLChol,
}: HealthInfoProps) {
  return (
    <>
      <div className="flex flex-col gap-0">
        <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
          총 콜레스테롤 수치를 선택해주세요.
        </h1>
        <DropdownMenu
          data={totalCholesterol}
          onChange={onChangeTotalChol}
          title="수치를"
        />
      </div>

      <div className="flex flex-col gap-0">
        <h1 className="text-1.25-700 text-gray-6 sm:text-1-700">
          LDL 콜레스테롤 수치를 주세요.
        </h1>
        <DropdownMenu
          data={LDLCholesterol}
          onChange={onChangeLDLChol}
          title="수치를"
        />
      </div>
    </>
  );
}
