import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AudioPlayer } from './AudioPlayer';

interface Initiative {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  link?: string;
  gradient: string;
  audio?: string;
}

interface InitiativeCardProps {
  initiative: Initiative;
  delay: number;
}

export function InitiativeCard({ initiative, delay }: InitiativeCardProps) {
  const Icon = initiative.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-xl bg-gradient-to-br ${initiative.gradient} backdrop-blur-sm border border-white/10`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: delay + 0.2 }}
            className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center"
          >
            <Icon className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-white">{initiative.title}</h3>
          </div>
        </div>
        {initiative.link && (
          <motion.a
            href={initiative.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6">{initiative.description}</p>

      {/* Details */}
      <ul className="space-y-2">
        {initiative.details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.4 + (index * 0.1) }}
            className="flex items-start gap-2 text-gray-300"
          >
            <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
            <span>{detail.replace(/^[•\s]+/, '')}</span>
          </motion.li>
        ))}
      </ul>

      {/* Audio Player */}
      {initiative.audio && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.6 }}
        >
          <AudioPlayer audioUrl={initiative.audio} />
        </motion.div>
      )}
    </motion.div>
  );
}
