import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x, y, brickWidth, brickHeight, color, status) {
    super(x, y);
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.color = color;
    this.status = status;
  }

  render(ctx, color) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.brickWidth, this.brickHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
