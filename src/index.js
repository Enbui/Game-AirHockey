import Game from "./game.js";

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 700;

let imgBackgroundGame = document.getElementById("img_backgroundgame");
let imgFont = document.getElementById("img_font");
let imgLogo = document.getElementById("img_logogame");
let imgStartButton = document.getElementById("img_playbutton");
let imgTitleGame = document.getElementById("img_titlegame");
let soundBackground = document.getElementById("background");

let imgSound = new Image();
imgSound.src = "./img/pausesound.png";

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {

    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

/* document.getElementById("button").onclick = function () {

    document.getElementById("click").play();
    document.getElementById("start_game").style.display = "none";
    game.start();
    requestAnimationFrame(gameLoop);

}   */

function DrawBackground() {
    context.drawImage(imgBackgroundGame, 0, 0, GAME_WIDTH, GAME_HEIGHT);
    context.drawImage(imgFont, 20, 20);
    context.drawImage(imgLogo, 40, 40);
    context.drawImage(imgStartButton, 200, 400);
    context.drawImage(imgSound, 20, 180);
    context.drawImage(imgTitleGame, 160, 40);
}


DrawBackground();

canvas.addEventListener('click', function (event) {
    let cursor = { x: event.clientX, y: event.clientY };
    let cPos = { x: canvas.offsetLeft, y: canvas.offsetTop };
    let rPos = { x: cursor.x - canvas.offsetLeft, y: cursor.y - canvas.offsetTop };

    if (rPos.x > 200 && rPos.y > 400 &&
        rPos.x < 400 && rPos.y < 450) {
        document.getElementById("click").play();
        //game.start();
        requestAnimationFrame(gameLoop);
    }
});

canvas.addEventListener('click', function (event) {
    let cursor = { x: event.clientX, y: event.clientY };
    let cPos = { x: canvas.offsetLeft, y: canvas.offsetTop };
    let rPos = { x: cursor.x - canvas.offsetLeft, y: cursor.y - canvas.offsetTop };

    if (rPos.x > 20 && rPos.y > 180 &&
        rPos.x < 70 && rPos.y < 230) {

         if (soundBackground.duration > 0 && !soundBackground.paused) {
            imgSound.src = "./img/playsound.png";
            soundBackground.pause();
        }
        else if (soundBackground.paused) {
            imgSound.src = "./img/pausesound.png"
            soundBackground.play();
        }

    }
});









