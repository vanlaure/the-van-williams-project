import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const initBubbles = () => {
      bubblesRef.current = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 20,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      }));
    };
    initBubbles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubblesRef.current.forEach(bubble => {
        bubble.y -= bubble.speed;

        if (bubble.y < -10) {
          bubble.y = canvas.height + 10;
          bubble.x = Math.random() * canvas.width;
          bubble.opacity = Math.random() * 0.4 + 0.2;
        }

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
    <div className="absolute inset-0">
      {/* Earth at night background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <video
          src="/earthbackground.mp4"
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        />
      </motion.div>

      {/* Bubbles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
