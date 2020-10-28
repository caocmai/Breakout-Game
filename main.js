// JavaScript code goes here
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ball position
let x = canvas.width / 2;
let y = canvas.height - 30;

// the amount of x, y change(for coornations)
let dx = 4;
let dy = 4;

// brick properties
const brickRowCount = 4;
const brickColumnCount = 8;
const brickWidth = 43;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

// Initialization
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    // bricks[c][r] = { x: 0, y: 0 };
    const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
    const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
    bricks[c][r] = { x: brickX, y: brickY, status: 1 };
  }
}

// draws/redraws bricks based on wether ball has hit block
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      // only draw bricks with status as 1
      if (bricks[c][r].status === 1) {
        ctx.beginPath();
        ctx.rect(bricks[c][r].x, bricks[c][r].y, brickWidth, brickHeight);

        switch (r) {
          case 1:
            ctx.fillStyle = '#7a1777';
            break;
          case 2:
            ctx.fillStyle = '#ba254d';
            break;
          case 3:
            ctx.fillStyle = '#3d34bf';
            break;
          default:
            ctx.fillStyle = '#0095DD';
        }
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// draw score
let score = 0;
function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

// draw lives
let lives = 5;
function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

// paddle properties and draw function
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(
    paddleX,
    canvas.height - paddleHeight,
    paddleWidth,
    paddleHeight,
  );
  ctx.fillStyle = '#eb4034';
  ctx.fill();
  ctx.closePath();
}

// add mouse listening event and other events
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

document.addEventListener('mousemove', mouseMoveHandler, false);
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

// draw the ball with specified x and y starting position
const ballRadius = 10;
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#2ab855';
  ctx.fill();
  ctx.closePath();
}

// collision detection
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x
                && x < b.x + brickWidth
                && y > b.y
                && y < b.y + brickHeight
        ) {
          dy = -dy;
          // updating the brick status as 0
          b.status = 0;
          // update score
          score += 25;
          // checking to see if you've won
          if (score === (brickRowCount * brickColumnCount) * 25) {
            alert(`YOU WIN, CONGRATULATIONS! SCORE:${score}`);
            document.location.reload();
            // clearInterval(interval); // Needed for Chrome to end game
          }
        }
      }
    }
  }
}

function changePaddleDirection() {
  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
}
function draw() {
  // clear frame before next drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  drawScore();
  drawLives();

  // if (y + dy > canvas.height || y + dy < 0) {
  //   dy = -dy;
  // }

  // if (x + dx > canvas.width || x + dx < 0) {
  //   dx = -dx;
  // }

  // updated code so ball bounces off wall right after touch not half way in
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    // changes direction
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      // decrement lives and checking to see if lives == 0 then GAME OVER or reset
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
        // clearInterval(interval); // Needed for Chrome to end game
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = -dx;
        dy = -dy;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  changePaddleDirection();

  x += dx;
  y += dy;

  // this continues with animation else commented out will just draw once
  requestAnimationFrame(draw);
}

draw();
