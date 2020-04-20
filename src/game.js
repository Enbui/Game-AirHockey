import Background from "./background.js";
import Ball from "./ball.js";
import Player from "./player.js";
import Cpu from "./cpu.js";
import InputHandle from "./inputHandle.js";

const IMG_GAMESTART = new Image(200, 50);
IMG_GAMESTART.src = "./img/start.jpg";

const IMG_GAMEOVER = new Image(200, 150);
IMG_GAMEOVER.src = "./img/gameover.jpg";

const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight, isWin) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAME_STATE.MENU;
        this.background = new Background(this);
        this.ball = new Ball(this);
        this.player = new Player(this);
        this.cpu = new Cpu(this);
        new InputHandle(this.player, this);
        this.lives = 5;
    }

    start() {
        if (this.gameState !== GAME_STATE.MENU) return;
        this.gameState = GAME_STATE.RUNNING;
    }

    update(deltaTime) {

        if (this.lives === 0) this.gameState = GAME_STATE.GAMEOVER;
        if (this.gameState === GAME_STATE.PAUSED
            || this.gameState === GAME_STATE.MENU
            || this.gameState === GAME_STATE.GAMEOVER) return;

        this.ball.update(deltaTime);
        this.player.update(deltaTime);
        this.cpu.update(deltaTime);

    }

    draw(context) {

        this.background.draw(context);
        this.ball.draw(context);
        this.player.draw(context);
        this.cpu.draw(context);

        if (this.gameState === GAME_STATE.PAUSED) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,0.5)";
            context.fill();

           context.font = "30px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Pause", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.gameState === GAME_STATE.MENU) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,1)";
            context.fill();
            context.drawImage(IMG_GAMESTART, (this.gameWidth - 200) / 2, (this.gameHeight - 150) / 2);

        }

        if (this.gameState == GAME_STATE.GAMEOVER) {
            document.getElementById("background").pause();
            document.getElementById("gameover").play();
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,1)";
            context.fill();
            context.drawImage(IMG_GAMEOVER, (this.gameWidth - 200) / 2, (this.gameHeight - 50) / 2);
        }

    }

    togglePause() {
        if (this.gameState === GAME_STATE.PAUSED) {
            this.gameState = GAME_STATE.RUNNING;
        }
        else {
            this.gameState = GAME_STATE.PAUSED;
        }

    }

}
