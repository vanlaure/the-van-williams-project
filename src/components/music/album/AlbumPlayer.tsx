import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import type { Track } from '../../../types/music';

interface AlbumPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  onTogglePlay: () => void;
  onSeek: (value: number) => void;
  onVolumeChange: (value: number) => void;
}

export function AlbumPlayer({
  currentTrack,
  isPlaying,
  progress,
  volume,
  onTogglePlay,
  onSeek,
  onVolumeChange
}: AlbumPlayerProps) {
  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 p-6 rounded-t-xl"
    >
      <div className="flex items-center gap-8">
        <img
          src={currentTrack.coverImage}
          alt={currentTrack.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
        
        <div className="flex-1">
          <div className="font-medium text-white mb-1">{currentTrack.title}</div>
          <div className="text-sm text-gray-400">{currentTrack.artist}</div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => onSeek(Number(e.target.value))}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${progress}%, #374151 ${progress}%)`
              }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack className="w-6 h-6" />
          </button>
          
          <button
            onClick={onTogglePlay}
            className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward className="w-6 h-6" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 ${volume * 100}%, #374151 ${volume * 100}%)`
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}