import { useEffect, useRef } from 'react';
import { TimeWave } from './background/TimeWave';
import { NeuralNetwork } from './background/NeuralNetwork';

export function HistoryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const timeWave = new TimeWave(ctx);
    const neuralNetwork = new NeuralNetwork(ctx);

    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      timeWave.update();
      timeWave.draw();
      
      neuralNetwork.update();
      neuralNetwork.draw();
      
      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      timeWave.resize(canvas.width, canvas.height);
      neuralNetwork.resize(canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/20 to-black"
      style={{ opacity: 0.4 }}
    />
  );
}