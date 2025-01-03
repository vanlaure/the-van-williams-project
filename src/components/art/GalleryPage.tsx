import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { artGalleries } from '../../data/artGalleries';
import { NotFound } from '../NotFound';

export function GalleryPage() {
  const { galleryId } = useParams();
  const gallery = artGalleries.find(g => g.id === galleryId);

  if (!gallery) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-900 min-h-screen pt-16">
      <div className="container mx-auto px-1">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-0.5 px-2"
        >
          <Link
            to="/art"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Galleries</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-0.5"
        >
          <h1 className="text-lg font-bold text-white mb-1">{gallery.title}</h1>
          <p className="text-xs text-gray-300">{gallery.description}</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-2">
          {gallery.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden"
            >
              <img
                src={image.url}
                alt={image.title}
                className={`w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110 ${
                  image.url.includes('beauty_queen_photo') ? 'object-[center_25%]' : ''
                }`}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-300">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
