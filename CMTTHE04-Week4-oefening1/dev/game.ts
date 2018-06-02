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

    //Richt je door naar playsreen.ts
    private showPlayScreen(){
        
        //Dit maakt de body van html leeg, zodat je alleen het achergrond ziet.
        document.body.innerHTML = ""

        //"This" is een instance. De variabele this.screen verwijst naar playscreen.ts
        this.screen = new PlayScreen(this)
               
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

