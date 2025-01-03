import { useEffect, useRef } from 'react';

interface MusicVisualizerProps {
  isPlaying: boolean;
}

export function MusicVisualizer({ isPlaying }: MusicVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationFrame: number;
    const bars = 60;
    const barWidth = canvas.width / bars;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bars; i++) {
        const height = isPlaying 
          ? Math.random() * canvas.height * 0.8
          : Math.sin(i * 0.1) * 20 + 30;

        const hue = (i * 2) % 360;
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.8)`;
        
        ctx.fillRect(
          i * barWidth,
          canvas.height - height,
          barWidth - 2,
          height
        );
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-64 rounded-xl bg-black/30 backdrop-blur-sm"
    />
  );
}