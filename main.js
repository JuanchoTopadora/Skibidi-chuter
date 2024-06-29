import Game from './scenes/Game.js';

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Game]
};

const game = new Phaser.Game(config);
