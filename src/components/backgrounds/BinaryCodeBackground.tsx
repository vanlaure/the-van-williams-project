import { useEffect, useRef } from 'react';

interface BinaryCharacter {
  x: number;
  y: number;
  value: string;
  changeTimer: number;
}

export function BinaryCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const charsRef = useRef<BinaryCharacter[]>([]);
  const frameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.font = '24px monospace';
    };
    resizeCanvas();

    const initChars = () => {
      charsRef.current = [];
      const columns = Math.floor(canvas.width / 20);
      const rows = Math.floor(canvas.height / 20);

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          charsRef.current.push({
            x: i * 20,
            y: j * 20,
            value: Math.random() > 0.5 ? '1' : '0',
            changeTimer: Math.random() * 100
          });
        }
      }
    };
    initChars();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      charsRef.current.forEach(char => {
        // Decrease timer and change value when it hits 0
        char.changeTimer--;
        if (char.changeTimer <= 0) {
          char.value = char.value === '1' ? '0' : '1';
          char.changeTimer = Math.random() * 100 + 50; // Reset timer
        }

        // Draw character with brighter green
        ctx.fillStyle = 'rgba(0, 255, 100, 0.5)'; // Increased green brightness and opacity
        ctx.fillText(char.value, char.x, char.y);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initChars();
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
      className="fixed inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
