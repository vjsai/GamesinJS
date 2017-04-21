/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/**
 * Created by vijay on 20/4/17.
 */



class TicTacToe {

    constructor(divId) {
        this.canvas = document.getElementById(divId);
        this.canvas.width = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* canvasSize */];
        this.canvas.height = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* canvasSize */];
        this.context = this.canvas.getContext('2d');
        this.initialValue = __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* initialValue */];
        this.board = [];
        this.currentPlayer = __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* oLabel */];
    }

    init() {
        const self = this;
        self.context.translate(0.5, 0.5);
        self.bindEvents();
        self.drawLines(10, __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* colors */].lineColor);
        for (let x = 0; x < 3; x++) {
            self.board.push([]);
            for (let y = 0; y < 3; y++) {
                self.board[x].push(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* initialValue */]);
            }
        }
    }

    bindEvents() {
        const canvas = this.canvas;
        const self = this;
        canvas.addEventListener('mouseup', evt => {
            if (self.currentPlayer === __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* oLabel */]) {
                self.currentPlayer = __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* xLabel */];
            } else {
                self.currentPlayer = __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* oLabel */];
            }

            const canvasMousePosition = self.getCanvasMousePosition(evt);
            self.makeMove(canvasMousePosition);
            self.drawLines(10, __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* colors */].lineColor);
        });
    }

    drawLines(lineWidth, lineColor) {
        let lineStart = 4;
        let lineLength = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* canvasSize */] - 5;
        const self = this;
        self.context.lineWidth = lineWidth;
        self.context.lineCap = 'round';
        self.context.strokeStyle = lineColor;
        self.context.beginPath();

        //code for drawing horizontal lines
        for (let y = 1; y <= 2; y++) {
            self.context.moveTo(lineStart, y * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */]);
            self.context.lineTo(lineLength, y * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */]);
        }
        //code for drawing vertical lines
        for (let x = 1; x <= 2; x++) {
            self.context.moveTo(x * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */], lineStart);
            self.context.lineTo(x * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */], lineLength);
        }
        self.context.stroke();
    }

    makeMove(mousePosition) {
        let xCoordinate;
        let yCoordinate;
        const self = this;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                xCoordinate = x * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */];
                yCoordinate = y * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */];

                if (mousePosition.x >= xCoordinate && mousePosition.x <= xCoordinate + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */] && mousePosition.y >= yCoordinate && mousePosition.y <= yCoordinate + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */]) {

                    self.clearArea(xCoordinate, yCoordinate);

                    if (self.currentPlayer === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* xLabel */]) {
                        self.drawX(xCoordinate, yCoordinate);
                    } else {
                        self.drawO(xCoordinate, yCoordinate);
                    }
                }
            }
        }
    }

    drawO(x, y) {
        const self = this;
        //calculations to draw 'O' on canvas
        const halfSectionSize = 0.5 * __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */];
        let centerX = x + halfSectionSize;
        let centerY = y + halfSectionSize;
        let radius = (__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */] - 100) / 2;
        let startAngle = 0 * Math.PI;
        let endAngle = 2 * Math.PI;

        //code for drawing 'O' on canvas
        self.context.lineWidth = 10;
        self.context.strokeStyle = __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* colors */].ocolor;
        self.context.beginPath();
        self.context.arc(centerX, centerY, radius, startAngle, endAngle);
        self.context.stroke();
    }

    drawX(x, y) {
        const self = this;

        self.context.strokeStyle = __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* colors */].xcolor;
        self.context.beginPath();
        const offset = 50;
        //code to draw 'X'
        self.context.moveTo(x + offset, y + offset);
        self.context.lineTo(x + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */] - offset, y + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */] - offset);
        self.context.moveTo(x + offset, y + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */] - offset);
        self.context.lineTo(x + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */] - offset, y + offset);
        self.context.stroke();
    }

    clearArea(x, y) {
        this.context.fillStyle = __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* colors */].backColor;
        this.context.fillRect(x, y, __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */], __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* sectionSize */]);
    }

    getCanvasMousePosition(evt) {
        const rect = this.canvas.getBoundingClientRect();

        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TicTacToe;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by vijay on 20/4/17.
 */

//Colors config
const colors = {
    lineColor: "#000",
    backColor: "#fff",
    xcolor: "#000",
    ocolor: "#000"
};
/* harmony export (immutable) */ __webpack_exports__["d"] = colors;


//size of canvas to draw
const canvasSize = 500;
/* harmony export (immutable) */ __webpack_exports__["a"] = canvasSize;

const initialValue = "";
/* harmony export (immutable) */ __webpack_exports__["b"] = initialValue;

const sectionSize = canvasSize / 3;
/* harmony export (immutable) */ __webpack_exports__["f"] = sectionSize;

const xLabel = 'X';
/* harmony export (immutable) */ __webpack_exports__["e"] = xLabel;

const oLabel = 'O';
/* harmony export (immutable) */ __webpack_exports__["c"] = oLabel;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tictactoe__ = __webpack_require__(0);
/**
 * Created by vijay on 20/4/17.
 */


const divId = "tic-tac-toe-board";
const board = new __WEBPACK_IMPORTED_MODULE_0__tictactoe__["a" /* default */](divId);
board.init();

/***/ })
/******/ ]);