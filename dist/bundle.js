/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Ball.js":
/*!********************!*\
  !*** ./js/Ball.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./js/Sprite.js\");\n;\n\nclass Ball extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(radius, x, y, dx, dy) {\n    super(x, y);\n    this.radius = radius;\n    this.dx = dx;\n    this.dy = dy;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    ctx.fillStyle = '#2ab855';\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout_game/./js/Ball.js?");

/***/ }),

/***/ "./js/Bricks.js":
/*!**********************!*\
  !*** ./js/Bricks.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Bricks {\n  constructor(brickWidth, brickHeight, status, brickColumnCount,\n    brickRowCount, brickPadding, brickOffsetLeft, brickOffsetTop) {\n    this.brickWidth = brickWidth;\n    this.brickHeight = brickHeight;\n\n    this.bricks = [];\n    this.brickColumnCount = brickColumnCount;\n    this.brickRowCount = brickRowCount;\n    // this.brickPadding = brickPadding;\n    // this.brickOffsetLeft = brickOffsetLeft;\n    // this.brickOffsetTop = brickOffsetTop;\n\n    for (let c = 0; c < brickColumnCount; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < brickRowCount; r += 1) {\n        // bricks[c][r] = { x: 0, y: 0 };\n        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;\n        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;\n        let color;\n        switch (r) {\n          case 1:\n            color = '#7a1777';\n            break;\n          case 2:\n            color = '#ba254d';\n            break;\n          case 3:\n            color = '#3d34bf';\n            break;\n          default:\n            color = '#0095DD';\n        }\n        this.bricks[c][r] = {\n          x: brickX,\n          y: brickY,\n          brickWidth,\n          brickHeight,\n          color,\n          status,\n        };\n      }\n    }\n  }\n\n  render(ctx) {\n    for (let c = 0; c < this.brickColumnCount; c += 1) {\n      for (let r = 0; r < this.brickRowCount; r += 1) {\n        if (this.bricks[c][r].status === 3) {\n           this.renderHelper(ctx, this.bricks[c][r].x, this.bricks[c][r].y, this.bricks[c][r].color);\n        } else if (this.bricks[c][r].status === 2) {\n          this.renderHelper(ctx, this.bricks[c][r].x, this.bricks[c][r].y, '#eb4034');\n        } else if (this.bricks[c][r].status === 1) {\n          this.renderHelper(ctx, this.bricks[c][r].x, this.bricks[c][r].y, '#f5e642');\n        }\n      }\n    }\n  }\n\n  renderHelper(ctx, x, y, color) {\n    ctx.beginPath();\n    ctx.rect(x, y, this.brickWidth, this.brickHeight);\n    ctx.fillStyle = color;\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://breakout_game/./js/Bricks.js?");

/***/ }),

/***/ "./js/Lives.js":
/*!*********************!*\
  !*** ./js/Lives.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./js/Sprite.js\");\n;\n\nclass Lives extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x, y, lives) {\n    super(x, y);\n    this.lives = lives;\n  }\n\n  render(ctx) {\n    ctx.font = '16px Arial';\n    ctx.fillStyle = '#0095DD';\n    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lives);\n\n\n//# sourceURL=webpack://breakout_game/./js/Lives.js?");

/***/ }),

/***/ "./js/Paddle.js":
/*!**********************!*\
  !*** ./js/Paddle.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// import Sprite from './Sprite.js';\n\nclass Paddle {\n  constructor(width, height, canvasHeight, paddleX) {\n    this.paddleWidth = width;\n    this.paddleHeight = height;\n    this.paddleX = paddleX;\n    this.canvasHeight = canvasHeight;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(\n      this.paddleX,\n      this.canvasHeight - this.paddleHeight,\n      this.paddleWidth,\n      this.paddleHeight,\n    );\n    // ctx.rect(0,0, 50, 50)\n    ctx.fillStyle = `#eb403${this.paddleX + 10}`;\n    // ctx.fillStyle = 'yellow';\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n\n//# sourceURL=webpack://breakout_game/./js/Paddle.js?");

/***/ }),

