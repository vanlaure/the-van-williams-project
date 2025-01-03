export interface ImageGenerationResult {
  url: string;
  success: boolean;
  externalUrl?: string;
}

export interface ImageGenerationError {
  message: string;
  code: string;
}