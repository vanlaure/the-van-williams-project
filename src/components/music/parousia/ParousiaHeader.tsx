import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

export function ParousiaHeader() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/50 backdrop-blur-lg py-16 border-b border-purple-500/20"
    >
      <div className="container mx-auto px-4 text-center">
        <Music className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
          Παρουσία
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 font-serif">
          Symphonia ton Eschaton Hemeron
        </p>
        <p className="text-gray-400 mt-4 italic">
          Symphony of the Last Days
        </p>
      </div>
    </motion.header>
  );
}