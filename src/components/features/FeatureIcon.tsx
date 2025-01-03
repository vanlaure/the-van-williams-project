import { ReactNode } from 'react';

interface FeatureIconProps {
  icon: ReactNode;
}

export function FeatureIcon({ icon }: FeatureIconProps) {
  return (
    <div className="text-blue-400 mb-4">
      {icon}
    </div>
  );
}