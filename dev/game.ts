/// <reference path="ball.ts"/>
//leidend SCHERM

class Game {
    screen: any
    
    constructor() {
        //Variabel "Screen" aanmaken die verwijst naar statscreen.ts class
        this.screen = new StartScreen(this)

        //Speel gameloop functie af.
        this.gameLoop()        
    }

    //Public houd in dat je het ook buiten deze file kan gaan gebruiken.
    //Richt je door naar playsreen.ts
    public showPlayScreen(){

        //Dit maakt de body van html leeg, zodat je alleen het achergrond ziet.
        document.body.innerHTML = ""

        //"This" is een instance. De variabele this.screen verwijst naar playscreen.ts
        this.screen = new PlayScreen(this)
    }

    //Word afgespeeld wanneer playscreen.ts is uitgespeeld
    public showEndScreen(score:number){
        //Leegt de screen
        document.body.innerHTML = ""

        //Neemt "score" parameter in zich mee van playscreen.ts
        //Gaat met deze functie naar gameover.ts
        this.screen = new GameOverScreen(this, score)
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

