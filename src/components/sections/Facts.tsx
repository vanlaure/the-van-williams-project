import { Info } from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';
import { Card } from '../ui/Card';

const facts = [
  "AI can process and analyze data at speeds far beyond human capability",
  "Machine learning models can recognize patterns humans might miss",
  "Neural networks are inspired by the human brain's structure",
  "AI systems can learn and improve from experience"
];

export default function Facts() {
  return (
    <SectionLayout
      id="facts"
      title="AI Facts"
      description="Interesting facts about artificial intelligence and its capabilities"
      icon={Info}
      className="bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {facts.map((fact, index) => (
          <Card key={index} delay={index * 0.2}>
            <p className="text-lg text-gray-300">{fact}</p>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}