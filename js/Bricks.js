class Bricks {
  constructor(brickWidth, brickHeight, status, brickColumnCount,
    brickRowCount, brickPadding, brickOffsetLeft, brickOffsetTop) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;

    this.bricks = [];
    this.brickColumnCount = brickColumnCount;
    this.brickRowCount = brickRowCount;
    // this.brickPadding = brickPadding;
    // this.brickOffsetLeft = brickOffsetLeft;
    // this.brickOffsetTop = brickOffsetTop;

    for (let c = 0; c < brickColumnCount; c += 1) {
      this.bricks[c] = [];
      for (let r = 0; r < brickRowCount; r += 1) {
        // bricks[c][r] = { x: 0, y: 0 };
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        let color;
        switch (r) {
          case 1:
            color = '#7a1777';
            break;
          case 2:
            color = '#ba254d';
            break;
          case 3:
            color = '#3d34bf';
            break;
          default:
            color = '#0095DD';
        }
        this.bricks[c][r] = {
          x: brickX,
          y: brickY,
          brickWidth,
          brickHeight,
          color,
          status,
        };
      }
    }
  }

  render(ctx) {
    for (let c = 0; c < this.brickColumnCount; c += 1) {
      for (let r = 0; r < this.brickRowCount; r += 1) {
        if (this.bricks[c][r].status === 3) {
           this.renderHelper(ctx, this.bricks[c][r].x, this.bricks[c][r].y, this.bricks[c][r].color);
        } else if (this.bricks[c][r].status === 2) {
          this.renderHelper(ctx, this.bricks[c][r].x, this.bricks[c][r].y, '#eb4034');
        } else if (this.bricks[c][r].status === 1) {
          this.renderHelper(ctx, this.bricks[c][r].x, this.bricks[c][r].y, '#f5e642');
        }
      }
    }
  }

  renderHelper(ctx, x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, this.brickWidth, this.brickHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Bricks;
