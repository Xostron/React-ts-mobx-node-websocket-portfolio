import React from "react";
import Tool from "./Tool";

interface IBrush extends Tool {
    mouseDown: boolean;
    mouseUp: boolean;
    color: string
    lineWidth: number
}

export default class Brush extends Tool implements IBrush {
    mouseDown: boolean;
    mouseUp: boolean;
    color: string
    lineWidth: number

    constructor(canvas: HTMLCanvasElement, color?: string, lineWidth?: number) {

        super(canvas)
        this.listen()
        this.mouseDown = false
        this.mouseUp = false
        this.color = color || 'black'
        this.lineWidth = lineWidth || 1


    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)

    }

    mouseUpHandler(e: MouseEvent) {
        this.mouseDown = false
    }

    mouseDownHandler(e: MouseEvent) {
        this.mouseDown = true
        this.ctx?.beginPath()
        this.ctx?.moveTo(e.offsetX, e.offsetY)
    }

    mouseMoveHandler(e: MouseEvent) {
        if (this.mouseDown) {
            this.draw(e.offsetX, e.offsetY)
        }
    }

    draw(x: number, y: number) {
        if (this.ctx) {
            this.ctx.strokeStyle = this.color
            this.ctx.lineWidth = this.lineWidth
        }
        this.ctx?.lineTo(x, y)
        this.ctx?.stroke()
        console.log('draw brush')
    }
}