/***/ "./js/Score.js":
/*!*********************!*\
  !*** ./js/Score.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ \"./js/Sprite.js\");\n;\n\nclass Score extends _Sprite_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x, y, score) {\n    super(x, y);\n    this.score = score;\n  }\n\n  render(ctx) {\n    ctx.font = '16px Arial';\n    ctx.fillStyle = '#0095DD';\n    ctx.fillText(`Score: ${this.score}`, this.x, this.y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);\n\n\n//# sourceURL=webpack://breakout_game/./js/Score.js?");

/***/ }),

/***/ "./js/Sprite.js":
/*!**********************!*\
  !*** ./js/Sprite.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Sprite {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  moveTo(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  moveBy(dx, dy) {\n    this.x += dx;\n    this.y += dy;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://breakout_game/./js/Sprite.js?");

/***/ }),

/***/ "./js/main-bundle.js":
/*!***************************!*\
  !*** ./js/main-bundle.js ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ \"./js/Ball.js\");\n/* harmony import */ var _Paddle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle.js */ \"./js/Paddle.js\");\n/* harmony import */ var _Bricks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bricks.js */ \"./js/Bricks.js\");\n/* harmony import */ var _Lives_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lives.js */ \"./js/Lives.js\");\n/* harmony import */ var _Score_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Score.js */ \"./js/Score.js\");\n;\n\n\n\n\n\n/*\n  CONSTANTS\n*/\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n// brick properties\nconst brickRowCount = 4;\nconst brickColumnCount = 6;\nconst brickWidth = 60;\nconst brickHeight = 20;\nconst brickPadding = 10;\nconst brickOffsetTop = 30;\nconst brickOffsetLeft = 30;\n// paddle properties and draw function\nconst paddleHeight = 10;\nconst paddleWidth = 75;\nconst ballRadius = 10;\n\n/*\n  VARIABLES\n*/\n\n// ball position\nconst x = canvas.width / 2;\nconst y = canvas.height - 30;\n// the amount of x, y change(for coornations)\nconst dx = 4;\nconst dy = 4;\nconst paddleX = (canvas.width - paddleWidth) / 2;\nlet rightPressed = false;\nlet leftPressed = false;\n\nconst newClassBall = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__.default(ballRadius, x, y, dx, dy);\nconst newClassPaddle = new _Paddle_js__WEBPACK_IMPORTED_MODULE_1__.default(paddleWidth, paddleHeight, canvas.height, paddleX);\nconst newClassLives = new _Lives_js__WEBPACK_IMPORTED_MODULE_3__.default(canvas.width - 65, 20, 5);\nconst newClassScore = new _Score_js__WEBPACK_IMPORTED_MODULE_4__.default(8, 20, 0);\nconst newClassBricks = new _Bricks_js__WEBPACK_IMPORTED_MODULE_2__.default(brickWidth, brickHeight, 3, brickColumnCount,\n  brickRowCount, brickPadding, brickOffsetLeft, brickOffsetTop);\n\n/*\n  FUNCTIONS\n*/\n\n// add mouse listening event and other events\nfunction mouseMoveHandler(e) {\n  const relativeX = e.clientX - canvas.offsetLeft;\n  if (relativeX > 0 && relativeX < canvas.width) {\n    newClassPaddle.paddleX = relativeX - newClassPaddle.paddleWidth / 2;\n  }\n  // doesn't currently work\n  // drawPaddle();\n}\n\nfunction keyDownHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = true;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = true;\n  }\n}\nfunction keyUpHandler(e) {\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\n    rightPressed = false;\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n    leftPressed = false;\n  }\n}\n\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\n\n// collision detection\nfunction collisionDetection() {\n  for (let c = 0; c < newClassBricks.brickColumnCount; c += 1) {\n    for (let r = 0; r < newClassBricks.brickRowCount; r += 1) {\n      const b = newClassBricks.bricks[c][r];\n      if (b.status === 1 || b.status === 2 || b.status === 3) {\n        if (\n          newClassBall.x > b.x\n                && newClassBall.x < b.x + brickWidth\n                && newClassBall.y > b.y\n                && newClassBall.y < b.y + brickHeight\n        ) {\n          newClassBall.dy = -newClassBall.dy;\n          // updating the brick status as 0\n          b.status -= 1;\n          // update score\n          newClassScore.score += 25;\n          // checking to see if you've won\n          if (newClassScore.score === (brickRowCount * brickColumnCount) * 25 * 3) {\n            alert(`YOU WIN, CONGRATULATIONS! SCORE: ${newClassScore.score}`);\n            document.location.reload();\n            // clearInterval(interval); // Needed for Chrome to end game\n          }\n        }\n      }\n    }\n  }\n}\n\nfunction changePaddleDirection() {\n  if (rightPressed) {\n    newClassPaddle.paddleX += 7;\n    if (newClassPaddle.paddleX + newClassPaddle.paddleWidth > canvas.width) {\n      newClassPaddle.paddleX = canvas.width - newClassPaddle.paddleWidth;\n    }\n    // drawPaddle();\n  } else if (leftPressed) {\n    newClassPaddle.paddleX -= 7;\n    if (newClassPaddle.paddleX < 0) {\n      newClassPaddle.paddleX = 0;\n    }\n    // drawPaddle();\n  }\n}\n\nfunction collisionMovement() {\n  // updated code so ball bounces off wall right after touch not half way in\n  if (newClassBall.x + newClassBall.dx > canvas.width - ballRadius\n    || newClassBall.x + newClassBall.dx < ballRadius) {\n    // changes direction\n    newClassBall.dx = -newClassBall.dx;\n  }\n\n  if (newClassBall.y + newClassBall.dy < ballRadius) {\n    newClassBall.dy = -newClassBall.dy;\n  } else if (newClassBall.y + newClassBall.dy > canvas.height - ballRadius) {\n    if (newClassBall.x > newClassPaddle.paddleX\n      && newClassBall.x < newClassPaddle.paddleX + newClassPaddle.paddleWidth) {\n      newClassBall.dy = -newClassBall.dy;\n    } else {\n      // decrement lives and checking to see if lives == 0 then GAME OVER or reset\n      newClassLives.lives -= 1;\n      if (!newClassLives.lives) {\n        alert(`GAME OVER SCORE: ${newClassScore.score}`);\n        document.location.reload();\n        // clearInterval(interval); // Needed for Chrome to end game\n      } else {\n        newClassBall.x = canvas.width / 2;\n        newClassBall.y = canvas.height - 30;\n        newClassBall.dx = -newClassBall.dx;\n        newClassBall.dy = -newClassBall.dy;\n        newClassPaddle.paddleX = (canvas.width - newClassPaddle.paddleWidth) / 2;\n      }\n    }\n  }\n\n  // console.log(newClassBall.x, newClassBall.y)\n  // newClassBall.moveBy(dx, dy);\n  newClassBall.x += newClassBall.dx;\n  newClassBall.y += newClassBall.dy;\n}\n\nfunction draw() {\n  // clear frame before next drawing\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  newClassBall.render(ctx);\n  newClassPaddle.render(ctx);\n  collisionDetection();\n  newClassLives.render(ctx);\n  newClassScore.render(ctx);\n\n  // if (y + dy > canvas.height || y + dy < 0) {\n  //   dy = -dy;\n  // }\n\n  // if (x + dx > canvas.width || x + dx < 0) {\n  //   dx = -dx;\n  // }\n  collisionMovement();\n  newClassBricks.render(ctx);\n  changePaddleDirection();\n\n  // this continues with animation else commented out will just draw once\n  requestAnimationFrame(draw);\n}\n\ndraw();\n\n\n//# sourceURL=webpack://breakout_game/./js/main-bundle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main-bundle.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;