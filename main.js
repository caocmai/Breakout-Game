import Ball from './js/Ball.js';
import Paddle from './js/Paddle.js';
import Brick from './js/Brick.js';
import Lives from './js/Lives.js';
import Score from './js/Score.js';

/*
  CONSTANTS
*/
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// brick properties
const brickRowCount = 4;
const brickColumnCount = 6;
const brickWidth = 60;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const bricks = [];
// paddle properties and draw function
const paddleHeight = 10;
const paddleWidth = 75;
const ballRadius = 10;

/*
  VARIABLES
*/

// ball position
let x = canvas.width / 2;
let y = canvas.height - 30;
// the amount of x, y change(for coornations)
let dx = 4;
let dy = 4;
let score = 0;
let lives = 5;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

/*
  INITIALIZATION
*/
// for (let c = 0; c < brickColumnCount; c += 1) {
//   bricks[c] = [];
//   for (let r = 0; r < brickRowCount; r += 1) {
//     // bricks[c][r] = { x: 0, y: 0 };
//     const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//     const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//     let color;
//     switch (r) {
//       case 1:
//         color = '#7a1777';
//         break;
//       case 2:
//         color = '#ba254d';
//         break;
//       case 3:
//         color = '#3d34bf';
//         break;
//       default:
//         color = '#0095DD';
//     }
//     // bricks[c][r] = {
//     //   x: brickX,
//     //   y: brickY,
//     //   brickWidth,
//     //   brickHeight,
//     //   color,
//     //   status: 3,
//     // };

//     bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight, color, 3);
//   }
// }

/*
  FUNCTIONS
*/

const newClassBall = new Ball(ballRadius, x, y, dx, dy);
const newClassPaddle = new Paddle(paddleWidth, paddleHeight, canvas.height, paddleX);
const newClassLives = new Lives(canvas.width - 65, 20, 3);
const newClassScore = new Score(8, 20, 0);
const newClassBricks = new Brick(brickWidth, brickHeight, 3, brickColumnCount, brickRowCount, brickPadding, brickOffsetLeft, brickOffsetTop);

// draws/redraws bricks based on wether ball has hit block
// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     for (let r = 0; r < brickRowCount; r += 1) {
//       // only draw bricks with status as 1
//       if (bricks[c][r].status === 3) {
//         bricks[c][r].render(ctx, bricks[c][r].color);

//         // ctx.beginPath();
//         // ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].brickWidth, bricks[c][r].brickHeight);
//         // ctx.fillStyle = bricks[c][r].color;
//         // ctx.fill();
//         // ctx.closePath();
//       } else if (bricks[c][r].status === 2) {
//         bricks[c][r].render(ctx, '#eb4034');

//         // ctx.beginPath();
//         // ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].brickWidth, bricks[c][r].brickHeight);
//         // ctx.fillStyle = '#eb4034';
//         // ctx.fill();
//         // ctx.closePath();
//       } else if (bricks[c][r].status === 1) {
//         bricks[c][r].render(ctx, '#f5e642');

//         // ctx.beginPath();
//         // ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].brickWidth, bricks[c][r].brickHeight);
//         // ctx.fillStyle = '#f5e642';
//         // ctx.fill();
//         // ctx.closePath();
//       }
//     }
//   }
// }

// draw score
// function drawScore() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = '#0095DD';
//   ctx.fillText(`Score: ${score}`, 8, 20);
// }

// draw lives
// function drawLives() {
//   ctx.font = '16px Arial';
//   ctx.fillStyle = '#0095DD';
//   ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(
//     paddleX,
//     canvas.height - paddleHeight,
//     paddleWidth,
//     paddleHeight,
//   );
//   ctx.fillStyle = `#eb403${paddleX + 10}`;
//   ctx.fill();
//   ctx.closePath();
// }

