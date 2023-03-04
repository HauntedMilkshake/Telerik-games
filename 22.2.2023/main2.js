'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update })

let background, planeta
function preload() {
    Game.load.image("bg", "background-starfield.png");
}

function create() {
    background = Game.add.tileSprite(0, 0, Game.width, Game.height, "bg");
}
function update() {
    background.tilePosition.x += 2;
}
function playerMovement(){
}