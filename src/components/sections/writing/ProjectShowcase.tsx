import { motion } from 'framer-motion';
import type { WritingProject } from '../../../types/writing';

interface ProjectShowcaseProps {
  project: WritingProject;
  index: number;
}

const accentColors = {
  blue: 'from-blue-500/20 to-blue-900/20 border-blue-500/30 hover:border-blue-500/50',
  purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 hover:border-purple-500/50',
  emerald: 'from-emerald-500/20 to-emerald-900/20 border-emerald-500/30 hover:border-emerald-500/50'
};

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative bg-gradient-to-r ${accentColors[project.accent]} rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300`}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/90" />
      </div>

      <div className="relative p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className={`p-3 rounded-xl bg-${project.accent}-500/20 backdrop-blur-sm`}
              >
                <Icon className={`w-6 h-6 text-${project.accent}-400`} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
            <p className="text-gray-300 mb-6">{project.description}</p>
          </div>
          
          <div className="md:w-1/2">
            <ul className="space-y-2">
              {project.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="text-gray-400 flex items-start gap-2"
                >
                  <span className={`mt-2 w-1.5 h-1.5 bg-${project.accent}-400 rounded-full flex-shrink-0`} />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Animated Accent Elements */}
      <motion.div
        className={`absolute top-0 right-0 w-32 h-32 bg-${project.accent}-500/10 rounded-full blur-3xl`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}