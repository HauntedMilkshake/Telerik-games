'use strict'

const Game = new Phaser.Game(window.innherWidth, window.innerHeight, Phaser.AUTO, "", { preload, create, render, update })

function preload() {
Game.load.image("foodChaser", "assets/spas.png");
Game.load.image("food", "assets/food.cur" );
}

let sprite;
function create() {
    Game.physics.startSystem(Phaser.Physics.ARCADE);
    sprite = Game.add.sprite(Game.width, Game.height, "foodChaser");
    sprite.anchor.setTo(0.5, 0.5);
    sprite.scale.setTo(0.1, 0.1);
    Game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.body.allowRotation = false;
   // Game.input.setDefaultCursor("assets/food.cur");
    
}
function render(){
  //  Game.debug.spriteInfo(sprite, 32, 32);
}
function update(){
    sprite.rotation = Game.physics.arcade.moveToPointer(sprite, 60, Game.input.activePointer, 500);
}