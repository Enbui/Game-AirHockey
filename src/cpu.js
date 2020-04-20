export default class Cpu {
    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.img = document.getElementById("img_cpu");
        this.width = 80;
        this.height = 80;
        this.positionX = game.gameWidth / 2 - this.width / 2;
        this.positionY = 20;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 6;
    }

    draw(context) {
        context.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    update(deltaTime) {

        this.positionX += this.speedX;
        this.positionY += this.speedY;

        if (this.positionX <= 0) {
            this.positionX = 0;
        }

        if (this.positionX >= this.gameWidth - this.width) {
            this.positionX = this.gameWidth - this.width;
        }

        if (this.positionY <= 0) {
            this.positionY = 0;
        }

        if (this.positionY >= this.gameHeight/ 2) {
            this.positionY = this.gameHeight/ 2;
        }

        if (this.game.ball.positionY >= this.gameHeight / 2) {
            this.speedX = this.game.ball.speedX/ 3;
        }

        else {
            if(this.game.ball.speedY <= 0) {
                this.speedX = this.game.ball.speedX/ 3;
            }
            else {
                // todo
            }
        }

    }
}
