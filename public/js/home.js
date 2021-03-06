var width = window.innerWidth;
var height = window.innerHeight;
var gameRatio = innerWidth/innerHeight;

var game = new Phaser.Game(Math.ceil(480*gameRatio), 480, Phaser.CANVAS, 'screen', {preload: preload, create: create, update: update});

function preload() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize(true);

	game.load.spritesheet('background', 'images/streaks.png', 250, 480);
	game.load.spritesheet('scott1', 'images/scott1.png', 58, 76);
	game.load.spritesheet('scott2', 'images/scott2.png', 58, 76);
	game.load.audio('theme', 'sounds/theme.mp3');

}

function create() {

	theme = game.add.audio('theme');
	playTheme = function() {
		theme.play();
		setInterval(function() {
			theme.play();
		}, 98000);
	};

	playTheme();

	////////////////
	// BACKGROUND
	////////////////

	background = game.add.sprite(0, 0, 'background');
	background.height = game.height;
	background.width = game.width;

	background.animations.add('streak', [0, 1, 2, 3, 2, 1], 10, true);
	background.animations.play('streak');

	////////////////
	// MAIN MENU
	////////////////

	text = game.add.text(game.width/2, 60, 'Dual Runner', {fill: '#ffffff'});
	text.anchor.set(0.5);

	single = game.add.text(game.width/2, 140, "Press '1' For Single Player");
	single.anchor.set(0.5);

	versus = game.add.text(game.width/2, 200, "Press '2' For Versus Mode");
	versus.anchor.set(0.5);

	// single = game.add.text(game.width/2, 120, 'Single Player', {fill: '#ffffff'});
	// single.anchor.set(0.5);
	// single.inputEnabled = true;

	// versus = game.add.text(game.width/2, 160, 'Versus', {fill: '#ffffff'});
	// versus.anchor.set(0.5);
	// versus.inputEnabled = true;


	////////////////
	// ANIMATIONS
	////////////////

	scott1 = game.add.sprite(game.width/4, 170, 'scott1');
	scott1.anchor.set(0.5);
	scott1.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7],15 ,true);
	scott1.animations.add('jump', [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 15, true);
	scott1.animations.play('run');

	scott2 = game.add.sprite((game.width/4)*3, 170, 'scott2');
	scott2.anchor.set(0.5);
	scott2.animations.add('run', [0, 1, 2, 3, 4, 5, 6, 7],15 ,true);
	scott2.animations.add('jump', [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 15, true);
	scott2.animations.play('run');

}

function update() {

	if (game.input.keyboard.isDown(Phaser.Keyboard.ONE)) {
		$('body').fadeOut(3500, function(){
			window.location.replace("http://localhost:4567/singleIntro");
		});
	}

	if (game.input.keyboard.isDown(Phaser.Keyboard.TWO)) {
		$('body').fadeOut(3500, function(){
			window.location.replace("http://localhost:4567/versusIntro");
		});
	}

}

// function single() {
// 	$('body').fadeOut(3500, function(){
// 		window.location.replace("http://localhost:4567/singleIntro");
// 	});
// }

// function versus() {
// 	$('body').fadeOut(3500, function(){
// 		window.location.replace("http://localhost:4567/versusIntro");
// 	});
// }