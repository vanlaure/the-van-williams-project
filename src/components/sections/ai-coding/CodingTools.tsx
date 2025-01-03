import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';
import { codingTools } from '../../../data/codingTools';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CodingToolsProps {
  onSelectTool: (toolId: string) => void;
  selectedTool: string | null;
}

export function CodingTools({ onSelectTool, selectedTool }: CodingToolsProps) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-blue-400" />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-white">AI Coding Tools</h3>
          <p className="text-sm text-gray-400">
            Supercharge your development with AI assistance
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {codingTools.map((tool, index) => {
          const Icon = tool.icon;
          const isSelected = selectedTool === tool.id;
          
          return (
            <motion.button
              key={tool.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectTool(tool.id)}
              className={`group w-full text-left p-4 rounded-lg transition-all duration-300 relative ${
                isSelected
                  ? 'bg-blue-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                  : 'hover:bg-gray-800 border border-transparent'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={isSelected ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-blue-400' : 'text-gray-400'}`} />
                </motion.div>
                <div className="flex-1">
                  <h4 className={`font-medium ${isSelected ? 'text-blue-400' : 'text-white'}`}>
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                
                {/* Click for more indicator */}
                <div className={`flex items-center gap-1 text-sm ${
                  isSelected ? 'text-blue-400' : 'text-gray-400'
                } opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span>Click for more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-blue-400/5 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </Card>
  );
}