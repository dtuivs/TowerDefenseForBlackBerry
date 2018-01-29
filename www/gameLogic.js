//new Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig)
//var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var game = new Phaser.Game(1350, 1080, Phaser.AUTO, '', {preload: preload, create: create, update: update});

//for future purposes, to scale game based on pixel ratio
var scaleRatio = window.devicePixelRatio / 3;
//var logo;
var background;
var creep;


function preload(){
	//game.load.type('assetName', 'location/in/filesystem', width, height);
	//game.load.image('logo', 'assets/phaser-logo-small.png');
	game.load.spritesheet('creep', 'assets/creeps/creep_noWeapon.png', 200, 163);
	game.load.image('background1', 'assets/maps/Maps1.png', 1080, 1350);
}

function create(){
	
	//Arcade Physics - i.e. It enables motion
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//Sets Background at 0x0(Top Left Corner)
	game.add.sprite(0, 0, 'background1');

	//Logo
	//logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
	//logo.scale.setTo(scaleRatio, scaleRatio);

	//creeep
	creep = game.add.sprite(game.world.centerX, game.world.centerY, 'creep');
	//creep.scale.setTo(scaleRatio, scaleRatio);

	//Gives Creep ability to Move and other physics related qualities
	game.physics.arcade.enable(creep);
	
	//Sets the Animation sequence for the creep
	//assetName.animations.add('animationName', [Frames], fps, loop?)
	creep.animations.add('left', [0, 1], 5, true);
	creep.animations.add('right', [3, 4], 5, true);

	//Add Keyboard Manager
	cursors = game.input.keyboard.createCursorKeys();
}	

function update(){
	//Stops creep motion on the x axis
	creep.body.velocity.x = 0;


	//Checks for arrow presses and acts accordingly
	if(cursors.left.isDown)
	{
		creep.body.velocity.x = -150;
		creep.animations.play('left');
	} 
	else if (cursors.right.isDown)
	{
		creep.body.velocity.x = 150;
		creep.animations.play('right');
	} 
	else 
	{
		creep.animations.stop();
		creep.frame = 2;
	}
}