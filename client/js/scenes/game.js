// Importa tus escenas (asegúrate de que los nombres coincidan)
import { LoginScene } from './scenes/LoginScene.js';
import { Nivel1Scene } from './scenes/Nivel1Scene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    // Aquí registramos las escenas
    scene: [LoginScene, Nivel1Scene]
};

const game = new Phaser.Game(config);