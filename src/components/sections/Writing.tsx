import { PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookCard } from './writing/BookCard';
import { ProjectShowcase } from './writing/ProjectShowcase';
import { writingProjects } from '../../data/writingProjects';

export default function Writing() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <PenTool className="w-16 h-16 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Assisted Writing Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the boundaries of creative writing through artificial intelligence,
            producing compelling narratives that blend human creativity with machine intelligence.
          </p>
        </motion.div>

        {/* Featured Books Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {writingProjects.slice(0, 2).map((project, index) => (
            <BookCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Additional Projects */}
        <div className="space-y-12">
          {writingProjects.slice(2).map((project, index) => (
            <ProjectShowcase key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
