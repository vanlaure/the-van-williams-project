import { motion } from 'framer-motion';
import type { AIType } from '../../types/ai';

interface AITypeContentProps {
  type: AIType;
  isActive: boolean;
}

export function AITypeContent({ type, isActive }: AITypeContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="text-center max-w-4xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {type.title}
        </h3>
        <p className="text-xl text-gray-300">
          {type.description}
        </p>
      </div>
    </motion.div>
  );
}