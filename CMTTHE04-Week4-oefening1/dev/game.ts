/// <reference path="ball.ts"/>
//BEGIN SCHERM

class Game {
    screen: any

    constructor() {
        //Variabel "Screen" aanmaken die verwijst naar statscreen.ts class
        this.screen = new StartScreen(this)

        //Speel gameloop functie af.
        this.gameLoop()        
    }
    
    private gameLoop():void{
        //Update screen aanroepen
        this.screen.update()

        //update gameloop 60x per seconde
        requestAnimationFrame(() => this.gameLoop())
    }
} 

//Laat venster = new game
window.addEventListener("load", () => new Game())

