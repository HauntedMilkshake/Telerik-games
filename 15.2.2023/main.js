'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update });

function preload() {
    Game.load.sprite("bird", "flappyBird.png");
}

let bird;
let buttonSpacebar;

function create() {
    createbird();
    createButtons();
}

function createbird() {
    bird = Game.add.sprite(0, 300, "bird");
    bird.anchor.setTo(0.5);
    bird.scale.setTo(0.75);
    Game.physics.arcade.enable(bird);
}

function createButtons() {
    buttonSpacebar = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update() {
    movebird();
}

function movebird() {

}