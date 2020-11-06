import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(radius, x, y, dx, dy) {
    super(x, y);
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#2ab855';
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
