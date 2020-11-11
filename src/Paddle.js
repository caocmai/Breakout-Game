// import Sprite from './Sprite.js';

class Paddle {
  constructor(width, height, canvasHeight, paddleX) {
    this.paddleWidth = width;
    this.paddleHeight = height;
    this.paddleX = paddleX;
    this.canvasHeight = canvasHeight;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(
      this.paddleX,
      this.canvasHeight - this.paddleHeight,
      this.paddleWidth,
      this.paddleHeight,
    );
    // ctx.rect(0,0, 50, 50)
    ctx.fillStyle = `#eb403${this.paddleX + 10}`;
    // ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
