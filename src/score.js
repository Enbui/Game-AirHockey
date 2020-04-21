export default class Score {
    constructor(game) {
        this.game = game;
    }

    draw(context) {

        let IMG_SCORE = [];

        for (let i = 0; i < 10; i++) {
            IMG_SCORE[i] = new Image();
            IMG_SCORE[i].src = './img/' + i + '.png';
        }

        let score = this.game.ball.score;

        if (score <= 9) {
            context.drawImage(IMG_SCORE[score], 265, 380);
        }

        else if (score <= 99) {
            let tens = Math.floor(score / 10);
            let units = score % 10;

            context.drawImage(IMG_SCORE[tens], 230, 380);
            context.drawImage(IMG_SCORE[units], 300, 380);
        }

        else if (score <= 999) {
            let hundreds = Math.floor(score / 100);
            let tens = Math.floor(score % 100 / 10);
            let units = Math.floor((score % 100) % 10);

            context.drawImage(IMG_SCORE[hundreds], 195, 380);
            context.drawImage(IMG_SCORE[tens], 265, 380);
            context.drawImage(IMG_SCORE[units], 335, 380);
        }
    }
}