import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ArtImage } from '../../types/art';

interface ImageModalProps {
  image: ArtImage | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-4xl w-full"
          onClick={e => e.stopPropagation()}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full rounded-lg shadow-2xl"
          />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{image.title}</h2>
            <p className="text-gray-300">{image.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}