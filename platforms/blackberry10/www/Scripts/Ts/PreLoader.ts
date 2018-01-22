module TowerDefense {
    export class PreLoader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            //this.load.image('titlepage', 'assets/map1.png');
            //this.load.audio('music', 'assets/title.mp3', true);

            this.load.image('level1Map', 'assets/Maps/Level1.png');
            this.load.image('logo', 'assets/logo.jpg');
            this.load.image('MainMenuImg', 'assets/bckMainMenu.jpg');
            this.preloadButtons();
        } 

        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        } 
        preloadButtons() {
            this.load.spritesheet('btnEasy', 'assets/buttons/MainPageBtn/btnEasy/btn1.png', 200, 300);
            this.load.spritesheet('btnEasy_Hover', 'assets/buttons/MainPageBtn/btnEasy/btn1_Hover.png', 200, 300);
            this.load.spritesheet('btnEasy_Selected', 'assets/buttons/MainPageBtn/btnEasy/btn1_Selected.png', 200, 300);
            this.load.spritesheet('btnMedium', 'assets/buttons/MainPageBtn/btnMedium/btn2.png', 200, 300);
            this.load.spritesheet('btnMedium_Hover', 'assets/buttons/MainPageBtn/btnMedium/btn2_Hover.png', 200, 300);
            this.load.spritesheet('btnMedium_Selected', 'assets/buttons/MainPageBtn/btnMedium/btn2_Selected.png', 200, 300);
            this.load.spritesheet('btnHard', 'assets/buttons/MainPageBtn/btnHard/btn3.png', 200, 300);
            this.load.spritesheet('btnHard_Hover', 'assets/buttons/MainPageBtn/btnHard/btn3_Hover.png', 200, 300);
            this.load.spritesheet('btnHard_Selected', 'assets/buttons/MainPageBtn/btnHard/btn3_Selected.png', 200, 300);
            this.load.spritesheet('btnInsane', 'assets/buttons/MainPageBtn/btnInsane/btn4.png', 200, 300);
            this.load.spritesheet('btnInsane_Hover', 'assets/buttons/MainPageBtn/btnInsane/btn4_Hover.png', 200, 300);
            this.load.spritesheet('btnInsane_Selected', 'assets/buttons/MainPageBtn/btnInsane/btn4_Selected.png', 200, 300);
            this.load.spritesheet('btnStart', 'assets/buttons/MainPageBtn/btnStart.png', 200, 300);
        }

    }

}