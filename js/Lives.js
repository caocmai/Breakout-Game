import Sprite from './Sprite.js';

class Lives extends Sprite {
  constructor(x, y, lives) {
    super(x, y);
    this.lives = lives;
  }

  render(ctx) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }
}

export default Lives;