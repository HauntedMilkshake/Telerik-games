'use strict'

const Game = new Phaser.Game(320, 180, Phaser.AUTO, "", { preload, create, update });
//640 x 360
//320 x 180 - possibly moqt resolution za igrata
let ground;
let player;
let ghost; 
let hideGhostX = -100;
let hideGhostY = 0;
let playerSpeed = 50;
let ghostSpeed = 35;
let playerState = true;
let button_swap_toGhost, button_swap_toHuman, button_a, button_d, button_w, button_s;
// true - human form 
// false - ghost form
function preload() {
    
    Game.load.spritesheet("human", "assets/player/spritesheet.png", 288  / 9, 32);
    Game.load.image("ghost", "assets/ghost/idle.png");
    Game.load.tilemap("l1", "l1/l1.json", null, Phaser.Tilemap.TILED_JSON);
    Game.load.image("tileset", "l1/l1.png");
}

function create() {
    createKeys();
    createPlayer();
    createGhost();
    createMap();
}

function createMap(){
    const map = Game.add.tilemap("l1");
    map.addTilesetImage("map", "tileset");
    ground = map.createLayer("Tile Layer 1");
}
function createPlayer() {
    player = Game.add.sprite(16, 24, "human");

    player.anchor.setTo(0.5);
    player.scale.setTo(1);

    player.animations.add("idle", [0 , 1], 1, true);
    player.animations.add("run", [2, 3, 4, 5, 6, 7, 8], 15, true);

    player.smoothed = false;

    Game.physics.enable(player, Phaser.Physics.ARCADE);

}

function createGhost(){
    ghost = Game.add.sprite(hideGhostX, hideGhostY, "ghost");
    ghost.anchor.setTo(0.5);
    ghost.scale.setTo(2);
    player.smoothed = false;
    Game.physics.enable(ghost, Phaser.Physics.ARCADE);
    
}

function createKeys() {
    button_w = Game.input.keyboard.addKey(Phaser.Keyboard.W);
    button_a = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    button_d = Game.input.keyboard.addKey(Phaser.Keyboard.D);
    button_s = Game.input.keyboard.addKey(Phaser.Keyboard.S);
    button_swap_toGhost = Game.input.keyboard.addKey(Phaser.Keyboard.G);
    button_swap_toHuman = Game.input.keyboard.addKey(Phaser.Keyboard.H);
}


function update() {
    movement();
    switchToGhost();
    switchToHuman();
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

function switchToGhost(){
    if(button_swap_toGhost.isDown && playerState){
        playerState = !(playerState);
        ghost.x = player.x + 32;
        ghost.y = player.y; 
    }
   
}

function switchToHuman(){
    if(button_swap_toHuman.isDown && !playerState){
        playerState = !(playerState);
        ghost.x = hideGhostX;
        ghost.y = hideGhostY;
    }
}