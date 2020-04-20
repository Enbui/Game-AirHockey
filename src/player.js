export default class Player {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.img = document.getElementById("img_player");
        this.width = 80;
        this.height = 80;
        this.positionX = game.gameWidth / 2 - this.width / 2;
        this.positionY = game.gameHeight - this.height - 20;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 9;
    }

    moveLeft() {
        this.speedX = -this.maxSpeed;
    }

    moveRight() {
        this.speedX = this.maxSpeed;
    }

    moveUp() {
        this.speedY = -this.maxSpeed;
    }

    moveDown() {
        this.speedY = this.maxSpeed;
    }

    stop() {
        this.speedX = 0;
        this.speedY = 0;
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

        if (this.positionY <= this.gameHeight/2) {
            this.positionY = this.gameHeight/2;
        }

        if (this.positionY >= this.gameHeight - this.height) {
            this.positionY = this.gameHeight - this.height;
        }

    }
}
