import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(radius, x, y, ctx) {
    super(x, y, ctx);
    this.radius = radius;
  }

  render(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#2ab855';
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Ball;
