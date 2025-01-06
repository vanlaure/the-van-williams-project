import { GalleryCard } from './GalleryCard';
import type { ArtGallery } from '../../../types/art';

interface GalleryGridProps {
  galleries: ArtGallery[];
}

export function GalleryGrid({ galleries }: GalleryGridProps) {
  return (
    <div className="w-full grid md:grid-cols-3 gap-20 justify-items-center mx-2">
      {galleries.map((gallery, index) => (
        <GalleryCard
          key={gallery.id}
          gallery={gallery}
          delay={index * 0.2}
        />
      ))}
    </div>
  );
}
