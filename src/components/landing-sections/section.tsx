import Image from 'next/image';
import { ReactNode } from 'react';

interface SectionProps {
  title: ReactNode;
  description?: ReactNode;
  description1_75500?: boolean;
  description1_75700?: boolean;
  imageSrc?: string;
  imageSrcSm?: string;
  reverseX?: boolean;
  reverseY?: boolean;
  textCenter?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  textAlign?: boolean;
  pro?: ReactNode;
  title3700?: boolean;
  title2_5700?: boolean;
  title2_5900?: boolean;
  isResponsive?: boolean; // 추가된 prop
}

const Section: React.FC<SectionProps> = ({
  title,
  title3700 = false,
  title2_5700 = false,
  title2_5900 = false,
  reverseX = false,
  reverseY = false,
  textCenter = false,
  imageSrc,
  imageSrcSm,
  className,
  titleClassName,
  descriptionClassName,
  description,
  description1_75500 = false,
  description1_75700 = false,
  textAlign = false,
  pro,
  isResponsive = false, // 기본값을 false로 설정
}) => {
  return (
    <div
      className={`flex flex-row sm:w-[27rem] sm:flex-col sm:gap-[1.75rem] ${
        reverseX ? 'flex-row-reverse' : ''
      } h-auto ${
        reverseY ? 'flex-col' : ''
      } gap-[5rem] sm:items-center sm:w-full ${
        isResponsive ? 'sm:flex-col' : 'sm:flex-col-reverse '
      }`}
    >
      <div
        className={`${textAlign ? 'text-right' : 'text-left'} ${
          textCenter ? 'text-center' : ''
        } sm:text-center`}
      >
        {pro && (
          <h1 className="inline-block border-[0.1rem] px-[0.625rem] py-[0.3125rem] rounded-[0.31rem] w-auto border-black-1 sm:px-1 sm:py-[0.1rem] text-black-1 text-0.875-400 sm:mb-[0.625rem]">
            PRO
          </h1>
        )}

        <h2
          className={`${title3700 && 'text-3-700'} ${
            title2_5700 && 'text-2.5-700'
          } ${
            title2_5900 && 'text-2.5-900'
          } mb-2 md:text-2-900  sm:text-center ${titleClassName}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-gray-12 ${description1_75500 && 'text-1.75-500'} ${
              description1_75700 && 'text-1.5-700'
            } text-gray-5 md:text-1.5-700 sm:text-1-500 ${descriptionClassName}`}
          >
            {description}
          </p>
        )}
      </div>

      {/* 반응형 이미지를 제어하는 로직 */}
      {isResponsive ? (
        <>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageSrc}
              className={`sm:hidden inline ${className}`}
              width={1000}
              height={1000}
            />
          )}

          {imageSrcSm && (
            <Image
              src={imageSrcSm}
              alt={imageSrcSm}
              className={`hidden sm:inline ${className}`}
              width={900}
              height={900}
            />
          )}
        </>
      ) : (
        <>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageSrc}
              className={`inline ${className}`}
              width={1000}
              height={1000}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Section;
