import { buildLevelScene } from './config.js';

export class Nivel3Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Nivel3Scene' });
    }

    init(data) {
        this.progress = { 
            score: data?.score ?? 0, 
            currentQuestion: data?.currentQuestion ?? 0 
        };
        this.playerName = data?.playerName ?? 'Aventurero';
    }

    create() {
        buildLevelScene(this, 'Nivel3Scene', this.playerName);
    }
}
