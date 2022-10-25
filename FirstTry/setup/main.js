const Game = new Phaser.Game(650, 650, Phaser.AUTO, 'GameCanvas', { create })

function create() {
    Game.stage.backgroundColor = '#000000'
    Game.scale.pageAlignHorizontally = true

    Game.add.text(Game.width / 2, Game.height / 2, 'Dosta sum gladen', { font: '100px', align: 'center', fill: '#fff' }).anchor.setTo(0.5)
}