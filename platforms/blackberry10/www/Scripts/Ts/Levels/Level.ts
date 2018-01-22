module TowerDefense {
    export abstract class Level extends Phaser.State {
        //If done generic enough there could be no need for more lvl classes

        background: Phaser.Sprite;
        point: number[][];
        player: Entity.Player;
        music: Phaser.Sound;
        creeps: Array<Entity.Creep>;
        creepNumber: number;

        abstract create();
        abstract SetTowersPoints(points: number[][]);

        constructor(p: Entity.Player) {
            super(); 
            this.player = p;
        }

        AddTitle(text: string) {
            var c = new CustomText(this.game, 0, 0, text);
            c.centerText(this.game.world.centerX);
            this.game.add.existing(c);
        }

        SetBackgroundMap(name:string) {
            this.background = this.add.sprite(100, 0, name);
        }

        SetMapPoints() {
            //AbstractMethod
            //Has to be overriden by all lvl Clases
        }

        SetCreep(name: string) {

        }
    }
}