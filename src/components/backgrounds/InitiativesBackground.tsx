import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CodingBubbles } from './CodingBubbles';

export function InitiativesBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black" />
        <CodingBubbles />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none" />
      </motion.div>
    </div>
  );
}