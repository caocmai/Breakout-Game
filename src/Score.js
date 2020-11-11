import Sprite from './Sprite.js';

class Score extends Sprite {
  constructor(x, y, score) {
    super(x, y);
    this.score = score;
  }

  render(ctx) {
    ctx.font = '16px Arial';
    ctx.fillStyle = '#0095DD';
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }
}

export default Score;
