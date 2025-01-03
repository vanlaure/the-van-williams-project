import { motion } from 'framer-motion';
import { GenreFusionHeader } from './GenreFusionHeader';
import { SongGenerator } from './SongGenerator';
import { GenreSelector } from './GenreSelector';
import { useGenreFusion } from '../../../hooks/useGenreFusion';

export function GenreFusionPage() {
  const {
    selectedGenres,
    toggleGenre,
    prompt,
    setPrompt,
    isGenerating,
    generateSong
  } = useGenreFusion();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-gray-900 to-black">
      <GenreFusionHeader />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <GenreSelector 
            selectedGenres={selectedGenres}
            onToggleGenre={toggleGenre}
          />
          
          <SongGenerator
            prompt={prompt}
            onPromptChange={setPrompt}
            onGenerate={generateSong}
            isGenerating={isGenerating}
          />
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Powered by</p>
            <a 
              href="https://www.suno.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              SUNO AI
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}