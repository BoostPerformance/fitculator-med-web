import SnsIcons from './snsIcons';
import Nav from './nav';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pt-[4.7rem] pb-[6.8rem] px-[10rem] bg-gray-2 sm:px-[1.87rem] sm:pb-[6.5rem] sm:pt-[2.5rem] md:px-[2.5rem]">
    {/* 네비게이션 메뉴 */}
    <Nav navMenu smWidth="sm:w-[10.6rem]" />

    {/* 회사 정보 및 링크 컨테이너 */}
    <div className="mt-[4.5rem] flex justify-between items-start sm:mt-[2rem] sm:flex-col">
      {/* 회사 정보 */}
      <div className="text-gray-1 leading-[1.6]">
        <div className="text-[13px] text-gray-500">
          Fitculator (핏큘레이터) <br />
          사업자등록번호: 262-67-00523 | 대표:류현지 <br />
          통신판매신고: 2023-서울서대문-0576 <br />
          고객센터: 010-7977-1101 <br />
          이메일: contact@fitculator.io <br />
          서울특별시 중구 청계천로 100 (시그니처타워) 서관 10층 1029호 <br />
        </div>
        <div className="mt-4 text-[13px] text-gray-500">
          ©2024 Fitculator. All rights reserved.
        </div>
      </div>

      {/* 오른쪽 링크 영역 */}
      <div className="flex flex-col items-end gap-6 sm:items-start sm:mt-8">
        <Link 
          href="/privacy-policy"
          className="text-gray-1 text-[13px] hover:opacity-80"
        >
          개인정보처리방침
        </Link>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
