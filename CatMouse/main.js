'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, render, update })

function preload() {
Game.load.image("diunerChaser", "spas.png");
}
let sprite;
//let mouseSprite = Gaem.add.sprite();
function create() {
    Game.physics.startSystem(Phaser.Physics.ARCADE);
    //Game.input.setDefaultCursor();
    sprite = Game.add.sprite(400, 300, 'diunerChaser');
    sprite.anchor.setTo(0.5, 0.5);
    sprite.scale.setTo(0.1, 0.1);
    //   mouseSprite.inputEnabled = true;
    //   sprite.events.onInputOver.add(function(){this.game.canvas.style.cursor = "move";}, this);
    //  Enable Arcade Physics for the sprite
    Game.physics.enable(sprite, Phaser.Physics.ARCADE);
    //  Tell it we don't want physics to manage the rotation
    sprite.body.allowRotation = false;
}
function render(){
  //  Game.debug.spriteInfo(sprite, 32, 32);
}
function update(){
    sprite.rotation = Game.physics.arcade.moveToPointer(sprite, 60, Game.input.activePointer, 500);
}