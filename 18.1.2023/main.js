'use strict'

const Game = new Phaser.Game(800, 800, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.image("background", "101893520_254111245821574_3053531214116814848_n.jpg")
    Game.load.spritesheet("dino", "dino-yellow.576x24.24x1.png", 576 / 24, 24);  
    Game.load.image("platform", "platform.png");
    Game.load.spritesheet("coin", "coin.png", 1198 / 5, 704/ 2)
}
    let platform1, platform2, platform3
    let coin1, coin2, coin3
    //let platforms = [3]
    let dino
    let background
    let cursors
    let key_up, key_down, key_right, key_left;
function create() {
    createBackground();
    Game.physics.startSystem(Phaser.Physics.ARCADE)
    Game.physics.arcade.gravity.y = 50   
    createDino();
    createPlatforms();
    createCoins(); 
    Game.physics.enable([dino, platform1, platform2, platform3], Phaser.Physics.ARCADE)
    platform1.body.allowGravity = false
    platform2.body.allowGravity = false
    platform3.body.allowGravity = false
    platform1.body.immovable = true
    platform2.body.immovable = true
    platform3.body.immovable = true
    cursors = Game.input.keyboard.createCursorKeys();
    key_up = Game.input.keyboard.addKey(Phaser.Keyboard.W);
    key_down = Game.input.keyboard.addKey(Phaser.Keyboard.S);
    key_left = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    key_right = Game.input.keyboard.addKey(Phaser.Keyboard.D);


    
}

function createDino(){
    
    dino = Game.add.sprite(50, 60, "dino");
    dino.anchor.setTo(0.5);
    dino.scale.set(1.5)
    dino.animations.add("walk", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 15, true);

}
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
}
function createCoins(){
    let coinScale = 0.25
    let coinAnchor
    //Game.physics.enable(coin1);
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
function createBackground(){
    background = Game.add.image(Game.width / 2, Game.height / 2, "background");
    background.scale.setTo(Game.width / 2048, Game.height / 1024)
    background.anchor.setTo(0.5)

}

function update(){
    moveDino();
    teleportdino();    
    Game.physics.arcade.collide(dino, platform1)
    Game.physics.arcade.collide(dino, platform2)
    Game.physics.arcade.collide(dino, platform3)
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
        dino.x ++;
        dino.scale.setTo(1.5, 1.5)
        dino.animations.play("walk")
        }
        if(key_left.isDown){
        dino.x --;
        dino.scale.setTo(-1.5, 1.5)
        dino.animations.play("walk")
        }
        /*
        if(key_up.isDown){
        dino.y--;
        }
        if(key_down.isDown){
        //Game.input.keyboard.isDown(Phaser.Keyboard.S) - druga variaciq na tov
        dino.y++;
        }
        */
        if(!(key_right.isDown || key_left.isDown || key_up.isDown || key_down.isDown)){
        dino.frame = 4;
        }
}
