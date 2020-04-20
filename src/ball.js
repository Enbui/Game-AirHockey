export default class Ball {
    constructor(game) {
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.gameGoal = 200;
        this.img = document.getElementById("img_ball");
        this.width = 40;
        this.height = 40;
        this.positionX = game.gameWidth / 2 - this.width / 2;
        this.positionY = game.gameHeight / 2 - this.height / 2;
        this.speedX = 6;
        this.speedY = 6;



    }
    draw(context) {
        context.drawImage(this.img, this.positionX, this.positionY, this.width, this.height);
    }

    update(deltaTime) {

        this.positionX += this.speedX;
        this.positionY += this.speedY;

        //handle ball collide left side and right side of wall
        if (this.positionX <= 0 || this.positionX >= this.gameWidth - this.width) {
            document.getElementById("balljump").play();
            this.speedX = - this.speedX;
        }

        //handle ball collide above side and below side of wall

        if (this.positionY <= 0) {
            if (this.positionX + this.width <= (this.gameWidth - this.gameGoal) / 2
                || this.positionX >= (this.gameWidth + this.gameGoal) / 2) {
                document.getElementById("balljump").play();
                this.speedY = - this.speedY;
            }
            else {
                document.getElementById("balljump").play();
                this.game.lives --;
            }
        }

        if (this.positionY + this.height >= this.gameHeight) {
            if (this.positionX + this.width <= (this.gameWidth - this.gameGoal) / 2
                || this.positionX >= (this.gameWidth + this.gameGoal) / 2) {
                document.getElementById("balljump").play();
                this.speedY = - this.speedY;
            }
            else {
                document.getElementById("balljump").play();
                this.game.lives --;
                
            }
        }

        //handle ball collide player

        let dx1 = this.positionX - this.game.player.positionX - 40;
        let dy1 = this.positionY - this.game.player.positionY - 40;
        let distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

        

        if (distance1 <= (this.width + this.game.player.width) / 2) {
            document.getElementById("balljump").play();
            this.speedX = 12 * Math.sqrt(2) * dx1 / (this.width + this.game.player.width);
            this.speedY = 12 * Math.sqrt(2) * dy1 / (this.width + this.game.player.width);
        }

        //handle ball collide cpu

        let dx2 = this.positionX - this.game.cpu.positionX - 40;
        let dy2 = this.positionY - this.game.cpu.positionY - 40;
        let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (distance2 <= (this.width + this.game.cpu.width) / 2) {
            document.getElementById("balljump").play();
            this.speedX = 12 * Math.sqrt(2) * dx2 / (this.width + this.game.cpu.width);
            this.speedY = 12 * Math.sqrt(2) * dy2 / (this.width + this.game.cpu.width);
        }

    }

    reset() {
        this.positionX = (this.gameWidth - this.width) /2;
        this.positionY = (this.gameHeight-this.height)/2;

        this.game.player.positionX = game.gameWidth / 2 - this.width / 2;
        this.game.player.positionY = game.gameHeight - this.height - 20;

        this.game.cpu.positionX = game.gameWidth / 2 - this.width / 2;
        this.game.cpu.positionY = 20;

        // todo

    }



}