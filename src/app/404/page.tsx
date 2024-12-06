import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex py-[8rem] justify-center relative sm:items-center sm:flex-col sm:py-[6rem] sm:left-0">
      <Image
        src="/svg/404.svg"
        width={10}
        className="sm:w-[15rem] hidden sm:inline z-0 sm:relative mr-[5rem] pb-[2rem]"
        height={40}
        alt="404 이미지"
      />
      <div className="flex flex-col gap-[2rem] w-[40rem] sm:w-auto sm:px-[3rem]">
        <Image
          src="/images/logo.png"
          width={200}
          height={0}
          alt="logo"
          className="sm:hidden"
        />
        <div className="flex flex-col sm:items-center sm:justify-center font-theJamsil">
          <h1 className="text-4.25-500">앗</h1>
          <h2 className="text-1.875-300 text-gray-11 ">404! Error</h2>
        </div>
        <p className="text-1.875-400 sm:text-center sm:text-[1.7rem]">
          길을 잃으셨군요! <br /> 누구나 한번쯤은 길을 잃죠.
          <br /> 아래 버튼을 누르면 <br className="hidden sm:block" />
          홈페이지로 갈 수 있어요.
        </p>

        <Link href="./">
          <Button
            text="홈으로 돌아가기"
            size="sm"
            variant="white"
            className="sm:ml-[0.5rem] border-[0.1rem] border-blue-1"
          />
        </Link>
      </div>
      <div className="absolute z-0 right-[20rem] sm:right-0 sm:hidden md:relative md:right-[20rem] md:z-[-1]">
        <Image
          src="/svg/404.svg"
          width={10}
          className="w-[35.4375rem] h-[20.875rem] md:w-[30rem]"
          height={40}
          alt="404 이미지"
        />
      </div>
    </div>
  );
}
