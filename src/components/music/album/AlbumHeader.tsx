import { motion } from 'framer-motion';
import type { Album } from '../../../types/music';

interface AlbumHeaderProps {
  album: Album;
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full md:w-64 flex-shrink-0"
      >
        <img
          src={album.coverImage}
          alt={album.title}
          className="w-full aspect-square object-cover rounded-lg shadow-2xl"
        />
      </motion.div>
      
      <div className="flex flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">{album.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{album.description}</p>
        </motion.div>
      </div>
    </div>
  );
}