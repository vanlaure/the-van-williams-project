import { motion } from 'framer-motion';
import { navigationItems } from '../../data/navigation';
import { useNavigation } from '../../hooks/useNavigation';

export function NavLinks() {
  const { handleNavigation } = useNavigation();

  return (
    <div className="hidden md:flex items-center space-x-1">
      {navigationItems.map((item, index) => (
        <motion.button
          key={item.href}
          onClick={() => handleNavigation(item.href)}
          className={`relative px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors ${
            item.href === location.pathname ? 'active' : ''
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover="hover"
        >
          {item.label}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ scaleX: 0 }}
            variants={{
              hover: { scaleX: 1 }
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      ))}
    </div>
  );
}
