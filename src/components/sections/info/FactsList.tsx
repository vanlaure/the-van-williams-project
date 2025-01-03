import { motion } from 'framer-motion';
import { facts } from '../../../data/facts';
import { Card } from '../../ui/Card';

export function FactsList() {
  return (
    <div className="space-y-8">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white text-center"
      >
        AI Facts
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-6">
        {facts.map((fact, index) => (
          <Card key={index} delay={index * 0.1}>
            <p className="text-lg text-gray-300">{fact}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}