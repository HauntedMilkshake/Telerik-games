'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update })

let player, speed = 150, cursors, bonus;
let downKey, upKey, leftKey, rightKey;

function preload() {
    Game.load.spritesheet("dude", "dude-pink.288x40.9x1.png", 288/9, 40);
    Game.load.image("background", "background.jpg");
    
}

function addPlayer(){
    player = Game.add.sprite(250, 250, "dude");
    player.anchor.setTo(0.5);
    player.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    player.animations.add("walkRight", [0, 1, 2, 3], 20, true);
    Game.physics.enable(player);
}

function addCursors(){
    leftKey = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightKey = Game.input.keyboard.addKey(Phaser.Keyboard.D);
    upKey = Game.input.keyboard.addKey(Phaser.Keyboard.W);
    downKey = Game.input.keyboard.addKey(Phaser.Keyboard.S);
}
function create() {
    Game.add.sprite(0, 0, "background");
    Game.world.setBounds(0, 0, 1024, 1024)//ot kude do kude shte se prostira sveta
    addPlayer();
    Game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 0.1, 0.1);
    addCursors();
}
function update() {
    playerMovement();
}
function playerMovement(){
    if(leftKey.isDown){
        player.body.velocity.x = -speed;
        player.animations.play("walkRight");
    }else if(rightKey.isDown){
        player.body.velocity.x = speed;
        player.animations.play("walkLeft");
    }else if(upKey.isDown){
        player.body.velocity.y = -speed;
        player.animations.play("walkLeft");
    }else if(downKey.isDown){
        player.body.velocity.y = speed; 
        player.animations.play("walkRight");
    }else{
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        player.frame = 4;
    }
}