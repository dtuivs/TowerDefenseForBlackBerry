module TowerDefense {
    export class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', 'assets/loader.png');
        }

        create() {
            //  Unless you specifically need to support multitouch is recommended setting this to 1
            this.input.maxPointers = 1;

            //  Automatically pause if the browser tab the game is in loses focus.
            this.stage.disableVisibilityChange = true;

            if (this.game.device.desktop) {
                //  desktop settings
                this.scale.pageAlignHorizontally = true;
            }
            else {
                // Mobile settings
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = 480;
                this.scale.minHeight = 260;
                this.scale.maxWidth = 1024;
                this.scale.maxHeight = 768;
                this.scale.forceLandscape = true;
                this.scale.pageAlignHorizontally = true;
                //this.stage.scale.setScreenSize(true);

            }

            this.game.state.start('Preloader', true, false);

        }
    }
}