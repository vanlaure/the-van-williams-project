export function useAIConfig() {
  const apiKey = import.meta.env.VITE_AI_API_KEY;
  const model = import.meta.env.VITE_AI_MODEL;

  return {
    isConfigured: Boolean(apiKey && model),
    apiKey,
    model
  };
}