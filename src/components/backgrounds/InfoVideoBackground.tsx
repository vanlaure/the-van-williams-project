import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const COLORS = [
  'rgba(59, 130, 246, opacity)', // Blue
  'rgba(139, 92, 246, opacity)', // Purple
  'rgba(236, 72, 153, opacity)', // Pink
];

export function InfoVideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Initialize bubbles
    const initBubbles = () => {
      bubblesRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 20,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      }));
    };
    initBubbles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubblesRef.current.forEach(bubble => {
        // Update position
        bubble.y -= bubble.speed;

        // Reset if off screen
        if (bubble.y < -10) {
          bubble.y = canvas.height + 10;
          bubble.x = Math.random() * canvas.width;
          bubble.opacity = Math.random() * 0.5 + 0.2;
        }

        // Draw bubble
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color.replace('opacity', bubble.opacity.toString());
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initBubbles();
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-full"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328038071/neural-14716.mp4?width=1280&hash=c4cd4c4fb6c3b0b93c3f8f95238c7f4e7f8e4a8f"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

        {/* Bubble Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
        />
      </motion.div>
    </div>
  );
}