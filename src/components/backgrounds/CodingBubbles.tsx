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

export function CodingBubbles() {
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
      // Clear the entire canvas
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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}