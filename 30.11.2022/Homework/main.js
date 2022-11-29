'use strict'
const Game = new Phaser.Game(800, 800, Phaser.AUTO, "", { preload, create })

function preload() {
    Game.load.spritesheet("monster", "monster.903x768.10x8.png", 903 / 10, 768 / 8);
}

function create() {
    let monster1 = Game.add.sprite(0, 350, "monster"); // nad 60 fps
    monster1.anchor.setTo(0, 0.5);
    monster1.animations.add("above60fps", [0, 1, 2], 61, true).play();

    let monster2 = Game.add.sprite(800, 350, "monster"); // bezkraino
    monster2.anchor.setTo(1, 0.5);
    monster2.animations.add("endless", [0, 1, 2, 3, 4, 5], 30, true).play();
    
    let monster3 = Game.add.sprite(400, 400, "monster");
    monster3.anchor.setTo(0.5, 0.5);
    monster3.animations.add("allSprites", [], 60, true).play();
}