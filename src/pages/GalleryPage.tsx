import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { artGalleries } from '../data/artGalleries';
import { NotFound } from '../components/NotFound';

export function GalleryPage() {
  const { galleryId } = useParams();
  const gallery = artGalleries.find(g => g.id === galleryId);

  if (!gallery) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">{gallery.title}</h1>
          <p className="text-xl text-gray-300">{gallery.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gallery.images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-gray-300">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pb-12">
          <Link
            to="/art"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Galleries</span>
          </Link>
        </div>
      </div>
    </div>
  );
}