import { Accordion } from '../accordion';
import Section from './section';
import faqItems from '@/data/faqItems';

export default function FaqSection() {
  return (
    <section className="flex flex-col items-center w-full py-[10rem] h-auto sm:py-[5rem] gap-[3rem]">
      <Section
        title={
          <>
            FAQ <br />더 궁금한 점이 있으신가요?
          </>
        }
        description={
          <>
            자주 물어보신 질문들만 <br />
            모아둔 FAQ를 참고해 주세요.
          </>
        }
        textCenter
        reverseY
        title2_5900
        description1_75700
        titleClassName="sm:text-1.25-900"
      />
      <Accordion items={faqItems} />
    </section>
  );
}
