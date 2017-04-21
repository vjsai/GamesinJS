/**
 * Created by vijay on 20/4/17.
 */

import * as constants from './constants';

export default class TicTacToe{

    constructor(divId){
        this.canvas = document.getElementById(divId);
        this.canvas.width = constants.canvasSize;
        this.canvas.height = constants.canvasSize;
        this.context = this.canvas.getContext('2d');
        this.initialValue = constants.initialValue;
        this.board = [];
        this.currentPlayer = constants.oLabel;
    }

    init(){
        const self = this;
        self.context.translate(0.5,0.5);
        self.bindEvents();
        self.drawLines(10, constants.colors.lineColor);
        for (let x = 0;x < 3;x++) {
            self.board.push([]);
            for (let y = 0;y < 3;y++) {
                self.board[x].push(constants.initialValue);
            }
        }
    }

    bindEvents(){
        const canvas = this.canvas;
        const self = this;
        canvas.addEventListener('mouseup',(evt)=>{
            if (self.currentPlayer === constants.oLabel) {
                self.currentPlayer = constants.xLabel;
            } else {
                self.currentPlayer = constants.oLabel;
            }

            const canvasMousePosition = self.getCanvasMousePosition(evt);
            self.makeMove(canvasMousePosition);
            self.drawLines(10, constants.colors.lineColor);
        });
    }

    drawLines(lineWidth,lineColor){
        let lineStart = 4;
        let lineLength = constants.canvasSize - 5;
        const self = this;
        self.context.lineWidth = lineWidth;
        self.context.lineCap = 'round';
        self.context.strokeStyle = lineColor;
        self.context.beginPath();

        //code for drawing horizontal lines
        for (let y = 1;y <= 2;y++) {
            self.context.moveTo(lineStart, y * constants.sectionSize);
            self.context.lineTo(lineLength, y * constants.sectionSize);
        }
        //code for drawing vertical lines
        for (let x = 1;x <= 2;x++) {
            self.context.moveTo(x * constants.sectionSize, lineStart);
            self.context.lineTo(x * constants.sectionSize, lineLength);
        }
        self.context.stroke();
    }

    makeMove(mousePosition){
        let xCoordinate;
        let yCoordinate;
        const self = this;
        for (let x = 0;x < 3;x++) {
            for (let y = 0;y < 3;y++) {
                xCoordinate = x * constants.sectionSize;
                yCoordinate = y * constants.sectionSize;

                if (
                    mousePosition.x >= xCoordinate && mousePosition.x <= xCoordinate + constants.sectionSize &&
                    mousePosition.y >= yCoordinate && mousePosition.y <= yCoordinate + constants.sectionSize
                )
                {

                    self.clearArea(xCoordinate, yCoordinate);

                    if (self.currentPlayer === constants.xLabel) {
                        self.drawX(xCoordinate, yCoordinate);
                    } else {
                        self.drawO(xCoordinate, yCoordinate);
                    }
                }
            }
        }
    }

    drawO(x,y){
        const self  = this;
        //calculations to draw 'O' on canvas
        const halfSectionSize = (0.5 * constants.sectionSize);
        let centerX = x + halfSectionSize;
        let centerY = y + halfSectionSize;
        let radius = (constants.sectionSize - 100) / 2;
        let startAngle = 0 * Math.PI;
        let endAngle = 2 * Math.PI;

        //code for drawing 'O' on canvas
        self.context.lineWidth = 10;
        self.context.strokeStyle = constants.colors.ocolor;
        self.context.beginPath();
        self.context.arc(centerX, centerY, radius, startAngle, endAngle);
        self.context.stroke();
    }

    drawX(x,y){
        const self = this;

        self.context.strokeStyle = constants.colors.xcolor;
        self.context.beginPath();
        const offset = 50;
        //code to draw 'X'
        self.context.moveTo(x + offset, y + offset);
        self.context.lineTo(x + constants.sectionSize - offset, y + constants.sectionSize - offset);
        self.context.moveTo(x + offset, y + constants.sectionSize - offset);
        self.context.lineTo(x + constants.sectionSize - offset, y + offset);
        self.context.stroke();
    }

    clearArea(x,y){
        this.context.fillStyle = constants.colors.backColor;
        this.context.fillRect(
            x,
            y,
            constants.sectionSize,
            constants.sectionSize
        );
    }

    getCanvasMousePosition (evt) {
        const rect = this.canvas.getBoundingClientRect();

        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    }
}