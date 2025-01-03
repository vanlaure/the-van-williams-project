import { motion } from 'framer-motion';
import type { AIType } from '../../types/ai';

interface AITypeSlideProps {
  type: AIType;
  isActive: boolean;
}

export function AITypeSlide({ type, isActive }: AITypeSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 0.3 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${type.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
    </motion.div>
  );
}