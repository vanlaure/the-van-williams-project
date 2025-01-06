import Writing from '../components/sections/Writing';
import { MetaTags } from '../components/seo/MetaTags';
import { RelatedPages } from '../components/seo/RelatedPages';

export function WritingPage() {
  return (
    <>
      <MetaTags />
      <Writing />
      <RelatedPages />
    </>
  );
}
