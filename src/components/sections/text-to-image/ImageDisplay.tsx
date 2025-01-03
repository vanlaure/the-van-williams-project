interface ImageDisplayProps {
  imageUrl: string | null;
  isLoading: boolean;
}

export function ImageDisplay({ imageUrl, isLoading }: ImageDisplayProps) {
  if (isLoading) {
    return (
      <div className="w-full aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Generating image...</div>
      </div>
    );
  }

  if (!imageUrl) {
    return (
      <div className="w-full aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Your generated image will appear here</p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt="Generated artwork"
        className="w-full h-full object-contain"
      />
    </div>
  );
}