import { motion } from 'framer-motion';
import { TimelineEvent } from './TimelineEvent';
import type { HistoryEvent } from '../../../types/history';

interface TimelineProps {
  events: HistoryEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30" />
      
      <div className="space-y-16">
        {events.map((event, index) => (
          <TimelineEvent 
            key={index}
            event={event}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}