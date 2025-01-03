import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomeButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-20 left-4 z-50 bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      aria-label="Go to home"
    >
      <Home className="w-5 h-5 text-white" />
    </motion.button>
  );
}