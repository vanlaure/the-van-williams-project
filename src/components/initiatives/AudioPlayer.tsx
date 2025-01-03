import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
}

export function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="mt-4 flex items-center gap-4 p-3 rounded-lg bg-white/5">
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white translate-x-0.5" />
        )}
      </button>
      
      <div className="flex-1">
        <div className="text-sm text-gray-300 font-medium">
          The Van Williams Project
        </div>
        <div className="text-xs text-gray-400">
          AI-Generated Podcast
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-gray-400" />
        ) : (
          <Volume2 className="w-4 h-4 text-gray-400" />
        )}
      </button>

      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
    </div>
  );
}
