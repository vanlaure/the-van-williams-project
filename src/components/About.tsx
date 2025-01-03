import { motion } from 'framer-motion';
import { AboutCard } from './about/AboutCard';
import { aboutCards } from '../data/aboutCards';

export function About() {
  return (
    <section id="about" className="relative min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About The Project</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Exploring the boundaries of artificial intelligence across multiple domains using a diverse range of AI platforms, tools, and frameworks. Through experimentation with both open-source and proprietary technologies, we push the boundaries of AI's creative potential, from artistic expression to innovative problem-solving. Join us in exploring these emerging technologies and their transformative possibilities.
          </p>
        </motion.div>

        <div className="space-y-8">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={card.id}
              card={card}
              index={index}
              totalCards={aboutCards.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}