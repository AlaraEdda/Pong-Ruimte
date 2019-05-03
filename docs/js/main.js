"use strict";
var Paddle = (function () {
    function Paddle(xp, up, down) {
        var _this = this;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.x = xp;
        this.y = 200;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    Paddle.prototype.update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var Ball = (function () {
    function Ball(s) {
        this.screen = s;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = window.innerWidth;
        this.y = Math.random() * (window.innerHeight - 100);
        this.speedX = -3 - (Math.random() * 6);
        this.speedY = Math.random() * 6 - 3;
    }
    Ball.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Ball.prototype.hitPaddle = function () {
        this.speedX *= -1;
    };
    Ball.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.getRectangle().height > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        if (this.x > window.innerWidth) {
            this.speedX *= -1;
        }
        if (this.x + this.getRectangle().width < 0) {
            this.x = window.innerWidth;
            this.screen.lives--;
            console.log("lose a life");
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        this.screen = new PlayScreen(this);
    };
    Game.prototype.showEndScreen = function (score) {
        document.body.innerHTML = "";
        this.screen = new GameOverScreen(this, score);
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOverScreen = (function () {
    function GameOverScreen(g, s) {
        var _this = this;
        this.game = g;
        this.score = s;
        var text = document.createElement("h1");
        text.innerHTML = "Game Over<br><br>Restart";
        text.classList.add("splash");
        text.addEventListener("click", function () { return _this.Clicked(); });
        document.body.appendChild(text);
        var score = document.createElement("H3");
        score.innerHTML = "Score: " + this.score;
        score.classList.add("endScore");
        document.body.appendChild(score);
    }
    GameOverScreen.prototype.update = function () {
    };
    GameOverScreen.prototype.Clicked = function () {
        this.game.showPlayScreen();
    };
    return GameOverScreen;
}());
var IDK = (function () {
    function IDK(s) {
        this.screen = s;
        this.text = document.createElement("h3");
        this.text.innerHTML = "score:0&emsp;&emsp;lives:0";
        document.body.appendChild(this.text);
    }
    IDK.prototype.update = function () {
        this.text.innerHTML = "score:" + this.screen.score + "&emsp;&emsp;lives:" + this.screen.lives;
    };
    return IDK;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        this.balls = [];
        this.score = -5;
        this.lives = 10;
        this.idk = new IDK(this);
        this.game = g;
        this.paddle = new Paddle(20, 87, 83);
        for (var i = 0; i < 5; i++) {
            this.balls.push(new Ball(this));
        }
    }
    PlayScreen.prototype.update = function () {
        if (this.lives < 1) {
            this.endGame();
        }
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var b = _a[_i];
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                b.hitPaddle();
                this.score++;
            }
            b.update();
        }
        this.paddle.update();
        this.idk.update();
    };
    PlayScreen.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    PlayScreen.prototype.endGame = function () {
        this.game.showEndScreen(this.score);
    };
    return PlayScreen;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.div = document.createElement("splash");
        document.body.appendChild(this.div);
        this.div.addEventListener("click", function () { return _this.splashClicked(); });
        this.div.innerHTML = "START THE GAME";
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.splashClicked = function () {
        this.game.showPlayScreen();
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map