import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href?: string;
  children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
  if (!href) {
    return <>{children}</>;
  }

  return (
    <RouterLink to={href} className="block">
      {children}
    </RouterLink>
  );
}