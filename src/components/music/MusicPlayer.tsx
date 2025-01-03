import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  coverArt: string;
}

const tracks: Track[] = [
  {
    id: '1',
    title: 'Neural Symphony No. 1',
    artist: 'AI Composer',
    duration: '3:45',
    coverArt: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Digital Dreams',
    artist: 'AI Orchestra',
    duration: '4:20',
    coverArt: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Quantum Harmony',
    artist: 'Deep Learning Ensemble',
    duration: '5:15',
    coverArt: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80'
  }
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Now Playing Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full md:w-1/3"
          >
            <img
              src={currentTrack.coverArt}
              alt={currentTrack.title}
              className="w-full aspect-square object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
          
          <div className="flex flex-col justify-end">
            <h1 className="text-4xl font-bold text-white mb-2">{currentTrack.title}</h1>
            <p className="text-xl text-gray-400 mb-8">{currentTrack.artist}</p>
            
            {/* Player Controls */}
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipBack className="w-8 h-8" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-blue-500 p-4 rounded-full hover:bg-blue-600 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipForward className="w-8 h-8" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Volume2 className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">AI Compositions</h2>
          <div className="space-y-4">
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer ${
                  currentTrack.id === track.id ? 'bg-gray-800/50' : ''
                }`}
                onClick={() => setCurrentTrack(track)}
              >
                <img
                  src={track.coverArt}
                  alt={track.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{track.title}</h3>
                  <p className="text-gray-400">{track.artist}</p>
                </div>
                <span className="text-gray-400">{track.duration}</span>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}