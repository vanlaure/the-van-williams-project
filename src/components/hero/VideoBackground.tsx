export function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80"
          alt="AI Circuit Background"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
    </div>
  );
}