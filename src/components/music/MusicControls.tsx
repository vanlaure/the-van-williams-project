import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import type { Track } from '../../types/music';

interface MusicControlsProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  error: string | null;
  onTogglePlay: () => void;
  onSeek: (percent: number) => void;
  onVolumeChange: (value: number) => void;
}

export function MusicControls({
  currentTrack,
  isPlaying,
  progress,
  volume,
  error,
  onTogglePlay,
  onSeek,
  onVolumeChange
}: MusicControlsProps) {
  if (!currentTrack) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 py-4"
      >
        {error && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-4 py-2 rounded-t-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <div className="container mx-auto flex items-center gap-8">
          {/* Track Info */}
          <div className="flex items-center gap-4">
            <img
              src={currentTrack.coverImage}
              alt={currentTrack.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="font-medium text-white">{currentTrack.title}</div>
              <div className="text-sm text-gray-400">{currentTrack.artist}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex-1">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={onTogglePlay}
                className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
                disabled={!!error}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-2">
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
                disabled={!!error}
              />
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onVolumeChange(volume === 0 ? 1 : 0)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {volume === 0 ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
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
    </AnimatePresence>
  );
}