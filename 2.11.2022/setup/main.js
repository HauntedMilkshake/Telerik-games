'use strict'
//striketn mod v js 
const Game = new Phaser.Game(800, 800, Phaser.AUTO, '', { preload, create, update })
//preload create i update sa osnovni metodi ako sa dadeni v konstruktora znachi che trqbva da gi definirame
//preload e kato loadMedia v sdl
function preload() {
Game.load.image("diuner", "images/pileshki_duner_grand.png")
//tova diuner e kliuch i moje kakvo da e kakvoto si iskame
}
var diuner;
function create() {
    Game.physics.startSystem(Phaser.Physics.ARCADE);
    Game.physics.arcade.gravity.y = 100;
    diuner = Game.add.sprite(0, 0, "diuner");

    Game.physics.arcade.enable(diuner);

    diuner.body.collideWorldBounds = true;
    diuner.body.velocity.x = 20;
    diuner.body.bounce.set(0.9);

    //  Also enable diuner for drag
    diuner.inputEnabled = true;
    diuner.input.enableDrag();

    diuner.events.onDragStart.add(startDrag, this);
    diuner.events.onDragStop.add(stopDrag, this);

}

function startDrag() {

    //  You can't have a sprite being moved by physics AND input, so we disable the physics while being dragged
   diuner.body.moves = false;

}

function stopDrag() {

    //  And re-enable it upon release
    diuner.body.moves = true;

}
function update() {

}