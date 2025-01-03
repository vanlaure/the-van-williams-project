import { useState, useRef, useEffect } from 'react';
import type { Track } from '../types/music';

export function useMusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const handleError = (e: ErrorEvent) => {
      console.error('Audio error:', e);
      setError('Unable to play audio. Please ensure the audio file exists.');
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError as EventListener);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError as EventListener);
    };
  }, []);

  const playTrack = async (track: Track) => {
    if (!audioRef.current) return;

    try {
      setError(null);

      if (currentTrack?.id === track.id) {
        togglePlay();
        return;
      }

      // Stop current track if playing
      if (isPlaying) {
        audioRef.current.pause();
      }

      // Load and play new track
      audioRef.current.src = track.audioUrl;
      audioRef.current.volume = volume;
      
      // Use play() promise to handle autoplay restrictions
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setCurrentTrack(track);
            setIsPlaying(true);
          })
          .catch(err => {
            console.error('Playback failed:', err);
            setError('Unable to play audio. Please ensure the audio file exists.');
            setIsPlaying(false);
          });
      }
    } catch (err) {
      console.error('Error playing track:', err);
      setError('Unable to play audio. Please ensure the audio file exists.');
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(err => {
              console.error('Playback failed:', err);
              setError('Unable to play audio. Please ensure the audio file exists.');
              setIsPlaying(false);
            });
        }
      }
    } catch (err) {
      console.error('Error toggling play:', err);
      setError('Unable to play audio. Please ensure the audio file exists.');
      setIsPlaying(false);
    }
  };

  const seekTo = (percent: number) => {
    if (!audioRef.current) return;
    const time = (percent / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(percent);
  };

  const adjustVolume = (value: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = value;
    setVolume(value);
  };

  return {
    currentTrack,
    isPlaying,
    progress,
    volume,
    error,
    playTrack,
    togglePlay,
    seekTo,
    adjustVolume
  };
}