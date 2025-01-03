import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NavLogo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Brain className="w-8 h-8 text-blue-400" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Van Williams
      </motion.span>
    </Link>
  );
}
