import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Card } from '../../ui/Card';
import { codingTools } from '../../../data/codingTools';
import { MarkdownContent } from './MarkdownContent';

interface ToolDetailsProps {
  toolId: string | null;
}

export function ToolDetails({ toolId }: ToolDetailsProps) {
  const tool = toolId ? codingTools.find(t => t.id === toolId) : null;

  return (
    <div className="relative">
      <Card className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800">
        <AnimatePresence mode="wait">
          {tool ? (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <motion.div 
                className="flex items-start justify-between"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="p-2 rounded-lg bg-blue-500/10 backdrop-blur-sm"
                  >
                    <tool.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                </div>
                {tool.url && (
                  <motion.a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-400 hover:bg-blue-500/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Now
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>

              <motion.div 
                className="prose prose-invert prose-sm max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <MarkdownContent content={tool.details} />
              </motion.div>

              {/* Video Section */}
              <motion.div 
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <iframe
                  src={`${tool.videoUrl}?autoplay=1`}
                  title={`${tool.name} Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-[400px] flex flex-col items-center justify-center text-center p-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="p-4 rounded-full bg-blue-500/10 backdrop-blur-sm mb-6"
              >
                <Code2 className="w-12 h-12 text-blue-400" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Explore AI Coding Tools
              </h3>
              <p className="text-sm text-gray-400">
                Select a tool from the left to see its features, watch demos, and get started with AI-powered development
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}
