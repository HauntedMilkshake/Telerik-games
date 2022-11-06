'use strict'
//striketn mod v js 
const Game = new Phaser.Game(800, 800, Phaser.AUTO, '', { preload, create, update })
//preload create i update sa osnovni metodi ako sa dadeni v konstruktora znachi che trqbva da gi definirame
//preload e kato loadMedia v sdl
function preload() {
Game.load.image("diuner", "images/pileshki_duner_grand.png")
//tova diuner e kliuch i moje da e kakvoto si iskame
}
// ne znam dali chetete komentari 
// no ako chetete 
/*
░▄▀▄▀▀▀▀▄▀▄░░░░░░░░░
░█░░░░░░░░▀▄░░░░░░▄░
█░░▀░░▀░░░░░▀▄▄░░█░█
█░▄░█▀░▄░░░░░░░▀▀░░█
█░░▀▀▀▀░░░░░░░░░░░░█
█░░░░░░░░░░░░░░░░░░█
█░░░░░░░░░░░░░░░░░░█
░█░░▄▄░░▄▄▄▄░░▄▄░░█░
░█░▄▀█░▄▀░░█░▄▀█░▄▀░
░░▀░░░▀░░░░░▀░░░▀░░░
totally accurate representation of kashmir 1:1 scale 

*/
function create() {
    Game.add.sprite(400, 400, "diuner").anchor.setTo(0.5);
    Game.add.sprite(400, 400, "diuner").anchor.setTo(1);
    Game.add.sprite(400, 400, "diuner").anchor.setTo(0);
    Game.add.sprite(400, 400, "diuner").anchor.setTo(0, 1);
    Game.add.sprite(400, 400, "diuner").anchor.setTo(1, 0);
    
    
}

function update() {

}