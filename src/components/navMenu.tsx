import Link from 'next/link';

const NavMenu = () => {
  return (
    <div className="flex justify-end gap-[2rem] p-[0.6rem] text-1.125-700 md:text-1-700 sm:gap-3 sm:p-0 sm:flex-col sm:w-auto w-[50rem] ">
      {/* <Link 
        href="/privacy-policy"
        className="text-[#635C5C] text-[18px] font-bold hover:opacity-80"
      >
        개인정보처리방침
      </Link> */}
    </div>
  );
};

export default NavMenu;
