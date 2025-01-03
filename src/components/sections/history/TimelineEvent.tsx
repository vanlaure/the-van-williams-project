import { motion } from 'framer-motion';
import type { HistoryEvent } from '../../../types/history';

interface TimelineEventProps {
  event: HistoryEvent;
  index: number;
}

export function TimelineEvent({ event, index }: TimelineEventProps) {
  const isEven = index % 2 === 0;
  const isVanWilliamsEvent = event.date.includes('2023') || event.date.includes('2024');

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}
    >
      <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8'}`}>
        <motion.div
          className={`relative p-6 rounded-xl transition-all duration-300 backdrop-blur-sm ${
            isVanWilliamsEvent
              ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 hover:from-blue-500/40 hover:to-purple-500/40 border border-blue-400/30 shadow-lg shadow-blue-500/20'
              : 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 border border-emerald-400/20'
          } hover:scale-105`}
          whileHover={{ y: -5 }}
        >
          {/* Highlight indicator for Van Williams events */}
          {isVanWilliamsEvent && (
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-purple-300"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}

          {/* Date with enhanced styling */}
          <motion.span
            className={`inline-block mb-2 px-3 py-1 rounded-full text-sm font-semibold ${
              isVanWilliamsEvent
                ? 'bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-blue-100'
                : 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-100'
            }`}
          >
            {event.date}
          </motion.span>

          {/* Title with gradient text for Van Williams events */}
          <h3 className={`text-xl font-bold mb-3 ${
            isVanWilliamsEvent
              ? 'bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent'
          }`}>
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-gray-100 mb-4">{event.description}</p>

          {/* Details with enhanced styling */}
          {event.details && (
            <ul className={`space-y-2 text-sm ${isEven ? 'text-right' : 'text-left'}`}>
              {event.details.map((detail, i) => {
                const isSubItem = detail.startsWith('    ');
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className={`${isSubItem ? 'ml-4' : ''} ${
                      isVanWilliamsEvent ? 'text-blue-100' : 'text-emerald-100'
                    }`}
                  >
                    {detail.replace(/^[•\s]+/, '')}
                  </motion.li>
                );
              })}
            </ul>
          )}
        </motion.div>
      </div>
      
      {/* Timeline node */}
      <div className="relative flex items-center justify-center w-8">
        <motion.div
          className={`h-4 w-4 rounded-full ${
            isVanWilliamsEvent
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 ring-4 ring-blue-500/30'
              : 'bg-gradient-to-r from-emerald-400 to-teal-400 ring-4 ring-emerald-500/30'
          }`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        />
      </div>
      
      <div className="w-1/2" />
    </motion.div>
  );
}