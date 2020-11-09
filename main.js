import Ball from './js/Ball.js';
import Paddle from './js/Paddle.js';
import Bricks from './js/Bricks.js';
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
// paddle properties and draw function
const paddleHeight = 10;
const paddleWidth = 75;
const ballRadius = 10;

/*
  VARIABLES
*/

// ball position
const x = canvas.width / 2;
const y = canvas.height - 30;
// the amount of x, y change(for coornations)
const dx = 4;
const dy = 4;
const paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

const newClassBall = new Ball(ballRadius, x, y, dx, dy);
const newClassPaddle = new Paddle(paddleWidth, paddleHeight, canvas.height, paddleX);
const newClassLives = new Lives(canvas.width - 65, 20, 5);
const newClassScore = new Score(8, 20, 0);
const newClassBricks = new Bricks(brickWidth, brickHeight, 3, brickColumnCount,
  brickRowCount, brickPadding, brickOffsetLeft, brickOffsetTop);

/*
  FUNCTIONS
*/

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
  newClassPaddle.render(ctx);
  collisionDetection();
  newClassLives.render(ctx);
  newClassScore.render(ctx);

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
