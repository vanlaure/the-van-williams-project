import { motion } from 'framer-motion';
import { faqData } from '../../../data/faq';
import { FAQItem } from './FAQItem';

export function FAQAccordion() {
  return (
    <div className="space-y-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white text-center"
      >
        Frequently Asked Questions
      </motion.h3>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}