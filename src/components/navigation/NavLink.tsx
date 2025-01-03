import { ReactNode, useRef, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const { handleNavigation } = useNavigation();
  const location = useLocation();
  const isActive = location.pathname === href;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef.current || !isActive) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    buttonRef.current.style.setProperty('--mouse-x', `${x}%`);
    buttonRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <button
      ref={buttonRef}
      onClick={() => handleNavigation(href)}
      onMouseMove={handleMouseMove}
      className={`
        group relative px-3 py-2 text-sm font-medium
        transition-all duration-300
        ${isActive ? 'nav-active' : 'text-gray-300 hover:text-white'}
      `}
    >
      <span>{children}</span>
    </button>
  );
}
