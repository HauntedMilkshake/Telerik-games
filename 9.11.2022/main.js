'use strict'
const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "", { preload, create })
console.log(document); // document e html faila ni 
function preload() {
    Game.load.image("background", "background.png");
}

function create() {
    
    let nebeBottomRight = Game.add.sprite(Game.width / 2, Game.height / 2, "background"); // responsive design 
    nebeBottomRight.scale.setTo(0.25);
    nebeBottomRight.anchor.setTo(1);
    
    let nebe1BottomLeft = Game.add.sprite(Game.width / 2, Game.height / 2, "background");
    nebe1BottomLeft.scale.setTo(0.25);
    nebe1BottomLeft.anchor.setTo(1, 0);
    
    let nebe2TopRight = Game.add.sprite(Game.width / 2, Game.height / 2, "background");
    nebe2TopRight.scale.setTo(0.25);
    nebe2TopRight.anchor.setTo(0, 1);//tochkata sprqmo koqto pozicionirame 0,0 gore lqvo na snimkata 1,1 dolu dqsno 0,1 gore dqsno 1,0 dolu lqvo
    
    let nebe3TopLeft = Game.add.sprite(Game.width / 2, Game.height / 2, "background");
    nebe3TopLeft.scale.setTo(0.25);   
    nebe3TopLeft.anchor.setTo(0, 0);
    
    
   /*
   Game.add.sprite(0, 0, "background").scale.setTo(0.25);
   Game.add.sprite(400, 0, "background").scale.setTo(0.25);// tuka slagame na 1/4 shirianta ot originalnata snimka kato x 
   Game.add.sprite(0, 400, "background").scale.setTo(0.25);//tuka na 1/4 ot visochinata kato y 
   Game.add.sprite(400, 400, "background").scale.setTo(0.25);//na scale.setTo moje da ima otricatelna stoinist za da q flipnem 
   */
}
