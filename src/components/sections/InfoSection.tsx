import { HelpCircle } from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';
import { FactsList } from './info/FactsList';
import { FAQAccordion } from './info/FAQAccordion';
import { InfoVideoBackground } from '../backgrounds/InfoVideoBackground';

export default function InfoSection() {
  return (
    <div className="relative min-h-screen">
      <InfoVideoBackground />
      
      <div className="relative z-10">
        <SectionLayout
          id="info"
          title="Project Information"
          description="Discover the innovative technologies and methodologies driving the Van Williams Project. Our commitment to pushing the boundaries of AI capabilities has led to groundbreaking developments across multiple domains."
          icon={HelpCircle}
          className="bg-transparent"
        >
          <div className="max-w-4xl mx-auto space-y-16">
            <FactsList />
            <FAQAccordion />
          </div>
        </SectionLayout>
      </div>
    </div>
  );
}