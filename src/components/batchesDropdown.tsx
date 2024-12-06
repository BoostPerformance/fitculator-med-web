import DropdownMenu from '@/components/dropdown';
import { DropdownOption } from '@/types/types';

export default function BatchesDropdown({
  rowNO,
  onChange,

  title,
}: {
  rowNO: number;
  onChange: (item: DropdownOption) => void;

  title: string;
}) {
  const Batches: DropdownOption[] = [
    { id: 1, option: `13기` },
    // { id: 1, option: `${rowNO}기` },
  ];

  return <DropdownMenu data={Batches} onChange={onChange} title={title} />;
}
