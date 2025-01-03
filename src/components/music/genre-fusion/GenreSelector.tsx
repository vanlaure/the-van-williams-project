import { motion } from 'framer-motion';

interface GenreSelectorProps {
  selectedGenres: string[];
  onToggleGenre: (genre: string) => void;
}

const genres = [
  'Pop', 'Rock', 'Hip Hop', 'Jazz', 'Classical', 'Electronic',
  'Folk', 'R&B', 'Latin', 'Metal', 'Indie', 'Blues'
];

export function GenreSelector({ selectedGenres, onToggleGenre }: GenreSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Select Genres to Blend</h2>
      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <motion.button
            key={genre}
            onClick={() => onToggleGenre(genre)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedGenres.includes(genre)
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {genre}
          </motion.button>
        ))}
      </div>
    </div>
  );
}