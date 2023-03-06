'use strict'
const Game = new Phaser.Game(700, 700, Phaser.AUTO, "", { preload, create, update })

let background, backgroundSky, player;
function preload() {
    Game.load.image("bg", "background-starfield.png");
    Game.load.image("bg2", "background-sky-transparent.png");
    Game.load.image("ufo", "ufo.png");
}

function create() {
    background = Game.add.tileSprite(0, 0, Game.width, Game.height, "bg");
    backgroundSky = Game.add.tileSprite(0, 0, Game.width, Game.height, "bg2");
    player = Game.add.sprite(250, 250, "ufo");
    player.scale.setTo(0.5);
    player.anchor.setTo(0.5);
    Game.physics.arcade.enable(player);
}
function update() {
    background.tilePosition.y -= 2;
    backgroundSky.tilePosition.y -= 4;
    if(Game.physics.arcade.distanceToPointer(player, Game.input.activePointer) > 30){
        player.rotation = Game.physics.arcade.moveToPointer(player, 200);
    }else{
        player.body.velocity.set(0);
    }
}
function playerMovement(){
}