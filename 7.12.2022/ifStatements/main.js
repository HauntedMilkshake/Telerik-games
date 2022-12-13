'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.spritesheet("dude", "dude-pink.288x40.9x1.png", 288 / 9, 40);
}
    let alienGoingRight, alienGoingLeft, alienGoingDown, alienGoingUp;  
    let flagR = true, flagD = true, flagL = true , flagU = true; 

function create() {
    alienGoingRight = Game.add.sprite(16, 20, "dude");
    alienGoingRight.angle = 180;
    alienGoingRight.anchor.setTo(0.5, 0.5);
    alienGoingRight.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    alienGoingRight.animations.add("walkRight", [0, 1, 2, 3], 20, true);

    alienGoingLeft = Game.add.sprite(Game.width - 16, Game.height - 20, "dude");
    alienGoingLeft.anchor.setTo(0.5);
    alienGoingLeft.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    alienGoingLeft.animations.add("walkRight", [0, 1, 2, 3], 20, true);

    alienGoingDown = Game.add.sprite(Game.width - 16, 20, "dude");
    alienGoingDown.angle = 270;
    alienGoingDown.anchor.setTo(0.5);
    alienGoingDown.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    alienGoingDown.animations.add("walkRight", [0, 1, 2, 3], 20, true);

    alienGoingUp = Game.add.sprite(16, Game.height - 20, "dude");
    alienGoingUp.angle = 90
    alienGoingUp.anchor.setTo(0.5);
    alienGoingUp.animations.add("walkLeft", [5, 6, 7, 8], 20, true);
    alienGoingUp.animations.add("walkRight", [0, 1, 2, 3], 20, true);
}
let counter = 0
function update(){
   
    if(alienGoingRight.x >= 600 - 16){
        flagR = false;
    }else if(alienGoingRight.x <= 16){
        flagR = true;
    }

    if(flagR){
        alienGoingRight.play("walkRight");
        alienGoingRight.x += 3;
    }else{
        alienGoingRight.play("walkLeft");
        alienGoingRight.x -= 3;
    }
    
    if(alienGoingDown.y >= 600 - 16){
        flagD = false;
    }else if(alienGoingDown.y <= 16){
        flagD = true;
    }

    if(flagD){
        alienGoingDown.play("walkRight")
        alienGoingDown.y += 3;
    }else{
        alienGoingDown.play("walkLeft")
        alienGoingDown.y -= 3;
    }

    
    if(alienGoingLeft.x <= 16){
        flagL = false;
    }else if(alienGoingLeft.x >= 600 - 16){
        flagL = true;
    }

    if(flagL){
        alienGoingLeft.play("walkRight")
        alienGoingLeft.x -= 3;
    }else{
        alienGoingLeft.play("walkLeft")
        alienGoingLeft.x += 3;
    }


    if(alienGoingUp.y <= 16){
        flagU = false;
    }else if(alienGoingUp.y >= 600 - 16){
        flagU = true;
    }

    if(flagU){
        alienGoingUp.play("walkRight")
        alienGoingUp.y -= 3;
    }else{
        alienGoingUp.play("walkLeft")
        alienGoingUp.y += 3;
    }
}