import Background from "./background.js";
import Ball from "./ball.js";
import Player from "./player.js";
import Cpu from "./cpu.js";
import InputHandle from "./inputHandle.js";
import Score from "./score.js";

const IMG_GAMESTART = new Image(350, 120);
IMG_GAMESTART.src = "./img/start.png";

const IMG_GAMEOVER = new Image(450, 100);
IMG_GAMEOVER.src = "./img/gameover.png";

const IMG_SCORE = new Image(400, 230);
IMG_SCORE.src = "./img/score.png";

const IMG_RESTART = new Image(210, 90);
IMG_RESTART.src = "./img/restart.png";

const IMG_PAUSE = new Image(270, 90);
IMG_PAUSE.src = "./img/pause.png";

const IMG_OPTION1 = new Image(417,33);
IMG_OPTION1.src = "./img/option 1.png";

const IMG_OPTION2 = new Image(455,33);
IMG_OPTION1.src = "./img/option 2.png";

const IMG_OPTION3 = new Image(399,34);
IMG_OPTION3.src = "./img/option 3.png";


const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAME_STATE.MENU;
        this.background = new Background(this);
        this.ball = new Ball(this);
        this.player = new Player(this);
        this.cpu = new Cpu(this);
        new InputHandle(this.player, this);
        this.score = new Score(this);
        this.lives = 1;
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
            context.drawImage(IMG_PAUSE, (this.gameWidth - 270) / 2, (this.gameHeight - 90) / 2);


        }

        if (this.gameState === GAME_STATE.MENU) {
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,1)";
            context.fill();
            context.drawImage(IMG_GAMESTART, (this.gameWidth - 350) / 2, (this.gameHeight - 120) / 2);
            context.drawImage(IMG_OPTION1, 40,600);
            context.drawImage(IMG_OPTION3, 40,700);


        }

        if (this.gameState == GAME_STATE.GAMEOVER) {
            document.getElementById("background").pause();
            document.getElementById("gameover").play();
            context.rect(0, 0, this.gameWidth, this.gameHeight);
            context.fillStyle = "rgba(0,0,0,1)";
            context.fill();
            context.drawImage(IMG_GAMEOVER, (this.gameWidth - 450) / 2, 150);
            context.drawImage(IMG_SCORE, (this.gameWidth - 400) / 2, 310);
            context.drawImage(IMG_OPTION2, 40,560);
           // context.drawImage(IMG_RESTART, (this.gameWidth - 210) / 2, 560);
            this.score.draw(context);

        }

    }

    reset() {
        this.ball.positionX = (this.gameWidth - this.ball.width) / 2;
        this.ball.positionY = (this.gameHeight - this.ball.height) / 2;
        this.ball.speedX = 6;
        this.ball.speedY = 6;

        this.player.positionX = this.gameWidth / 2 - this.player.width / 2;
        this.player.positionY = this.gameHeight - this.player.height - 20;

        this.cpu.positionX = this.gameWidth / 2 - this.cpu.width / 2;
        this.cpu.positionY = 20;
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
