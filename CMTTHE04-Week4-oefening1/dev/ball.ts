/// <reference path="paddle.ts"/>

class Ball {
    
    private screen: PlayScreen      //Verwijzing naar playscreen.ts
    private div : HTMLElement
    
    private x : number
    private y: number
    
    private speedX: number
    private speedY: number
    
    // Paramter  van playscreen.ts binnen. die parameter staat gelijk aan this.screen.
    constructor(s: PlayScreen) {
        this.screen = s
        //Creer bal
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)
        
        //Scherm wijdte
        this.x = window.innerWidth
        //Random getal in de hoogte van het scherm
        this.y = Math.random() * (window.innerHeight - 100)

        //Random snelheid
        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3
    }

    //rectangle zit vast aan balls.
    public getRectangle(){
        return this.div.getBoundingClientRect()
    }
    
    //Als bal paddle raakt verander snelheid naar -, zodat het weerkaatst
    public hitPaddle(){
        this.speedX *= -1
    }

    //update bal
    public update() : void {
        //Voeg snelheid toe aan positie bal, zodat de positie veranderd
        this.x += this.speedX
        this.y += this.speedY
        
        //Boven & onderkant-scherm raakt, stuiter terug
        if( this.y + this.getRectangle().height > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }

        //Rechter-kant stuiterd bal terug
        if (this.x > window.innerWidth) {
            this.speedX *= -1
        } 
        
        //Linker-kant gaat bal het veld uit.
        if (this.x + this.getRectangle().width < 0) { 
            //Als het uit scherm gaat komt het aan de linker-kant weer tevoorschijn.
            //Das namelijk de x positie in de verste hoek van het scherm (window.innerWidth)
            this.x = window.innerWidth
            this.screen.lives--
            console.log("lose a life")
        } 
        //Transform/update nieuwe bal positie              
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}

