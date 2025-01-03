import { motion } from 'framer-motion';
import { ParousiaHeader } from './ParousiaHeader';
import { TrackList } from './TrackList';
import { MusicVisualizer } from './MusicVisualizer';
import { PlayerControls } from './PlayerControls';
import { useParousiaPlayer } from '../../../hooks/useParousiaPlayer';

export function ParousiaPage() {
  const { 
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    previousTrack
  } = useParousiaPlayer();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black">
      <ParousiaHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <MusicVisualizer isPlaying={isPlaying} />
            <PlayerControls
              isPlaying={isPlaying}
              onTogglePlay={togglePlay}
              onNext={nextTrack}
              onPrevious={previousTrack}
              currentTrack={currentTrack}
            />
          </div>
          <div className="lg:w-1/3">
            <TrackList currentTrack={currentTrack} />
          </div>
        </div>
      </main>
    </div>
  );
}