import { ERROR_MESSAGES } from './constants';
import type { ImageGenerationError } from './types';

export function handleGenerationError(error: unknown): ImageGenerationError {
  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'GENERATION_ERROR'
    };
  }
  
  if (!navigator.onLine) {
    return {
      message: ERROR_MESSAGES.NETWORK,
      code: 'NETWORK_ERROR'
    };
  }
  
  return {
    message: ERROR_MESSAGES.GENERAL,
    code: 'UNKNOWN_ERROR'
  };
}