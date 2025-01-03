export function LoadingFallback() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse text-blue-400">Loading...</div>
    </div>
  );
}