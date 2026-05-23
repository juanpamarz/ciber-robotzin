import { GAME_SETTINGS } from './config.js';
import { LoginScene } from './LoginScene.js';
import { Nivel1Scene } from './Nivel1Scene.js';
import { Nivel2Scene } from './Nivel2Scene.js';
import { Nivel3Scene } from './Nivel3Scene.js';
import { FinalScene } from './FinalScene.js';

const config = {
    ...GAME_SETTINGS,
    scene: [LoginScene, Nivel1Scene, Nivel2Scene, Nivel3Scene, FinalScene]
};

new Phaser.Game(config);
