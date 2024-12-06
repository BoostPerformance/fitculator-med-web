import { DropdownOption } from '@/types/types';

const totalCholesterol: DropdownOption[] = [
  {
    id: 1,
    option: '정상: 200 mg/dL 미만',
  },
  { id: 2, option: '경계: 200-239 mg/dL' },
  { id: 3, option: '높음: 240 mg/dL 이상' },
];

const LDLCholesterol = [
  {
    id: 1,
    option: '정상 : 130 mg/dL 미만',
  },
  { id: 2, option: '경계: 130-159 mg/dL' },
  { id: 3, option: '높음: 160-189 mg/dL' },
  { id: 4, option: '매우 높음: 190 mg/dL 이상' },
];

export { totalCholesterol, LDLCholesterol };
