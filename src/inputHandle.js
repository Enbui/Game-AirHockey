export default class InputHandle {
    constructor(player, game) {

        document.addEventListener("keydown", (event) => {
            switch (event.keyCode) {

                case 37:
                    player.moveLeft();
                    break;


                case 39:
                    player.moveRight();
                    break;

                case 38:
                    player.moveUp();
                    break;

                case 40:
                    player.moveDown();
                    break;

                case 27:
                    document.getElementById("click").play();
                    game.togglePause();
                    break;

                case 32:
                    if (this.game.state === GAME_STATE.GAMEOVER) {
                        this.game.ball.score = 0;
                        this.game.reset();
                    }
                    else {
                        document.getElementById("click").play();
                        game.start();
                        break;
                    }


            }
        });

        document.addEventListener("keyup", (event) => {
            switch (event.keyCode) {

                case 37:
                    if (player.speedX < 0) player.stop();
                    break;


                case 39:
                    if (player.speedX > 0) player.stop();
                    break;

                case 38:
                    if (player.speedY < 0) player.stop();
                    break;

                case 40:
                    if (player.speedY > 0) player.stop();
                    break;
            }
        });
    }
}