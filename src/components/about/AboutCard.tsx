import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import type { AboutCard as AboutCardType } from '../../types/about';

interface AboutCardProps {
  card: AboutCardType;
  index: number;
  totalCards: number;
}

export function AboutCard({ card, index, totalCards }: AboutCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, index * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, index]);
  
  return (
    <motion.div
      ref={cardRef}
      className="relative h-[400px] overflow-hidden rounded-2xl"
      initial={{ opacity: 0, x: -100 }}
      animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
        style={{ backgroundImage: `url(${card.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full md:w-1/2 p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
            <p className="text-lg text-gray-300 mb-6">{card.description}</p>
            <ul className="space-y-2">
              {card.features.map((feature, i) => {
                const isSubItem = feature.startsWith('    ');
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                    className={`text-gray-300 flex items-start gap-2 ${isSubItem ? 'ml-6' : ''}`}
                  >
                    <span className={`mt-2 ${isSubItem ? 'w-1 h-1' : 'w-1.5 h-1.5'} bg-blue-400 rounded-full flex-shrink-0`} />
                    <span>{feature.replace(/^[•\s]+/, '')}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}