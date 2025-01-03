import { Palette } from 'lucide-react';
import { SectionLayout } from '../layout/SectionLayout';
import { GalleryGrid } from './art/GalleryGrid';
import { artGalleries } from '../../data/artGalleries';

export default function Art() {
  return (
    <SectionLayout
      id="art"
      title="AI Art Gallery"
      description="Pushing the boundaries of artistic expression through artificial intelligence. Our journey began with exploring cutting-edge AI image generation tools including Stable Diffusion, Leonardo AI, DALL-E, Midjourney, PlaygroundAI, and OpenArt. We've leveraged both open-source local solutions and proprietary cloud-based platforms, experimenting with text-to-image generation across various styles and techniques. Through these diverse tools, we've created everything from hyper-realistic landscapes to abstract compositions, pushing the boundaries of machine-created art while tackling challenges in prompt engineering and technical optimization."
      icon={Palette}
      className="bg-gray-900"
    >
      <GalleryGrid galleries={artGalleries} />
    </SectionLayout>
  );
}