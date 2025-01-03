import { PERCHANCE_URL } from '../constants';
import type { ImageGenerationResult } from '../types';

export async function generateWithPerchance(prompt: string): Promise<ImageGenerationResult> {
  const url = `${PERCHANCE_URL}?prompt=${encodeURIComponent(prompt)}`;
  window.open(url, '_blank');
  
  return {
    success: true,
    url: url,
    provider: 'Perchance'
  };
}