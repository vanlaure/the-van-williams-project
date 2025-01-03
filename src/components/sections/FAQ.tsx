import { HelpCircle } from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';
import { FAQItem } from './faq/FAQItem';
import { faqData } from '../../data/faq';

export default function FAQ() {
  return (
    <SectionLayout
      id="faq"
      title="Frequently Asked Questions"
      description="Common questions about the Van Williams Project and AI creativity"
      icon={HelpCircle}
      className="bg-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </SectionLayout>
  );
}