'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.spritesheet("dude", "dude-pink.288x40.9x1.png", 288 / 9, 40);
}
    let alienGoingRight, alienGoingLeft, alienGoingDown, alienGoingUp;
function create() {
    alienGoingRight = Game.add.sprite(0, 0, "dude");
    alienGoingRight.animations.add("walkRight", [5, 6, 7, 8], 20, true).play();

    alienGoingLeft = Game.add.sprite(600, 600, "dude");
    alienGoingLeft.anchor.setTo(1, 1);
    alienGoingLeft.animations.add("walkLeft", [1, 2, 3], 60, true).play();

    alienGoingDown = Game.add.sprite(0, 0, "dude");
    alienGoingDown.animations.add("walkDown", [4], 60, true).play();

    alienGoingUp = Game.add.sprite(600, 600, "dude");
    alienGoingUp.anchor.setTo(1, 1);
    alienGoingUp.animations.add("walkUp", [4], 60, true).play();
}

function update(){
    
    alienGoingRight.x += 1;
    alienGoingDown.y += 1;
    alienGoingLeft.x -= 1;
    alienGoingUp.y -= 1;
}