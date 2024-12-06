import Reviews from '@/components/reviews';
import Product from '@/components/products';
import SlideSection from '@/components/landing-sections/slideSection';
import RegisterSection from '@/components/landing-sections/registerSection';
import AppleWatchSection from '@/components/landing-sections/appleWatchSection';
import FaqSection from '@/components/landing-sections/faqSection';
import LonelySection from '@/components/landing-sections/lonelySection';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <RegisterSection />
      <AppleWatchSection />
      <SlideSection />
      <LonelySection />
      {/* <Reviews />
      <Product /> */}
      <FaqSection />
    </div>
  );
}
