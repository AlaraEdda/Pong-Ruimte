//Begin Scherm- Start the Game!
class StartScreen {

    private div: HTMLElement
    private game : Game

    constructor(g:Game) {
       this.game = g

        //Splash element is opgehaald van style.css & verwerkt in index.html
        this.div = document.createElement("start")
        document.body.appendChild(this.div)

        //Als je klikt word slashClicked functie uitgevoerd.
        this.div.addEventListener("click", ()=>this.splashClicked())
        this.div.innerHTML = "START THE GAME"
    }

    //Update functie
    public update(){
    }

    private splashClicked() {   
        //Wanneer je klikt, word je doorgestuurd naar game.ts
        //Waarna je doorgestuurd word naar de showPlayScreen() functie.
        this.game.showPlayScreen()
    }
}