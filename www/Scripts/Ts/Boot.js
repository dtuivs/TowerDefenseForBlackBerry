var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TowerDefense;
(function (TowerDefense) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        Boot.prototype.preload = function () {
            this.load.image('preloadBar', 'assets/loader.png');
        };
        Boot.prototype.create = function () {
            //  Unless you specifically need to support multitouch is recommended setting this to 1
            this.input.maxPointers = 1;
            //  Automatically pause if the browser tab the game is in loses focus.
            this.stage.disableVisibilityChange = true;
            if (this.game.device.desktop) {
                //  desktop settings
                this.stage.scale.pageAlignHorizontally = true;
            }
            else {
                // Mobile settings.
                this.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
                this.stage.scale.minWidth = 480;
                this.stage.scale.minHeight = 260;
                this.stage.scale.maxWidth = 1024;
                this.stage.scale.maxHeight = 768;
                this.stage.scale.forceLandscape = true;
                this.stage.scale.pageAlignHorizontally = true;
                this.stage.scale.setScreenSize(true);
            }
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    TowerDefense.Boot = Boot;
})(TowerDefense || (TowerDefense = {}));
//# sourceMappingURL=Boot.js.map