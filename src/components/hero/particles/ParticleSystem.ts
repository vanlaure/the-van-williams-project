import { Particle, ParticleColor } from './Particle';

export class ParticleSystem {
  private particles: Particle[] = [];
  private readonly colors: ParticleColor[] = [
    { r: 59, g: 130, b: 246, a: 1 }, // Blue
    { r: 99, g: 102, b: 241, a: 1 }, // Indigo
    { r: 139, g: 92, b: 246, a: 1 }, // Purple
  ];

  constructor(private ctx: CanvasRenderingContext2D, particleCount: number = 30) {
    this.initializeParticles(particleCount);
  }

  private initializeParticles(count: number) {
    const { width, height } = this.ctx.canvas;
    for (let i = 0; i < count; i++) {
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.particles.push(new Particle(width, height, color));
    }
  }

  update() {
    const { width, height } = this.ctx.canvas;
    this.particles.forEach(particle => {
      particle.update(width, height);
    });
  }

  draw() {
    this.particles.forEach(particle => {
      particle.draw(this.ctx);
    });
  }

  resize(width: number, height: number) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
  }
}