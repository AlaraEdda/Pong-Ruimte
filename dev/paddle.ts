class Paddle {
    
    private div:HTMLElement
    
    private downkey : number
    private upkey   : number
    
    private downSpeed   : number = 0
    private upSpeed     : number = 0
    
    private x : number
    private y : number
    
    constructor(xp:number, up:number, down:number) {
        //Creer paddle
        this.div = document.createElement("paddle")
        document.body.appendChild(this.div)
        
        //Deze waarden staan in game.ts
        this.upkey   = up       //87 --> W
        this.downkey = down     //83 --> S
        
        this.x      = xp        //20
        this.y      = 200
        
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }
    //Bind paddle aan rectangle
    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    //Control toetsen
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:            //W
                this.upSpeed = 5
                break
            case this.downkey:          //S
                this.downSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.upkey:            //W
                this.upSpeed = 0
                break
            case this.downkey:          //S
                this.downSpeed = 0
                break
        }
    }

    //Update paddle
    public update() {

        //       = 200    -  5/0         +     5/0
        let newY = this.y - this.upSpeed + this.downSpeed               //newY geeft nieuwe positie weer

        // als de paddle binnen beeld blijft, dan ook echt updaten
        if (newY > 0 && newY + 100 < window.innerHeight)                //Als niet true, speel rest van code niet af;
        this.y = newY

        //Beweeg paddle.
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    
}





