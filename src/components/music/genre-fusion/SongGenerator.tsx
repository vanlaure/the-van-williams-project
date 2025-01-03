import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';

interface SongGeneratorProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export function SongGenerator({
  prompt,
  onPromptChange,
  onGenerate,
  isGenerating
}: SongGeneratorProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
      <h3 className="text-xl font-semibold text-white mb-4">Describe Your Song</h3>
      <textarea
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Describe the song you want to create..."
        className="w-full h-32 bg-gray-900 text-white rounded-lg p-4 mb-4 focus:ring-2 focus:ring-indigo-500 border border-gray-700"
        disabled={isGenerating}
      />
      <motion.button
        onClick={onGenerate}
        disabled={isGenerating || !prompt.trim()}
        className="w-full bg-indigo-500 text-white py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Wand2 className="w-5 h-5" />
        {isGenerating ? 'Generating...' : 'Generate Song'}
      </motion.button>
    </div>
  );
}