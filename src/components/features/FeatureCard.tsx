import { motion } from 'framer-motion';
import { FeatureIcon } from './FeatureIcon';
import type { Feature } from '../../types/feature';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-8 rounded-xl"
    >
      <FeatureIcon icon={feature.icon} />
      <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
}