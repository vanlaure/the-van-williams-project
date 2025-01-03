interface Point {
  x: number;
  y: number;
  baseY: number;
  speed: number;
  amplitude: number;
}

export class TimeWave {
  private points: Point[] = [];
  private readonly spacing = 50;
  private time = 0;

  constructor(private ctx: CanvasRenderingContext2D) {
    this.initializePoints();
  }

  private initializePoints() {
    const { width, height } = this.ctx.canvas;
    const count = Math.ceil(width / this.spacing) + 1;

    this.points = Array.from({ length: count }, (_, i) => ({
      x: i * this.spacing,
      y: height / 2,
      baseY: height / 2,
      speed: 0.002 + Math.random() * 0.002,
      amplitude: 30 + Math.random() * 20
    }));
  }

  update() {
    this.time += 0.016;
    this.points.forEach(point => {
      point.y = point.baseY + Math.sin(this.time * point.speed * 1000) * point.amplitude;
    });
  }

  draw() {
    const { width, height } = this.ctx.canvas;
    
    this.ctx.beginPath();
    this.ctx.moveTo(0, height / 2);

    // Create smooth curve through points
    for (let i = 0; i < this.points.length - 1; i++) {
      const current = this.points[i];
      const next = this.points[i + 1];
      const xc = (current.x + next.x) / 2;
      const yc = (current.y + next.y) / 2;
      this.ctx.quadraticCurveTo(current.x, current.y, xc, yc);
    }

    // Styling
    this.ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)'; // Blue
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Add glow effect
    this.ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
    this.ctx.shadowBlur = 10;
  }

  resize(width: number, height: number) {
    this.initializePoints();
  }
}