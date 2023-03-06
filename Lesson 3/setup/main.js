'use strict'
//striketn mod v js 
const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload, create, update })
//preload create i update sa osnovni metodi ako sa dadeni v konstruktora znachi che trqbva da gi definirame
//preload e kato loadMedia v sdl
function preload() {
Game.load.image("diuner", "images/pileshki_duner_grand.png")
Game.load.image("background", "nebe.jpg")
//tova diuner e kliuch i moje da e kakvoto si iskame
}

function create() {
    Game.add.sprite(0, 0,"background");
    Game.add.sprite(Game.width / 2, Game.height / 2, "diuner").anchor.setTo(0.5);
    Game.add.sprite(Game.width / 2, Game.height / 2, "diuner").anchor.setTo(1);
    Game.add.sprite(Game.width / 2, Game.height / 2, "diuner").anchor.setTo(0);
    Game.add.sprite(Game.width / 2, Game.height / 2, "diuner").anchor.setTo(0, 1);
    Game.add.sprite(Game.width / 2, Game.height / 2, "diuner").anchor.setTo(1, 0);
}

function update() {

}