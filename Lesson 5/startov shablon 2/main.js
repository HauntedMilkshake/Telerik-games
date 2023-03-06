'use strict'
const Game = new Phaser.Game(600, 600, Phaser.AUTO, "", { preload, create, update})

function preload() {
    Game.load.spritesheet("dude", "dude-pink.288x40.9x1.png", 288 / 9, 40);
}
    let alien; //alienGoingLeft, alienGoingDown, alienGoingUp;  
function create() {
    alien = Game.add.sprite(16, 20, "dude");
    alien.angle = 180;
    alien.anchor.setTo(0.5, 0.5);
    alien.animations.add("walk", [1, 2, 3], 20, true).play();
    alien.animations.add("idle", [4], false);
    /*
    alienGoingLeft = Game.add.sprite(Game.width - 16, Game.height - 20, "dude");
    alienGoingLeft.anchor.setTo(0.5);
    alienGoingLeft. sanimations.add("walkLeft", [1, 2, 3], 20, true).play();

    alienGoingDown = Game.add.sprite(Game.width - 16, 0, "dude");
    alienGoingDown.angle = 270;
    alienGoingDown.anchor.setTo(0.5);
    alienGoingDown.animations.add("walkDown", [1, 2, 3], 20, true).play();

    alienGoingUp = Game.add.sprite(16, Game.height - 20, "dude");
    alienGoingUp.angle = 90
    alienGoingUp.anchor.setTo(0.5);
    alienGoingUp.animations.add("walkUp", [1, 2, 3], 20, true).play();
    */
}

function update(){
    
    
    if(alien.x  >= 600 - 16){
        //alien.animations.play("idle")
        alien.angle = - 90;
        if(alien.y >= 600 - 16){
            //alien.animations.play("idle");
            alien.angle = 0;
            if(alien.x <= 16){
                //alien.animations.play("idle");
                alien.angle = 90;
            }else{
                //alien.animations.play("walk")
                alien.x -= 1;
            }
        }else{
            //alien.animations.play("walk")
            alien.y += 1;
        }
    }else{
        //alien.animations.play("walk");
        alien.x += 1;
        
    }
    /*
    if(alienGoingDown.y != 600 - 20){
        alienGoingDown.y ++;
    }else{
        alienGoingDown.frame = 4;
    }
    if(alienGoingLeft.x != 16){
        alienGoingLeft.x -= 1;
        
    }else{
        alienGoingLeft.frame = 4;
    }
    if(alienGoingUp.y !=  20){
        alienGoingUp.y -= 1;

    }else{
        alienGoingUp.frame = 4;
    }
    */
}
function circleWindow(let player){
    
    
}
