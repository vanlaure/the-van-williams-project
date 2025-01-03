import { History as HistoryIcon } from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';
import { Timeline } from './history/Timeline';
import { historyData } from '../../data/history';
import { HistoryBackground } from './history/HistoryBackground';

export default function History() {
  return (
    <div className="relative min-h-screen">
      <HistoryBackground />
      
      <div className="relative z-10">
        <SectionLayout
          id="history"
          title="Our Journey"
          description="The evolution and milestones of the Van Williams Project"
          icon={HistoryIcon}
          className="bg-transparent"
        >
          <Timeline events={historyData} />
        </SectionLayout>
      </div>
    </div>
  );
}