// add mouse listening event and other events
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    newClassPaddle.paddleX = relativeX - newClassPaddle.paddleWidth / 2;
  }
  // doesn't currently work
  // drawPaddle();
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
// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//   ctx.fillStyle = '#2ab855';
//   ctx.fill();
//   ctx.closePath();
// }

// collision detection
function collisionDetection() {
  for (let c = 0; c < newClassBricks.brickColumnCount; c += 1) {
    for (let r = 0; r < newClassBricks.brickRowCount; r += 1) {
      const b = newClassBricks.bricks[c][r];
      if (b.status === 1 || b.status === 2 || b.status === 3) {
        if (
          newClassBall.x > b.x
                && newClassBall.x < b.x + brickWidth
                && newClassBall.y > b.y
                && newClassBall.y < b.y + brickHeight
        ) {
          newClassBall.dy = -newClassBall.dy;
          // updating the brick status as 0
          b.status -= 1;
          // update score
          newClassScore.score += 25;
          // checking to see if you've won
          if (newClassScore.score === (brickRowCount * brickColumnCount) * 25 * 3) {
            alert(`YOU WIN, CONGRATULATIONS! SCORE: ${newClassScore.score}`);
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
    newClassPaddle.paddleX += 7;
    if (newClassPaddle.paddleX + newClassPaddle.paddleWidth > canvas.width) {
      newClassPaddle.paddleX = canvas.width - newClassPaddle.paddleWidth;
    }
    // drawPaddle();
  } else if (leftPressed) {
    newClassPaddle.paddleX -= 7;
    if (newClassPaddle.paddleX < 0) {
      newClassPaddle.paddleX = 0;
    }
    // drawPaddle();
  }
}

function collisionMovement() {
  // updated code so ball bounces off wall right after touch not half way in
  if (newClassBall.x + newClassBall.dx > canvas.width - ballRadius
    || newClassBall.x + newClassBall.dx < ballRadius) {
    // changes direction
    newClassBall.dx = -newClassBall.dx;
  }

  if (newClassBall.y + newClassBall.dy < ballRadius) {
    newClassBall.dy = -newClassBall.dy;
  } else if (newClassBall.y + newClassBall.dy > canvas.height - ballRadius) {
    if (newClassBall.x > newClassPaddle.paddleX 
      && newClassBall.x < newClassPaddle.paddleX + newClassPaddle.paddleWidth) {
      newClassBall.dy = -newClassBall.dy;
    } else {
      // decrement lives and checking to see if lives == 0 then GAME OVER or reset
      newClassLives.lives -= 1;
      if (!newClassLives.lives) {
        alert(`GAME OVER SCORE: ${newClassScore.score}`);
        document.location.reload();
        // clearInterval(interval); // Needed for Chrome to end game
      } else {
        newClassBall.x = canvas.width / 2;
        newClassBall.y = canvas.height - 30;
        newClassBall.dx = -newClassBall.dx;
        newClassBall.dy = -newClassBall.dy;
        newClassPaddle.paddleX = (canvas.width - newClassPaddle.paddleWidth) / 2;
      }
    }
  }

  // console.log(newClassBall.x, newClassBall.y)
  // newClassBall.moveBy(dx, dy);
  newClassBall.x += newClassBall.dx;
  newClassBall.y += newClassBall.dy;
}

function draw() {
  // clear frame before next drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  newClassBall.render(ctx);
  // drawBall();
  // drawPaddle();
  newClassPaddle.render(ctx);
  // drawBricks();
  collisionDetection();
  // drawScore();
  // drawLives();
  newClassLives.render(ctx);
  newClassScore.render(ctx);
  // console.log(newClassBall.dx, newClassBall.dy)

  // if (y + dy > canvas.height || y + dy < 0) {
  //   dy = -dy;
  // }

  // if (x + dx > canvas.width || x + dx < 0) {
  //   dx = -dx;
  // }
  collisionMovement();
  newClassBricks.render(ctx);

  changePaddleDirection();

  // this continues with animation else commented out will just draw once
  requestAnimationFrame(draw);
}

draw();
