export default class Backround {
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.img = document.getElementById("img_background");

    }
    draw(context){
        context.drawImage(this.img, 0, 0, this.gameWidth, this.gameHeight);
        context.fillStyle = "#5dbcd2";
        context.fillRect(180,0,220,5);
        context.fillRect(180,695,220,15);
        //drawGoalPlayer(context);
        //drawGoalCpu(context);
    }

    drawGoalPlayer(context) {
        context.fillStyle = "#5dbcd2";
        context.fillRect(200,0,200,20);
    }

    drawGoalCpu(context) {
        context.fillStyle = "#5dbcd2";
        context.fillRect(200,680,200,20);
    }
}