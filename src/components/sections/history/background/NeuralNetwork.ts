interface Node {
  x: number;
  y: number;
  connections: Node[];
  velocity: { x: number; y: number };
}

export class NeuralNetwork {
  private nodes: Node[] = [];
  private readonly nodeCount = 30;
  private readonly connectionDistance = 150;
  private readonly nodeSize = 2;

  constructor(private ctx: CanvasRenderingContext2D) {
    this.initializeNodes();
  }

  private initializeNodes() {
    const { width, height } = this.ctx.canvas;
    
    this.nodes = Array.from({ length: this.nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      connections: [],
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5
      }
    }));

    // Create connections
    this.updateConnections();
  }

  private updateConnections() {
    this.nodes.forEach(node => {
      node.connections = this.nodes.filter(other => {
        if (node === other) return false;
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        return distance < this.connectionDistance;
      });
    });
  }

  update() {
    const { width, height } = this.ctx.canvas;

    this.nodes.forEach(node => {
      // Update position
      node.x += node.velocity.x;
      node.y += node.velocity.y;

      // Bounce off edges
      if (node.x < 0 || node.x > width) node.velocity.x *= -1;
      if (node.y < 0 || node.y > height) node.velocity.y *= -1;
    });

    // Update connections periodically
    if (Math.random() < 0.1) this.updateConnections();
  }

  draw() {
    // Draw connections
    this.nodes.forEach(node => {
      node.connections.forEach(other => {
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        const opacity = 1 - (distance / this.connectionDistance);

        this.ctx.beginPath();
        this.ctx.moveTo(node.x, node.y);
        this.ctx.lineTo(other.x, other.y);
        this.ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.3})`; // Purple
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      });
    });

    // Draw nodes
    this.nodes.forEach(node => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, this.nodeSize, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(147, 51, 234, 0.5)'; // Purple
      this.ctx.fill();
    });
  }

  resize(width: number, height: number) {
    this.initializeNodes();
  }
}