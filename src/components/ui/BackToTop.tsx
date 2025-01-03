import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export function BackToTop() {
  const scrollPosition = useScrollPosition();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {scrollPosition > 500 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-24 p-3 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-colors z-50 group"
          aria-label="Back to top"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
          <motion.span 
            className="absolute -top-8 right-0 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            Back to top
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}