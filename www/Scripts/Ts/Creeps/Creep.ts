module Entity {

    export class Creep extends Phaser.Sprite {

        game: Phaser.Game ;
        hp: number;
        speed: number;
        defense: number;
        regen: number;
        img: Phaser.Sprite;
        path: number[][];

        constructor(g: Phaser.Game, hp: number,img: Phaser.Sprite, speed:number=10, defense: number=0, regen: number=0) {
            super(g,0,0);
            this.game = g;
            this.img = img;
            this.hp = hp;
            this.speed = speed;
            this.defense = defense;
            this.regen = regen;
        }

        SetPath(point:number[][]) {
            
        }

        run() {
            //Fix goes here
            //var tween = this.game.add.tween(this.img).to({ x: [w, w, 0, 0], y: [0, h, h, 0] }, 4000, "Sine.easeInOut", true, -1, false);
        }

        hit(hit:number) {
            if ((this.hp - hit) < 0)
                this.die();
            else
                this.hp -= hit;
        }

        checkSprite(sprite) {
            try {
                if (sprite.x > this.game.width || sprite.y > this.game.height || sprite.x < 0 || sprite.y < 0) {
                    this.die();
                }
            }
            catch (e) {
                console.log(sprite);
            }
        }

        die() {
            this.destroy(true);
        }

        setGame(g: Phaser.Game) {
            this.game = g;
        }

        setHP(h: number) {
            this.hp = h;
        }

        setSpeed(s:number) {
            this.speed = s;
        }

        setDefense(d:number) {
            this.defense = d;
        }

        setRegen(r:number) {
            this.regen = r;
        }

        getGame() {
            return this.game;
        }

        getHP() {
            return this.hp;
        }

        getSpeed() {
            return this.speed;
        }

        getDefense() {
            return this.defense;
        }

        getRegen() {
            return this.regen;
        }

    }

}
