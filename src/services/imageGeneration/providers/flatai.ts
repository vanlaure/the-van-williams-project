import { FLATAI_URL } from '../constants';
import type { ImageGenerationResult } from '../types';

export async function generateWithFlatAI(prompt: string): Promise<ImageGenerationResult> {
  const url = `${FLATAI_URL}?prompt=${encodeURIComponent(prompt)}`;
  window.open(url, '_blank');
  
  return {
    success: true,
    url: url,
    provider: 'FlatAI'
  };
}