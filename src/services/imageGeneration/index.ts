import { FLATAI_URL, FALLBACK_IMAGE } from './constants';
import { handleGenerationError } from './utils';
import type { ImageGenerationResult } from './types';

export async function generateImage(prompt: string): Promise<ImageGenerationResult> {
  try {
    // Open FlatAI in a new tab with the prompt
    window.open(`${FLATAI_URL}?prompt=${encodeURIComponent(prompt)}`, '_blank');
    
    // Return success with both the fallback image and external URL
    return {
      url: FALLBACK_IMAGE,
      success: true,
      externalUrl: FLATAI_URL
    };
  } catch (error) {
    const handledError = handleGenerationError(error);
    throw handledError;
  }
}

export * from './types';