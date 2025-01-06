import Art from '../components/sections/Art';
import { MetaTags } from '../components/seo/MetaTags';
import { RelatedPages } from '../components/seo/RelatedPages';

export function ArtPage() {
  return (
    <>
      <MetaTags />
      <Art />
      <RelatedPages />
    </>
  );
}
