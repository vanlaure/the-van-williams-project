import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Card } from '../../ui/Card';
import { codingTools } from '../../../data/codingTools';

interface DemoVideoProps {
  toolId: string | null;
  onClose: () => void;
}

export function DemoVideo({ toolId, onClose }: DemoVideoProps) {
  const tool = toolId ? codingTools.find(t => t.id === toolId) : null;

  return (
    <Card delay={0.2}>
      <div className="relative">
        <h3 className="text-xl font-semibold text-white mb-4">Interactive Demos</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
          {tool ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={tool.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <iframe
                  src={tool.videoUrl}
                  title={`${tool.name} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Click on a tool to see it in action
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}