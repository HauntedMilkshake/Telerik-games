'use strict'
const Game = new Phaser.Game(400, 400, Phaser.AUTO, "", { preload, create, update })
let player;
let playerState = true;
let button_swap, button_a, button_d, button_w;
// true - human form 
// false - ghost form
// druga promenliva za duha sprqmo playerState shte mestq ili duha ili playera 
function preload() {
    //("ghostIdle", "assets\ghost\idle.png");
    Game.load.spritesheet("human", "assets/player/spritesheet.png", 288  / 9, 32);
}

function create() {
    createKeys();
    createPlayer();
}

function createPlayer() {
    player = Game.add.sprite(64, 200, "human");

    player.anchor.setTo(0.5);
    player.scale.setTo(1);

    player.animations.add("idle", [0 , 1], 1, true);
    player.animations.add("run", [2, 3, 4, 5, 6, 7, 8], 15, true);

    Game.physics.enable(player, Phaser.Physics.ARCADE);

}

function createKeys() {
    button_w = Game.input.keyboard.addKey(Phaser.Keyboard.W);
    button_a = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    button_d = Game.input.keyboard.addKey(Phaser.Keyboard.D);
    button_swap = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}


function update() {
    movePlayer();
}

function movePlayer() {
    if(playerState){
   
        if(button_a.isDown){
            player.body.velocity.x = -50;
            player.animations.play("run");
        }else if(button_d.isDown){
            player.body.velocity.x = +50;
            player.scale.setTo(-1, 1);
            player.animations.play("run");
        }
        
        if(!button_a.isDown || !button_d.isDown){
            player.animations.play("idle");
        }
    }else if(!playerState){
        // tuka trqbva da go izmislish i za space - a 
    }

}

function switchToGhost() {
    if(button_swap.isDown){
        playerState = false;
    }
}