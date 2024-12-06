import Link from 'next/link';
import Image from 'next/image';

interface NavLogoProps {
  smWidth: string;
}

const NavLogo: React.FC<NavLogoProps> = ({ smWidth }) => {
  return (
    <Link className="p-2 sm:pl-0" href="./">
      <Image
        className={`w-[11.7rem] ${smWidth}`}
        src="/images/logo-h.svg"
        alt="main "
        width={1000}
        height={1000}
        priority
      />
    </Link>
  );
};

export default NavLogo;
