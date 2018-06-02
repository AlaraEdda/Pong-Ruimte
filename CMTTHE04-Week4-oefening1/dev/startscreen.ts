//Begin Scherm
class StartScreen {

    private div: HTMLElement
    private game : Game

    constructor(g:Game) {
        this.game = g

        //Splash element is opgehaald van style.css & verwerkt in index.html
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)

        //Als je klikt word slashClicked functie uitgevoerd.
        this.div.addEventListener("click", ()=>this.splashClicked())
        this.div.innerHTML = "START THE GAME"
    }

    //Update functie
    public update(){

    }

    private splashClicked() {
        // TODO: geef door aan 'game' dat het spel gestart moet worden
    }
}