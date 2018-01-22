module TowerDefense {
    export class CustomText extends Phaser.Text {

        private _myFontFamily: string;
        private _myFontSize: string;

        get myFontFamily():string{ return this._myFontFamily;}
        set myFontFamily(value: string) {
            if (value== undefined) {
                this.myFontFamily = "Arial";
            }
            this._myFontFamily = value;
        }
        get myFontSize(): string { return this._myFontSize; }
        set myFontSize(value: string) {
            if (value == undefined) {
                this._myFontSize = "Arial";
            }
            this._myFontSize = value;
        }

        constructor(g: Game, x: number, y: number, t: string, a?: number) {
            super(g, x, y, t, {});
            this.setStyle(this.getStyle(a));
            this.myFontFamily = "Arial";
            this.myFontSize = "20px ";
        }

        centerText(centerX: number) {
            this.x = centerX - this.getWidthOfText(this.text);
            
        }

        getWidthOfText(txt): number {
            var c = document.createElement('canvas');
            var ctx = c.getContext('2d');
            ctx.font = this.myFontSize + this.myFontFamily;
            // Measure the string 
            // !!! <CRUCIAL>  !!!
            var length = ctx.measureText(txt).width;
            // !!! </CRUCIAL> !!!
            return length;
        }

        getStyle(style: number) {
            switch (style) {
                case 0:
                    this.myFontSize = "50px ";
                    break;
                case 1:
                    this.myFontSize = "45px ";
                    break;
                case 2:
                    this.myFontSize = "35px ";
                    break;
                case 3:
                    this.myFontSize = "25px ";
                    break;
                default:
                    this.myFontSize = "15px ";
                    break;
            }
            return { font: this.myFontSize + this.myFontFamily, fill: "#EFF899" };
        }
    }
}