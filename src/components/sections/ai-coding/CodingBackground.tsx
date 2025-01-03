import { motion } from 'framer-motion';
import { BinaryCodeBackground } from '../../backgrounds/BinaryCodeBackground';

export function CodingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-full"
      >
        <BinaryCodeBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black pointer-events-none" />
      </motion.div>
    </div>
  );
}