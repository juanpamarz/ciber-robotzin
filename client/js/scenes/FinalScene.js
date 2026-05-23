import { GameState } from './GameState.js';
import { FONT_STYLES, PALETTE, drawBackground, drawPanel, createButton } from './theme.js';

export class FinalScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FinalScene' });
    }

    async create() {
        const state = GameState.load();
        const totalQuestions = 10;
        const medal = state.score >= 8 ? '🏆 Súper Ciberhéroe' : '🌟 Buen progreso';

        drawBackground(this);
        drawPanel(this, 500, 300, 860, 440);

        this.add.text(500, 120, '¡Juego terminado!', FONT_STYLES.title).setOrigin(0.5);
        this.add.text(500, 185, `${state.playerName || 'Aventurero'}: ${medal}`, FONT_STYLES.subtitle).setOrigin(0.5);
        this.add.text(500, 255, `Puntaje final: ${state.score} / ${totalQuestions}`, FONT_STYLES.body).setOrigin(0.5);

        const saveStatus = this.add.text(500, 320, 'Guardando puntaje...', {
            ...FONT_STYLES.hud,
            color: PALETTE.skyBlueDeep,
            align: 'center'
        }).setOrigin(0.5);

        const saved = await this.saveFinalScore(state);
        saveStatus.setText(saved ? '✅ Puntaje guardado' : '⚠️ No se pudo guardar el puntaje');
        saveStatus.setColor(saved ? PALETTE.success : PALETTE.error);

        createButton(this, 500, 430, 'Jugar de nuevo', () => {
            GameState.setScore(0);
            this.scene.start('LoginScene');
        }, PALETTE.skyBlueDeep);
    }

    async saveFinalScore(state) {
        try {
            const response = await fetch('/api/scores', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    playerName: state.playerName,
                    score: state.score
                })
            });

            return response.ok;
        } catch (_error) {
            return false;
        }
    }
}
