'use strict'

const Game = new Phaser.Game(800, 800, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.image("background", "101893520_254111245821574_3053531214116814848_n.jpg")
    Game.load.spritesheet("dino", "dino-yellow.576x24.24x1.png", 576 / 24, 24);  
    Game.load.image("platform", "platform.png");
    Game.load.spritesheet("coin", "coin.png", 1198 / 5, 704/ 2)
}
//let platform1, platform2, platform3
//let coin1, coin2, coin3
//let platforms = [3]

let coins = [];
let numberOfCoins = 5;
let platforms = []
let numberOfPlatforms = 4;

let dino
let background
let key_up, key_right, key_left;
function create() {
    createBackground();
    Game.physics.startSystem(Phaser.Physics.ARCADE)
    Game.physics.arcade.gravity.y = 200
       
    createDino();
    createPlatforms();
    createCoins();


    Game.physics.enable(dino, Phaser.Physics.ARCADE)

    createPlatformPhysics();

    key_up = Game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    key_left = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    key_right = Game.input.keyboard.addKey(Phaser.Keyboard.D);
    
    
    
}

function createDino(){
    
    dino = Game.add.sprite(50, 60, "dino");
    dino.anchor.setTo(0.5);
    dino.scale.set(1.5)
    
    dino.animations.add("walk", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 15, true);
    dino.animations.add("idle", [0], 15, true)
    dino.animations.add("jump", [4], 15, true)
    
}
/*
function createPlatforms(){
    let platformScale = 0.25
    let platformAnchor = 0.5
    platform1 = Game.add.sprite(Game.width / 2, Game.height / 2, "platform");
    platform1.scale.setTo(platformScale );
    platform1.anchor.setTo(platformAnchor);
    
    platform2 = Game.add.sprite(100, 100, "platform");
    platform2.scale.setTo(platformScale);
    platform2.anchor.setTo(platformAnchor);
    
    platform3 = Game.add.sprite(600, 600, "platform");
    platform3.scale.setTo(platformScale);
    platform3.anchor.setTo(platformAnchor)
}/*
function createCoins(){
    let coinScale = 0.25
    let coinAnchor

    coin1 = Game.add.sprite(Game.width / 2 + 150, Game.height / 2 + 100, "coin");
    coin1.animations.add("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15, true)
    coin1.scale.setTo(coinScale)
    coin1.animations.play("idle")
    
    coin2 = Game.add.sprite(100 + 150, 100 + 100, "coin");
    coin2.animations.add("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15, true)
    coin2.scale.setTo(coinScale)
    coin2.animations.play("idle")

    coin3 = Game.add.sprite(100, 400, "coin");
    coin3.animations.add("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15, true)
    coin3.scale.setTo(coinScale)
    coin3.animations.play("idle")


}
*/

function createPlatforms(){
    let x = 100;
    let y = 150;
    let platformScale = 0.25
    let platformAnchor = 0.5
    for(let i = 0; i < numberOfPlatforms; i++){
        platforms[i] = Game.add.sprite(x, y, "platform")
        platforms[i].scale.setTo(platformScale)
        platforms[i].anchor.setTo(platformAnchor)
        x += 300;
        if(y == 600){
            y -= 150
        }else{
            y += 150
        }
    }
}
function createPlatformPhysics(){
    for(let i = 0; i < numberOfPlatforms; i++){
        Game.physics.enable(platforms[i], Phaser.Physics.ARCADE)
        platforms[i].body.immovable = true;
        platforms[i].body.allowGravity = false;
    }
}
function createCoins(){
    let x = 150;
    let y = 150;
    let coinScale = 0.25;
    let coinAnchor = 0.5;
    for(let i = 0; i < numberOfCoins; i++){
        coins[i] = Game.add.sprite(x, y, "coin");
        coins[i].animations.add("idle", [0,1,2,3,4,5,6,7,8,9], 15, true)
        coins[i].animations.play("idle")
        coins[i].scale.setTo(coinScale);
        coins[i].anchor.setTo(coinAnchor)
        x += 200;
        y += 200;
    }
}
function createBackground(){
    background = Game.add.image(Game.width / 2, Game.height / 2, "background");
    background.scale.setTo(Game.width / 2048, Game.height / 1024)
    background.anchor.setTo(0.5)

}

function update(){
    moveDino();
    teleportdino();    
    for(let i = 0; i < numberOfPlatforms; i++){
        Game.physics.arcade.collide(dino, platforms[i])
    }
}

function teleportdino(){
    if(dino.x > Game.width - dino.width / 2){
        dino.x = dino.width;
    }else if(dino.x < dino.width / 2){
        dino.x = Game.width - dino.width / 2;
    }
    
    if(dino.y > Game.height - dino.height / 2){
        dino.y = dino.height;
    }else if(dino.y < dino.height / 2){
        dino.y = Game.height - dino.height / 2;
    }
}
function moveDino(){
    if(key_right.isDown){
        dino.body.velocity.x = 100;
        dino.scale.setTo(1.5, 1.5)
        dino.animations.play("walk")
    }
    if(key_left.isDown){
        dino.body.velocity.x = -100;         
        dino.scale.setTo(-1.5, 1.5)
        dino.animations.play("walk")
    }
   
    for(let i = 0; i < numberOfPlatforms; i++){
        if(key_up.isDown  && ( Game.physics.arcade.collide(dino, platforms[i]))){
            dino.body.velocity.y = -250;
            dino.animations.play("jump")
            
        }
    }
    
    if(!(key_right.isDown || key_left.isDown || key_up.isDown)){
        dino.animations.play("idle")
        dino.body.velocity.x = 0;   
    }
}
