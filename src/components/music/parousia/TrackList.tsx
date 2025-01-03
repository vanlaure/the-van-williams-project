import { motion } from 'framer-motion';
import { parousiaData } from '../../../data/parousiaData';
import type { Track } from '../../../types/music';

interface TrackListProps {
  currentTrack: Track;
}

export function TrackList({ currentTrack }: TrackListProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Movements</h2>
      <div className="space-y-4">
        {parousiaData.tracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg transition-colors ${
              currentTrack.id === track.id
                ? 'bg-purple-900/50 border border-purple-500/50'
                : 'hover:bg-purple-900/30'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-purple-400 font-mono">{index + 1}</span>
              <div>
                <h3 className="text-white font-medium">{track.title}</h3>
                <p className="text-gray-400 text-sm">{track.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}