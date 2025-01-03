import { useState } from 'react';
import { Wand2 } from 'lucide-react';

interface TextToImageFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export function TextToImageForm({ onSubmit, isLoading }: TextToImageFormProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
          Enter your prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="A serene landscape with mountains at sunset..."
          className="w-full h-32 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        <Wand2 className="w-5 h-5" />
        {isLoading ? 'Generating...' : 'Generate Image'}
      </button>
    </form>
  );
}