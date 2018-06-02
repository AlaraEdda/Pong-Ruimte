/// <reference path="ball.ts"/>

class Game {
    
    private balls: Ball[] = []
    private paddle:Paddle

    constructor() {
        this.paddle = new Paddle(20, 87, 83)
        
        for (let i = 0; i < 5; i++) {
            this.balls.push(new Ball())
        }

        this.gameLoop()        
    }
    
    private gameLoop():void{
        for (let b of this.balls) {
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                b.hitPaddle()
            }

            b.update()
        }

        this.paddle.update()
        
        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
    
} 


window.addEventListener("load", () => new Game())