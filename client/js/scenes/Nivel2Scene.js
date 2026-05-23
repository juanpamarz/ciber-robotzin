import { buildLevelScene } from './config.js';

export class Nivel2Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Nivel2Scene' });
    }

    init(data) {
        this.progress = { 
            score: data?.score ?? 0, 
            currentQuestion: data?.currentQuestion ?? 0 
        };
        this.playerName = data?.playerName ?? 'Aventurero';
    }

    create() {
        buildLevelScene(this, 'Nivel2Scene', this.playerName);
    }
}
