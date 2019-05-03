//Zorgt ervoor dat we de levens en punten kunnen zien tijdens het spelen.

class Header{
    text:HTMLElement
    private screen:PlayScreen

    constructor(s:PlayScreen){
        this.screen = s
        this.text = document.createElement("header")
        this.text.innerHTML = "score:0&emsp;&emsp;lives:0"
        document.body.appendChild(this.text)
    }

    public update(){
        this.text.innerHTML = `score:${this.screen.score}&emsp;&emsp;lives:${this.screen.lives}`
    }

}