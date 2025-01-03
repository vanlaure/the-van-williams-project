import { useState } from 'react';

export function useGenreFusion() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const generateSong = async () => {
    setIsGenerating(true);
    // Here you would integrate with SUNO AI
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    
    // Open SUNO AI in a new tab
    window.open('https://www.suno.ai', '_blank');
  };

  return {
    selectedGenres,
    toggleGenre,
    prompt,
    setPrompt,
    isGenerating,
    generateSong
  };
}