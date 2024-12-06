import Nav from './nav';

const Header = () => {
  return (
    <header className="sticky w-full sm:w-auto z-50">
      <Nav smWidth="sm:w-[7rem]" />
    </header>
  );
};

export default Header;
