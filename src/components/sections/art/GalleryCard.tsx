import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import type { ArtGallery } from '../../../types/art';

interface GalleryCardProps {
  gallery: ArtGallery;
  delay: number;
}

export function GalleryCard({ gallery, delay }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <Link to={`/art/${gallery.id}`} className="block">
        <div className="relative group overflow-hidden rounded-xl aspect-square">
          <img
            src={gallery.coverImage}
            alt={gallery.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center gap-2 text-blue-400 mb-3">
                <Eye className="w-5 h-5" />
                <span className="font-medium">View Gallery</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{gallery.title}</h3>
              <p className="text-gray-300 mb-4">{gallery.description}</p>
              <div className="flex items-center gap-2 text-blue-400 font-medium group/link">
                <span>See {gallery.images.length} {gallery.images.length === 1 ? 'artwork' : 'artworks'}</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
