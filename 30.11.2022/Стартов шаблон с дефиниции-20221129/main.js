'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.spritesheet("dude", "dude-pink.288x40.9x1.png", 288 / 9, 40);
}
    let alienGoingRight, alienGoingLeft, alienGoingDown, alienGoingUp;  
function create() {
    alienGoingRight = Game.add.sprite(16, 20, "dude");
    alienGoingRight.angle = 180;
    alienGoingRight.anchor.setTo(0.5, 0.5);
    alienGoingRight.animations.add("walkRight", [1, 2, 3], 20, true).play();

    alienGoingLeft = Game.add.sprite(Game.width - 16, Game.height - 20, "dude");
    alienGoingLeft.anchor.setTo(0.5);
    alienGoingLeft.animations.add("walkLeft", [1, 2, 3], 20, true).play();

    alienGoingDown = Game.add.sprite(Game.width - 20, 0, "dude");
    alienGoingDown.angle = 270;
    alienGoingDown.anchor.setTo(0.5);
    alienGoingDown.animations.add("walkDown", [1, 2, 3], 20, true).play();

    alienGoingUp = Game.add.sprite(16, Game.height - 20, "dude");
    alienGoingUp.angle = 90
    alienGoingUp.anchor.setTo(0.5);
    alienGoingUp.animations.add("walkUp", [1, 2, 3], 20, true).play();
}

function update(){
    
    if(alienGoingRight.x < 600 - 16){
        alienGoingRight.x ++;
       
    }else{
        alienGoingRight.frame = 4;
    }
    if(alienGoingDown.y < 600 - 20){
        alienGoingDown.y ++;
    }else{
        alienGoingDown.frame = 4;
    }
    if(alienGoingLeft.x > 16){
        alienGoingLeft.x -= 1;
        
    }else{
        alienGoingLeft.frame = 4;
    }
    if(alienGoingUp.y > 20){
        alienGoingUp.y -= 1;

    }else{
        alienGoingUp.frame = 4;
    }
}