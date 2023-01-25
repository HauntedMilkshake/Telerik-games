'use strict'

const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.spritesheet("dude", "dude-pink.288x40.9x1.png", 288 / 9, 40);
    Game.load.image("square", "Square_200x200.png");
}
    let alien1, alien2;
    let square
    let cursors
    let key_up, key_down, key_right, key_left;
function create() {

    
    //Game.stage.backgroundColor = '#FFFFFF'
    alien1 = Game.add.sprite(16, 20, "dude");
    //alien2 = Game.add.sprite(16, 20, "dude");
    
    alien1.anchor.setTo(0.5);
    alien1.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    alien1.animations.add("walkRight", [0, 1, 2, 3], 20, true);

    //alien2.anchor.setTo(0.5);
    //alien2.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    //alien2.animations.add("walkRight", [0, 1, 2, 3], 20, true);

    square = Game.add.image(Game.width / 2, Game.height / 2, "square");
    square.anchor.setTo(0.5)

    cursors = Game.input.keyboard.createCursorKeys();
    key_up = Game.input.keyboard.addKey(Phaser.Keyboard.W);
    key_down = Game.input.keyboard.addKey(Phaser.Keyboard.S);
    key_left = Game.input.keyboard.addKey(Phaser.Keyboard.A);
    key_right = Game.input.keyboard.addKey(Phaser.Keyboard.D);

   // Game.physics.enable(alien1, Phaser.Physics.ARCADE);
   // Game.physics.enable(square, Phaser.Physics.ARCADE);
    
}
function movePLayer1(){
    if(key_right.isDown){
        alien1.x ++;
        alien1.animations.play("walkLeft")
       }
       if(key_left.isDown){
        alien1.x --;
        alien1.animations.play("walkRight")
       }
       if(key_up.isDown){
        alien1.y--;
       }
       if(key_down.isDown){
        //Game.input.keyboard.isDown(Phaser.Keyboard.S) - druga variaciq na tov
        alien1.y++;
       }
       if(!(key_right.isDown || key_left.isDown || key_up.isDown || key_down.isDown)){
        alien1.frame = 4;
       }
}
function movePlayer2(){
    if(cursors.up.isDown){
        alien2.y --;
        alien2.animations.play("walkLeft")
       }
       
       if(cursors.down.isDown){
        alien2.y ++;
        alien2.animations.play("walkLeft")
       }
       
       if(cursors.left.isDown){
        alien2.x --;
        alien2.animations.play("walkRight")
       }
       
       if(cursors.right.isDown){
        alien2.x ++;
        alien2.animations.play("walkLeft")
       }
       if(!(cursors.right.isDown || cursors.left.isDown || cursors.up.isDown || cursors.down.isDown)){
        alien2.frame = 4;
    }
}

function update(){
   movePLayer1();
  // movePlayer2();
   teleportAlien1();    
  // teleportAlien2();
   checkForCollision();
    
}
function teleportAlien1(){
    if(alien1.x > Game.width - alien1.width / 2){
        alien1.x = alien1.width;
    }else if(alien1.x < alien1.width / 2){
        alien1.x = Game.width - alien1.width / 2;
    }

    if(alien1.y > Game.height - alien1.height / 2){
        alien1.y = alien1.height;
    }else if(alien1.y < alien1.height / 2){
        alien1.y = Game.height - alien1.height / 2;
    }
}
function teleportAlien2(){
    
    if(alien2.x > Game.width - alien2.width / 2){
        alien2.x = alien2.width;
    }else if(alien2.x < alien2.width / 2){
        alien2.x = Game.width - alien2.width / 2;
    }

    if(alien2.y > Game.height - alien2.height / 2){
        alien2.y = alien2.height;
    }else if(alien2.y < alien2.height / 2){
        alien2.y = Game.height - alien2.height / 2;
    }
}
function checkForCollision(){
        // tova go tafih ot edin ot na vqra primerite i mislq che sprqmo anchora trqbva da se preceni kolko da se vadi ili subira 
        // 100 e polovinata ot razmera na pravougulnika
       // if(alien1.y + alien1.height / 2 > square.y - square.height / 2 && alien1.y - alien1.height / 2 < square.y + square.height / 2 && alien1.x + alien1.width / 2 > square.x - square.width / 2 && alien1.x - alien1.width / 2 < square.x + square.width / 2){
        //    console.log("sblusul")
        //}
        //console.log(Math.sqrt(Math.pow(square.x - alien1.x, 2) + Math.pow(square.y - alien1.y, 2)))
        //console.log(Math.pow(square.x - alien1.x, 2))
        //
        if(Math.sqrt(Math.pow(square.x - alien1.x, 2) + Math.pow(square.y - alien1.y, 2)) <= 116){
            console.log("sblusuk")
        }
        
}
