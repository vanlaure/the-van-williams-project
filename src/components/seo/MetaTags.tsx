import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export function MetaTags({ 
  title: propTitle,
  description: propDescription,
  keywords: propKeywords,
  canonicalUrl: propCanonicalUrl 
}: MetaTagsProps) {
  const location = useLocation();
  const currentPage = navigationItems.find(item => item.href === location.pathname);
  
  // Use props if provided, otherwise fall back to navigation data
  const title = propTitle || currentPage?.fullLabel || 'Van Williams Project';
  const description = propDescription || currentPage?.description;
  const keywords = propKeywords || currentPage?.keywords;
  const canonicalUrl = propCanonicalUrl || currentPage?.canonicalUrl;

  useEffect(() => {
    // Update meta tags
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || '');

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords?.join(', ') || '');

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl || window.location.href);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description || '');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl || window.location.href);

    // Clean up function
    return () => {
      // Optional: Remove meta tags on component unmount if needed
    };
  }, [title, description, keywords, canonicalUrl]);

  return null; // This component doesn't render anything
}
