import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import type { Track } from '../../../types/music';

interface PlayerControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentTrack: Track;
}

export function PlayerControls({
  isPlaying,
  onTogglePlay,
  onNext,
  onPrevious,
  currentTrack,
}: PlayerControlsProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mt-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2">{currentTrack.title}</h2>
        <p className="text-gray-400 mb-6">{currentTrack.description}</p>
        
        <div className="flex items-center gap-8">
          <button
            onClick={onPrevious}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SkipBack className="w-8 h-8" />
          </button>
          
          <button
            onClick={onTogglePlay}
            className="bg-purple-500 p-4 rounded-full hover:bg-purple-600 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </button>
          
          <button
            onClick={onNext}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SkipForward className="w-8 h-8" />
          </button>
          
          <button className="text-gray-400 hover:text-white transition-colors">
            <Volume2 className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}