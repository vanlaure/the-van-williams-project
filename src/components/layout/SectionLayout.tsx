import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionLayoutProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
  headerLevel?: 'h1' | 'h2';
}

export function SectionLayout({ 
  id, 
  title, 
  description, 
  icon: Icon, 
  children, 
  className = "",
  headerLevel = 'h1'
}: SectionLayoutProps) {
  return (
    <section 
      id={id} 
      className={`py-24 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Icon className="w-12 h-12 text-blue-400 mx-auto mb-6" aria-hidden="true" />
          {headerLevel === 'h1' ? (
            <h1 id={`${id}-title`} className="text-4xl font-bold text-white mb-8">
              {title}
            </h1>
          ) : (
            <h2 id={`${id}-title`} className="text-4xl font-bold text-white mb-8">
              {title}
            </h2>
          )}
          <p className="text-lg text-gray-400 max-w-6xl mx-auto px-16 leading-relaxed">
            {description}
          </p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
