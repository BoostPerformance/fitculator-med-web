import Image from 'next/image';
import { ReactNode } from 'react';

interface SectionProps {
  title: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  reverseX?: boolean;
  reverseY?: boolean;
  textCenter?: boolean;
  imgeSize?: number;
  textAlign?: boolean;
  pro?: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  reverseX = false,
  reverseY = false,
  textCenter = false,
  imageSrc,
  imgeSize,
  description,
  textAlign = false,
  pro,
}) => {
  return (
    <div>
      <div
        className={`flex flex-row w-[56rem] sm:w-[27rem] sm:flex-col ${
          reverseX ? 'flex-row-reverse' : ''
        } h-auto ${
          reverseY ? 'flex-col' : ''
        } gap-[5rem] sm:flex-col-reverse sm:items-center sm:w-full`}
      >
        <div
          className={`${textAlign ? 'text-right' : 'text-left'} ${
            textCenter ? 'text-center' : ''
          } sm:text-center`}
        >
          {pro && (
            <h1 className="inline-block border-2 px-2 py-1 rounded-lg w-auto  border-gray-1 sm:px-1 sm:py-[0.1rem] text-gray-1">
              PRO
            </h1>
          )}

          <h2 className="text-2.5-700 mb-2 sm:text-1.75-900 sm:text-center">
            {title}
          </h2>
          {description && (
            <p className="text-1.75-500 text-gray-700 sm:text-1.5-500">
              {description}
            </p>
          )}
        </div>
        {imageSrc && (
          <Image
            src={`/images/${imageSrc}.png`}
            alt={imageSrc}
            width={imgeSize}
            height={100}
          />
        )}
      </div>
    </div>
  );
};
export default Section;
