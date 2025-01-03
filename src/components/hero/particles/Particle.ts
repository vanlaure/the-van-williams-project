export interface ParticleColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export class Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  color: ParticleColor;
  opacity: number;
  
  constructor(canvasWidth: number, canvasHeight: number, color: ParticleColor) {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + Math.random() * 20;
    this.size = Math.random() * 4 + 2; // Slightly larger bubbles
    this.speedY = -Math.random() * 0.5 - 0.2; // Slower upward movement
    this.color = color;
    this.opacity = Math.random() * 0.3 + 0.1; // More subtle opacity
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.y += this.speedY;

    // Reset when particle moves off top
    if (this.y < -10) {
      this.reset(canvasWidth, canvasHeight);
    }
  }

  reset(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = canvasHeight + 10;
    this.size = Math.random() * 4 + 2;
    this.speedY = -Math.random() * 0.5 - 0.2;
    this.opacity = Math.random() * 0.3 + 0.1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    const { r, g, b } = this.color;
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
    ctx.fill();
  }
}