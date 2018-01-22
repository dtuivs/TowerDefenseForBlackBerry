module Entity {
    export class Tower extends Phaser.Sprite {
        towerType: number;
        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'test', 0);

            this.anchor.setTo(0.5, 0);

            //this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

            game.add.existing(this);
        }
    }
}