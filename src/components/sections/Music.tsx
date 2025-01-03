import { Music2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AlbumCard } from '../music/AlbumCard';
import { albums } from '../../data/musicData';

export default function Music() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 mt-16"
        >
          <div className="flex justify-center mb-6">
            <Music2 className="w-16 h-16 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Music Innovation
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto text-justify">
            Exploring the boundaries of musical creativity through artificial intelligence,
            creating unique compositions that blend human emotion with machine precision.
            From contemporary Christian songs to symphonic masterpieces, we embrace diverse
            genres including country, rock, pop, gospel, and classical - all generated
            through AI. Under the name Van Williams, our music is available on all major
            streaming platforms including Amazon Music, Spotify, YouTube, Apple Music,
            SoundCloud, Pandora, iHeartRadio, Bandlab, and more.
          </p>
        </motion.div>

        {/* Album Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
