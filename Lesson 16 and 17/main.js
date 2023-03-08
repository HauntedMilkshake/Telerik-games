'use strict'
const Game = new Phaser.Game(1120, 160, Phaser.AUTO, "", { preload, create, update });
let dude;
let ground;
function preload() {
    Game.load.spritesheet("dude", "assets/dude-red.288x40.9x1.png", 288 / 40, 9);
    Game.load.tilemap("map", "map/map.json", null, Phaser.Tilemap.TILED_JSON);
    Game.load.image("tileset", "map/tiles.png");
}

function create() {
    Game.stage.backgroundColor = "#aaa";
    createMap();
}

function createMap() {
    const map = Game.add.tilemap("map");
    map.addTilesetImage("tiles", "tileset");
    ground = map.createLayer("Tile Layer 1");
}
function createPlayer(){
    dude = Game.add.image(100, 20, "dude");
    dude.anchor.setTo(0.5);
    dude.animations.add("rightRun", [5, 6, 7, 8], 15, true);
    dude.animations.add("leftRun", [0, 1, 2, 3], 15, true);
    Game.physics.enable(dude);

}
function update() {

}
function movePlayer(){

}