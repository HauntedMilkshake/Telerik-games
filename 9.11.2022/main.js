'use strict'

const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "", { preload, create })
//console.log(document); // document e html faila ni 
function preload() {
    Game.load.image("background", "background.png");
    Game.load.image("dumbbell", "dumbbell.png");
}

function create() {
    Game.add.sprite(0, 0, "background");

    let dumbbellTopLeft = Game.add.sprite(0, 0, "dumbbell");
    dumbbellTopLeft.scale.setTo(0.5);

    let dumbellMiddle = Game.add.sprite(Game.width / 2, Game.height / 2, "dumbbell");
    dumbellMiddle.scale.setTo(1);
    dumbellMiddle.anchor.setTo(0.5);

    let dumbellTopRight = Game.add.sprite(Game.width, 0, "dumbbell");
    dumbellTopRight.scale.setTo(0.5);
    dumbellTopRight.anchor.setTo(1, 0);

    let dumbellBottomLeft = Game.add.sprite(0, Game.height, "dumbbell");
    dumbellBottomLeft.scale.setTo(0.5);
    dumbellBottomLeft.anchor.setTo(0, 1);

    let dumbellBottomRight = Game.add.sprite(Game.width, Game.height, "dumbbell");
    dumbellBottomRight.scale.setTo(0.5);
    dumbellBottomRight.anchor.setTo(1,1);


    //.anchor.setTo() raboti po sledniq nachin: priema 2 parametura za x i y. Te ni pokazvat sprqmo koq tochka ot snimkata shte q risuvame
    // 0,0 risuvame q ot gorniq lqv ugul 
    // 1,0 premestili sme do kraq na snimkata po x horizontal, no ne na y i q risuvame ot gorniq desen ugul 
    // 0,1 premestili sme do kraq na snimkata po y vertikal, no ne na x i q risuvame ot dolniq lqv ugul 
    // 0.5 , 0.5 premestili sme do sredata na snimkata i q risuvame ot tam 
    /*
    let nebeBottomRight = Game.add.sprite(Game.width / 2, Game.height / 2, "background"); // responsive design 
    nebeBottomRight.scale.setTo(0.25);
    nebeBottomRight.anchor.setTo(1);
    
    let nebe1BottomLeft = Game.add.sprite(Game.width / 2, Game.height / 2, "background");
    nebe1BottomLeft.scale.setTo(0.25);
    nebe1BottomLeft.anchor.setTo(1, 0);
    
    let nebe2TopRight = Game.add.sprite(Game.width / 2, Game.height / 2, "background");
    nebe2TopRight.scale.setTo(0.25);
    nebe2TopRight.anchor.setTo(0, 1);//tochkata sprqmo koqto pozicionirame 0,0 gore lqvo na snimkata 1,1 dolu dqsno 0,1 dolu lqvo 1,0 gore dqsno
    //tochkata sprqmo koqto pozicionirame
    
    let nebe3TopLeft = Game.add.sprite(Game.width / 2, Game.height / 2, "background");
    nebe3TopLeft.scale.setTo(0.25);   
    nebe3TopLeft.anchor.setTo(0, 0);
    */
    
   /*
   Game.add.sprite(0, 0, "background").scale.setTo(0.25);
   Game.add.sprite(400, 0, "background").scale.setTo(0.25);// tuka slagame na 1/4 shirianta ot originalnata snimka kato x 
   Game.add.sprite(0, 400, "background").scale.setTo(0.25);//tuka na 1/4 ot visochinata kato y 
   Game.add.sprite(400, 400, "background").scale.setTo(0.25);//na scale.setTo moje da ima otricatelna stoinist za da q flipnem 
   */
}
