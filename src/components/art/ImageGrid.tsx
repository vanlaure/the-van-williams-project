import { motion } from 'framer-motion';
import type { ArtImage } from '../../types/art';
import { ImageModal } from './ImageModal';
import { useState } from 'react';

interface ImageGridProps {
  images: ArtImage[];
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<ArtImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[10000px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
