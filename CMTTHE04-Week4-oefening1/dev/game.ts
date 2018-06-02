/// <reference path="ball.ts"/>
//BEGIN SCHERM
class Game {

    constructor() {

        //Speel gameloop functie af.
        this.gameLoop()        
    }
    
    private gameLoop():void{
        
        //update gameloop 60x per seconde
        requestAnimationFrame(() => this.gameLoop())
    }    
} 

//Laat venster = new game
window.addEventListener("load", () => new Game())

