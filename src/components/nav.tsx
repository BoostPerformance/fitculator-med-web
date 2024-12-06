import Button from './button';
import NavLogo from './navLogo';
import NavMenu from './navMenu';
import React from 'react';
import Link from 'next/link';

interface NavProps {
  navMenu?: boolean;
  smWidth?: string;
}

const Nav: React.FC<NavProps> = ({ navMenu = false, smWidth = '' }) => {
  // TODO: replace nav to Tally form URL 
  return (
    <nav
      className={`w-auto px-[2.2rem] flex text-gray-1 place-content-around items-center py-[0.55rem] sticky top-0 sm:flex-row sm:gap-[2rem] sm:px-[1rem] z-50 ${
        navMenu
          ? ' gap-[7rem] md:gap-[2rem] sm:items-start sm:gap-[1.62rem] sm:flex-col'
          : ' bg-[#3191FF]'
      }`}
    >
      {navMenu ? (
        <></>
      ) : (
        <NavLogo smWidth={smWidth} />
    )}
      {navMenu ? (
        <NavMenu />
      ) : (
        <Link href="https://tally.so/r/n0oB5y">
          <Button text="지금 제휴 상담하기" size="xs" variant="default" />
        </Link>
      )}
    </nav>
  );
};

export default Nav;
