module TowerDefense {

    export class Game extends Phaser.Game {

        constructor() {

            super(800, 600, Phaser.AUTO, 'TowerDefense', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', PreLoader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level1', Level1, false);

            this.state.start('Boot');

        }

    }

}
