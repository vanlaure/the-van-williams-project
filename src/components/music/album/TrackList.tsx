import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import type { Track } from '../../../types/music';

interface TrackListProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  onTrackSelect: (track: Track) => void;
  onTogglePlay: () => void;
}

export function TrackList({ 
  tracks, 
  currentTrack, 
  isPlaying, 
  onTrackSelect,
  onTogglePlay 
}: TrackListProps) {
  const handleTrackClick = (track: Track) => {
    if (currentTrack?.id === track.id) {
      onTogglePlay();
    } else {
      onTrackSelect(track);
    }
  };

  return (
    <div className="space-y-2">
      {tracks.map((track, index) => {
        const isCurrentTrack = currentTrack?.id === track.id;
        const Icon = track.icon;
        
        return (
          <motion.button
            key={track.id}
            onClick={() => handleTrackClick(track)}
            className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors ${
              isCurrentTrack
                ? 'bg-blue-500/20 border border-blue-500/30'
                : 'hover:bg-gray-800'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-8 flex-shrink-0">
              {isCurrentTrack ? (
                isPlaying ? (
                  <Pause className="w-6 h-6 text-blue-400" />
                ) : (
                  <Play className="w-6 h-6 text-blue-400" />
                )
              ) : (
                <span className="text-gray-400">{index + 1}</span>
              )}
            </div>
            
            {Icon && <Icon className="w-5 h-5 text-blue-400" />}
            
            <div className="flex-1 text-left">
              <div className={`font-medium ${isCurrentTrack ? 'text-blue-400' : 'text-white'}`}>
                {track.title}
              </div>
              <div className="text-sm text-gray-400">{track.genre}</div>
            </div>
            
            <div className="text-sm text-gray-400">{track.duration}</div>
          </motion.button>
        );
      })}
    </div>
  );
}