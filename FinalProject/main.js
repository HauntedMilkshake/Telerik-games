'use strict'

//const { Time } = require("phaser-ce");

const Game = new Phaser.Game(800, 400, Phaser.AUTO, "", { preload, create, update });
let player;
let ghost; 
let hideGhostX = -100;
let hideGhostY = 0;
let playerSpeed = 50;
let ghostSpeed = 35;
let playerState = true;
let button_swap, button_a, button_d, button_w, button_s;
// true - human form 
// false - ghost form
// druga promenliva za duha sprqmo playerState shte mestq ili duha ili playera 
function preload() {
    //("ghostIdle", "assets\ghost\idle.png");
    Game.load.spritesheet("human", "assets/player/spritesheet.png", 288  / 9, 32);
    Game.load.image("ghost", "assets/ghost/idle.png");
}

function create() {
    createKeys();
    createPlayer();
    createGhost();
}

function createPlayer() {
    player = Game.add.sprite(64, 200, "human");

    player.anchor.setTo(0.5);
    player.scale.setTo(2);

    player.animations.add("idle", [0 , 1], 1, true);
    player.animations.add("run", [2, 3, 4, 5, 6, 7, 8], 15, true);

    Game.physics.enable(player, Phaser.Physics.ARCADE);

}

function createGhost(){
    ghost = Game.add.sprite(hideGhostX, hideGhostY, "ghost");
    ghost.anchor.setTo(0.5);
    ghost.scale.setTo(2);
    Game.physics.enable(ghost, Phaser.Physics.ARCADE);
    
}

function createKeys() {
    button_w = Game.input.keyboard.addKey(Phaser.Keyboard.W);
    button_a = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    button_d = Game.input.keyboard.addKey(Phaser.Keyboard.D);
    button_s = Game.input.keyboard.addKey(Phaser.Keyboard.S);
    button_swap = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}


function update() {
    movement();
    switchToGhost();
}

function movement() {
    if(playerState){
        Game.camera.follow(player);
        if(button_a.isDown){
            // probvai go s player.setVelocityX(-playerSpeed);
            player.body.velocity.x = -playerSpeed;
            player.animations.play("run");
            player.scale.setTo(-2, 2);  

        }else if(button_d.isDown){
            player.body.velocity.x = +playerSpeed;
            player.animations.play("run");
            player.scale.setTo(2, 2);
        }
        
        if(!(button_a.isDown || button_d.isDown)){
            player.animations.play("idle");
            player.body.velocity.x = 0;
            player.scale.setTo(2);
        }

    }else if(!playerState){
       
        Game.camera.follow(ghost);
        if(button_a.isDown){
            ghost.body.velocity.x = -ghostSpeed;

        }else if(button_d.isDown){
            ghost.body.velocity.x = +ghostSpeed;

        }else if(button_w.isDown){
            ghost.body.velocity.y = -ghostSpeed;

        }else if(button_s.isDown){
            ghost.body.velocity.y = +ghostSpeed;

        }else if(!(button_a.isDown || button_d.isDown || button_w.isDown || button_s.isDown)){
            ghost.body.velocity.x = 0;
            ghost.body.velocity.y = 0;
        }
    }
}
/*
function switchToGhost() {
    let isButtonPressed = false;
    let isHumanMode = true;
    //buleva promenliva samo dali e natisnat butona i dali e pusnat
    //mojem da natisnem butona samo kogato isPress primerno e false i tq stava true shtom se natisne butona i vice versa
    if(button_swap.isDown && isButtonPressed == false){
        isButtonPressed = true;
        isHumanMode = false;

        console.log("1: " + playerState);
        playerState = !(playerState);

        ghost.x = player.x + 32;
        ghost.y = player.y;

        console.log("2: " + playerState); 
        if(button_swap.isDown && isHumanMode == false){
            isButtonPressed = false;
            isHumanMode = true;
            playerState = !(playerState);

        }
        if(playerState){
            ghost.x = hideGhostX;
            ghost.y = hideGhostY;
        }
    }
}
*/
function switchToGhost(){
    let flag = true;
    //console.log(Game.time.now);
    if(button_swap.isReleased){
        flag = false;
        console.log("1")
        playerState = !(playerState);
        ghost.x = player.x + 32;
        ghost.y = player.y; 
        if(playerState){
            flag = true;
            console.log("2")
            playerState = !(playerState);
            ghost.x = hideGhostX;
            ghost.y = hideGhostY;

        }
    }
}