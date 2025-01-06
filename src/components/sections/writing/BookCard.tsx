import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { WritingProject } from '../../../types/writing';

interface BookCardProps {
  project: WritingProject;
  index: number;
}

const accentColors = {
  blue: 'from-blue-500/20 to-blue-900/20 border-blue-500/30 hover:border-blue-500/50',
  purple: 'from-purple-500/20 to-purple-900/20 border-purple-500/30 hover:border-purple-500/50',
  emerald: 'from-emerald-500/20 to-emerald-900/20 border-emerald-500/30 hover:border-emerald-500/50'
};

export function BookCard({ project, index }: BookCardProps) {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`group relative bg-gradient-to-br ${accentColors[project.accent]} rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300`}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="flex-1 bg-cover bg-center transition-transform duration-700 scale-90 mx-2"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-900/90" />
      </div>

      <div className="relative p-8">
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
        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
      </div>

      <p className="text-gray-300 mb-6">{project.description}</p>
      {project.title === 'On Our Way Series' && (
        <div className="w-48 h-48 bg-cover bg-center" style={{ backgroundImage: "url('/public/On-Our_Way.jpg')" }} />
      )}
      
      <ul className="space-y-2 mb-8">
        {project.details?.map((detail, i) => (
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

        <div className="space-y-4">
          {project.books && (
            <>
              <h3 className="text-lg font-semibold text-white">Available on Amazon:</h3>
              {project.books.map((book, i) => (
                <motion.a
                  key={i}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-${project.accent}-400 hover:text-${project.accent}-300 transition-colors group`}
                  whileHover={{ x: 5 }}
                >
                  <span>{book.title}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </>
          )}
          
          {project.upcomingBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 pt-4 border-t border-gray-800"
            >
              <p className="text-blue-400 font-semibold">
                COMING SOON: The third and final book in the series "{project.upcomingBook}"
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
