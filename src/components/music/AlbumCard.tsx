import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Album } from '../../types/music';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link to={`/music/album/${album.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
      >
        <div className="relative aspect-square overflow-hidden max-w-[300px] mx-auto mt-4 mb-0">
          <img
            src={album.coverImage}
            alt={album.title}
            className="w-full max-h-[250px] object-contain transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">Click to play album</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className={`text-2xl font-bold text-white mb-1 text-center ${album.id === 'parousia' ? 'text-xl' : ''}`}>{album.title}</h3>
          <p className="text-sm text-gray-400">{album.description}</p>
          <div className="mt-4 text-sm text-gray-500">
            {album.tracks.length} {album.tracks.length === 1 ? 'track' : 'tracks'}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
