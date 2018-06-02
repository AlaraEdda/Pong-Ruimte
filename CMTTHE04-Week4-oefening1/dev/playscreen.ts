class PlayScreen {
    
    game:Game
    private balls: Ball[] = []
    private paddle:Paddle
    private idk : IDK
    public score: number
    public lives: number

    constructor(g:Game) {
        this.score = -5 //Score start.
        this.lives = 10 //Aantal keren dat je af mag

        this.idk = new IDK(this)

        this.game = g

        //                       xp, up, down
        this.paddle = new Paddle(20, 87, 83)

        //5 ballen in het spel.
        for (var i = 0; i < 5; i++) {
            this.balls.push(new Ball(this))
        }
    }

    public update(): void {
        //Als al je levens op zijn
        if (this.lives < 1){

            //Speel Endgame() functie af.
            this.endGame()
        }

        for (let b of this.balls) {
            //Checkt of paddle en bal elkaar raken
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                
                //Schiet bal terug
                b.hitPaddle()

                //Elke hit die je inkrijgt geeft je 1 punt
                this.score ++
            }

            //Update bal/Laat bal zien.
            b.update()
        } 
        //update paddle
        this.paddle.update()
        this.idk.update()
    }

    //Botsing paddle & bal
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

    //Richt nadat het spel af is je door naar game.ts 
    //Waar die showEndScreen() afspeelt
    private endGame(){
        //Neemt de score van de game met zich mee in een parameter.
        this.game.showEndScreen(this.score)
    }
}