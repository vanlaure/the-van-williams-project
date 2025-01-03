import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Initiative {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
}

interface FutureCardProps {
  initiative: Initiative;
  delay: number;
}

export function FutureCard({ initiative, delay }: FutureCardProps) {
  const Icon = initiative.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-xl bg-gradient-to-br ${initiative.gradient} backdrop-blur-sm border border-white/10`}
    >
      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-50 blur-xl"
        animate={{
          background: [
            `linear-gradient(0deg, ${initiative.gradient})`,
            `linear-gradient(180deg, ${initiative.gradient})`,
            `linear-gradient(360deg, ${initiative.gradient})`,
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: delay + 0.2 }}
          className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4"
        >
          <Icon className="w-6 h-6 text-blue-400" />
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-3">{initiative.title}</h3>
        <p className="text-gray-300 mb-6">{initiative.description}</p>

        <ul className="space-y-2">
          {initiative.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.4 + (index * 0.1) }}
              className="flex items-center gap-2 text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}