import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { useNavigation } from '../../hooks/useNavigation';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleNavigation } = useNavigation();

  const handleClick = (href: string) => {
    handleNavigation(href);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}