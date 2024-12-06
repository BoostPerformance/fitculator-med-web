'use client';
import { useState } from 'react';
import { ReactNode } from 'react';

type AccordionItemProps = {
  title?: string;
  content?: ReactNode;
  path?: boolean;
  titleFontWeight?: string;
  svgColor?: string;
  gap?: string;
};

function AccordionItem({
  title,
  content,
  path,
  titleFontWeight = 'text-1.25-700',
  svgColor = 'currentColor',
  gap,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-1 border-gray-2">
      <button
        className="flex justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span
          className={`py-2 w-auto sm:text-0.875-700 sm:py-0 ${titleFontWeight}`}
        >
          {title}
        </span>
        <svg
          className={`w-[1.5rem] h-[1.5rem] transform transition-transform duration-200 text-blue-1 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={`${svgColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`text-gray-1 text-1-500 md:text-0.75-500 pb-[2.75rem] flex flex-col ${gap} sm:gap-[0.7rem]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 920 2"
            fill="none"
          >
            {path && <path d="M0 1H920" stroke="#F5F5F5" stroke-width="2" />}
          </svg>
          {content}
        </div>
      )}
    </div>
  );
}

type AccordionProps = {
  items: {
    id: number;
    title?: string;
    content: ReactNode;
    titleFontWeight?: string;
    svgColor?: string;
  }[];
  gap?: string;
};

function Accordion({ items, gap = 'gap-[1.69rem]' }: AccordionProps) {
  return (
    <div className="w-full max-w-[55rem] mx-auto px-[1.37rem] md:px-[2.5rem]">
      {items.map((item) => (
        <AccordionItem
          path={true}
          key={item.id}
          title={item.title}
          content={item.content}
          titleFontWeight={item.titleFontWeight}
          svgColor={item.svgColor}
          gap={gap}
        />
      ))}
    </div>
  );
}

export { Accordion, AccordionItem };
