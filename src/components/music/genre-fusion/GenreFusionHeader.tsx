import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';

export function GenreFusionHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/50 backdrop-blur-lg py-16 border-b border-indigo-500/20"
    >
      <div className="container mx-auto px-4 text-center">
        <Music2 className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Create Your Own Songs
        </h1>
        <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
          Blend genres and create unique music with AI assistance
        </p>
      </div>
    </motion.header>
  );
}