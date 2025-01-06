import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MetaTags } from '../components/seo/MetaTags';
import { RelatedPages } from '../components/seo/RelatedPages';

export function HomePage() {
  return (
    <>
      <MetaTags 
        title="Van Williams Project - AI, Music, Art & Technology Innovation"
        description="Explore the intersection of AI, music, art, and technology with Van Williams Project. Featuring innovative AI tools, original music compositions, digital art galleries, and cutting-edge tech initiatives."
        keywords={[
          'AI technology',
          'music production',
          'digital art',
          'creative technology',
          'innovation',
          'Van Williams Project',
          'artificial intelligence',
          'art generation',
          'tech innovation'
        ]}
      />
      <Hero />
      <About />
      <RelatedPages />
    </>
  );
}
