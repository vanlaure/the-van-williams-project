export const FLATAI_URL = 'https://flatai.org/ai-image-generator-free-no-signup';
export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e?auto=format&fit=crop&q=80';

export const ERROR_MESSAGES = {
  NETWORK: 'Network error occurred. Please check your connection.',
  GENERAL: 'An error occurred while generating the image.',
} as const;

export const ATTRIBUTION = {
  name: 'FlatAI',
  url: 'https://flatai.org',
  description: 'Free AI Image Generator - No Signup Required'
} as const;