/// <reference path="ball.ts"/>

class Game {
    
    // private balls: Ball[] = []
    // private paddle:Paddle

    constructor() {
        // //                       xp, up, down
        // this.paddle = new Paddle(20, 87, 83)
        
        // //5 ballen in het spel.
        // for (let i = 0; i < 5; i++) {
        //     this.balls.push(new Ball())
        // }

        //Speel gameloop functie af.
        this.gameLoop()        
    }
    
    private gameLoop():void{
        // for (let b of this.balls) {
        //     //Checkt of paddle en bal elkaar raken
        //     if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
        //         //Schiet bal terug
        //         b.hitPaddle()
        //     }

        //     //Update bal
        //     b.update()
        // }

        // //update paddle
        // this.paddle.update()
        
        //update gameloop 60x per seconde
        requestAnimationFrame(() => this.gameLoop())
    }

    // //Botsing paddle & bal
    // private checkCollision(a: ClientRect, b: ClientRect) {
    //     return (a.left <= b.right &&
    //         b.left <= a.right &&
    //         a.top <= b.bottom &&
    //         b.top <= a.bottom)
    // }
    
} 

//Laat venster = new game
window.addEventListener("load", () => new Game())

