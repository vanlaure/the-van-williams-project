import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { NavLogo } from './NavLogo';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export function NavBar() {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar on scroll down, show on scroll up
      setIsVisible(scrollPosition < lastScrollY || scrollPosition < 100);
      setLastScrollY(scrollPosition);
    };

    handleScroll();
  }, [scrollPosition, lastScrollY]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          backgroundColor: scrollPosition > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent'
        }}
        transition={{ duration: 0.3 }}
        className="fixed w-full z-50 backdrop-blur-sm"
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 pl-4">
              <NavLogo />
            </div>
            <div className="flex-1 flex items-center justify-end pr-6">
              <NavLinks />
              <MobileMenu />
            </div>
          </div>
        </div>

        {/* Gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            background: scrollPosition > 50 
              ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' 
              : 'linear-gradient(to right, transparent, transparent)'
          }}
          className="h-[1px] origin-left"
        />
      </motion.nav>
    </AnimatePresence>
  );
}
