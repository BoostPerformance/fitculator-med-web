'use client';

import { useState } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface DropdownOption {
  id: number;
  option: string;
}

interface DropdownItemProps {
  item: DropdownOption;
}

function DropdownItem({ item }: DropdownItemProps) {
  return (
    <ListboxOption
      value={item}
      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
    >
      <div className="flex items-center">
        <span className="text-gray-10 ml-3 block truncate font-normal group-data-[selected]:font-semibold">
          {item.option}
        </span>
      </div>
      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
        <CheckIcon aria-hidden="true" className="h-5 w-5" />
      </span>
    </ListboxOption>
  );
}

interface DropdownMenuProps {
  data: DropdownOption[];
  label?: string;
  onChange: (item: DropdownOption) => void;

  title?: string;
}

export default function DropdownMenu({
  data,
  label,
  onChange,
  title,
}: DropdownMenuProps) {
  const [selected, setSelected] = useState<DropdownOption | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleChange = (item: DropdownOption) => {
    setSelected(item);
    onChange(item);
    setError(null);
  };

  if (!data || data.length === 0) {
    return <div>No options available</div>;
  }

  const handleDropdownBlur = () => {
    if (!selected) {
      setError(`${title} 선택해주세요.`);
    }
  };
  return (
    <div onBlur={handleDropdownBlur}>
      <Listbox value={selected} onChange={handleChange}>
        {label && (
          <Label className="block text-sm font-medium leading-6 text-gray-900">
            {label}
          </Label>
        )}
        <div className="relative mt-2">
          <ListboxButton className="relative w-[15rem] h-[3rem] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-10 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {selected ? selected.option : `${title} 선택해주세요.`}
              </span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-[15rem] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-10 ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {data.map((item) => (
              <DropdownItem key={item.id} item={item} />
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
