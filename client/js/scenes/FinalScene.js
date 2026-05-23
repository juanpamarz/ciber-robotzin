import { addBackground, addButton, addPanel } from './config.js';

export class FinalScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FinalScene' });
    }

    init(data) {
        this.progress = { score: data?.score ?? 0 };
    }

    create() {
        const score = this.progress.score;
        const total = 3;
        const earnedMedal = score === total;
        const summary = earnedMedal
            ? '¡Increíble! Ayudaste a Robotzin a cuidar cada paso en internet.'
            : 'Muy bien. Cada intento te ayuda a tomar decisiones digitales más seguras.';

        addBackground(this);
        addPanel(this, 480, 250, 760, 340);

        this.add.text(480, 105, 'Misión completada', {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '42px',
            fontStyle: 'bold',
            color: '#16324f'
        }).setOrigin(0.5);

        this.add.text(480, 185, earnedMedal ? '🏆 Súper ciberhéroe' : '🌟 Buen trabajo', {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '34px',
            color: '#16324f'
        }).setOrigin(0.5);

        this.add.text(480, 255, `Obtuviste ${score} de ${total} puntos.`, {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '28px',
            color: '#16324f'
        }).setOrigin(0.5);

        this.add.text(480, 320, summary, {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '24px',
            color: '#16324f',
            align: 'center',
            wordWrap: { width: 620 }
        }).setOrigin(0.5);

        addButton(this, 480, 405, 260, 68, 'Jugar otra vez', () => {
            this.scene.start('LoginScene');
        }, 0xcff6c8);
    }
}
