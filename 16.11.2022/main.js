'use strict'


const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "", { preload, create, update})

function preload() {
    //game.load.image("moon", "white.jpg");
    game.load.spritesheet("alien", "alien.2096x786.8x3.png", 2096 / 8, 786 / 3 );
}
//let image
let alien;
function create() {
    //image = game.add.sprite(0, 0, 'moon');
    //image.scale.setTo(0.1)
    alien = game.add.sprite(0, 0, "alien");
    alien.animations.add("walk", [], 60, true).play();
    //alien.frame = 2;
    /*
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(image, Phaser.Physics.ARCADE);
      This gets it moving
    image.body.velocity.setTo(250, 250);
      This makes the game world bounce-able
    image.body.collideWorldBounds = true;
      This sets the image bounce energy for the horizontal  and vertical vectors (as an x,y point). "1" is 100% energy return
    image.body.bounce.set(0.8);
    image.body.gravity.set(0);
    */
}

function update(){
    //alien.frame++;
/*
    image.x += 1;    
    if(image.x == 600 - 108){
        image.x = 0;
    }
*/
// mestim kartinka do kraq na ekrana sled tova 
}