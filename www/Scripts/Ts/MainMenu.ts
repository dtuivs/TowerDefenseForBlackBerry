module TowerDefense {
    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        
        create() {

            this.background = this.add.sprite(0, 0, 'MainMenuImg');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            var group = this.add.group();

            //this.input.onDown.addOnce(this.fadeOut, this);
            this.addTitle("Main Menu");
            this.addButtons();

        }

        fadeOut() {

            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

        }

        startGame() {

            this.game.state.start('Level1', true, false);

        }

        addTitle(value:string) {
            //Instead of using this it could be better to use an img with the title
            var c = new CustomText(this.game, 0, 0, value, 0);
            c.centerText(this.world.centerX);
            this.game.add.existing(c);
        }

        addButtons() {
            var x = this.game.world.width-140;
            var y = this.game.world.centerY;

            //var btn_Easy = this.game.make.button(x, y, 'btnEasy', this.selectLvl, this,2,1,0);
            //var btn_Medium = this.game.make.button(x, y + 20, 'btnMedium', this.selectLvl, this,2,1,0);
            //var btn_Hard = this.game.make.button(x, y + 40, 'btnHard', this.selectLvl, this,2,1,0);
            //var btn_Insane = this.game.make.button(x, y + 60, 'btnInsane', this.selectLvl, this,2,1,0);
            var btn_Play = this.game.make.button(this.game.world.centerX -50 , y+200, 'btnStart', this.startGame, this,2,1,0);

            //btn_Easy.onInputOver.add(this.onHover, this);
            //btn_Medium.onInputOver.add(this.onHover, this);
            //btn_Hard.onInputOver.add(this.onHover, this);
            //btn_Insane.onInputOver.add(this.onHover, this);

            //this.game.add.existing(btn_Easy);
            //this.game.add.existing(btn_Medium);
            //this.game.add.existing(btn_Hard);
            //this.game.add.existing(btn_Insane);
            this.game.add.existing(btn_Play);
        }

        private onHover() {
            
        }

        private selectLvl() {
            this.deselectAll();

        }
        private deselectAll() {

        }

        

    }

}