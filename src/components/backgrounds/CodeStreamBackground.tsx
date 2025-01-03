import { useEffect, useRef } from 'react';

interface CodeCharacter {
  char: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
  color: string;
}

const CODE_SNIPPETS = [
  'async function generateAI() {',
  '  const model = await loadModel();',
  '  return model.predict(data);',
  '}',
  'class NeuralNetwork {',
  '  train(data: Array<number>) {',
  '    this.backpropagate(data);',
  '  }',
  '}',
  'const transformer = new Transformer({',
  '  layers: 12,',
  '  heads: 8,',
  '  dim: 512',
  '});',
  'function* generateTokens() {',
  '  yield* encode(prompt);',
  '}',
];

const COLORS = [
  'rgba(59, 130, 246, opacity)', // Blue
  'rgba(139, 92, 246, opacity)', // Purple
  'rgba(236, 72, 153, opacity)', // Pink
];

export function CodeStreamBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const charsRef = useRef<CodeCharacter[]>([]);
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
      ctx.font = '14px "Fira Code", monospace';
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize characters
    const initChars = () => {
      charsRef.current = [];
      const numStreams = Math.floor(canvas.width / 25); // One stream every 25px

      for (let i = 0; i < numStreams; i++) {
        const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
        const chars = snippet.split('');
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        
        chars.forEach((char, index) => {
          charsRef.current.push({
            char,
            x: (i * 25) + Math.random() * 10,
            y: -index * 20 - Math.random() * canvas.height,
            speed: 1 + Math.random() * 2,
            opacity: 0.1 + Math.random() * 0.5,
            color,
          });
        });
      }
    };
    initChars();

    // Animation loop
    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      charsRef.current.forEach(char => {
        // Update position
        char.y += char.speed;

        // Reset if off screen
        if (char.y > canvas.height) {
          char.y = -20 - Math.random() * 100;
          char.opacity = 0.1 + Math.random() * 0.5;
          char.speed = 1 + Math.random() * 2;
        }

        // Draw character with glow effect
        ctx.shadowColor = char.color.replace('opacity', '1');
        ctx.shadowBlur = 5;
        ctx.fillStyle = char.color.replace('opacity', char.opacity.toString());
        ctx.fillText(char.char, char.x, char.y);
        ctx.shadowBlur = 0;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
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