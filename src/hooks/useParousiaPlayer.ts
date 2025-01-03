import { useState } from 'react';
import { parousiaData } from '../data/parousiaData';
import type { Track } from '../types/music';

export function useParousiaPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = parousiaData.tracks[currentTrackIndex];

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => 
      prev === parousiaData.tracks.length - 1 ? 0 : prev + 1
    );
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prev) => 
      prev === 0 ? parousiaData.tracks.length - 1 : prev - 1
    );
  };

  return {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    previousTrack,
  };
}