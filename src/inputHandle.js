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
                    document.getElementById("click").play();
                    game.start();
                    break;

                case 13 :
                    document.getElementById("click").play();
                    game.restart();
                    break;
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