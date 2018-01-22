module TowerDefense {
    export class Level1 extends Level {
        path: number[][];
        create() {

            this.SetBackgroundMap("level1Map");

            this.AddTitle("Level1");

            this.SetCreep("Level1Creep");

            this.SetCreepsPath();

            this.SetTowersPoints();
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();

            //this.player = new Player(this.game, 130, 284);

        }
        SetCreepsPath() {
            this.SetPath();
            for (var i = 0; i < this.creepNumber; i++) {
                this.creeps[i].SetPath(this.path);
            }
        }
        SetPath() {
            //Path TODO: calculate the path of the wave
        }
        SetTowersPoints() {

        }
    }
}