import { addColorfulBackground, addButton, addPanel, addLargeTitle } from './config.js';

export class FinalScene extends Phaser.Scene {
    constructor() {
        super({ key: 'FinalScene' });
    }

    init(data) {
        this.progress = { score: data?.score ?? 0 };
        this.playerName = data?.playerName ?? 'Aventurero';
    }

    create() {
        const score = this.progress.score;
        const total = 10; // 3 + 3 + 4 questions
        const earnedMedal = score >= 8;
        const summary = earnedMedal
            ? '¡Increíble! Eres un verdadero CIBERHÉROE. Ayudaste a todos los robots a tomar decisiones seguras en internet.'
            : 'Muy bien. Cada intento te ayuda a tomar decisiones digitales más seguras. ¡Vuelve a intentar!';

        addColorfulBackground(this);
        addPanel(this, 500, 300, 820, 420);

        // Add decorative robots
        this.add.text(120, 150, '🤖', {
            fontFamily: 'Arial',
            fontSize: '80px'
        }).setOrigin(0.5);

        this.add.text(880, 150, '🤖', {
            fontFamily: 'Arial',
            fontSize: '80px'
        }).setOrigin(0.5);

        // Title
        addLargeTitle(this, 500, 70, '¡MISIÓN COMPLETADA!');

        // Player name with celebration
        this.add.text(500, 140, `¡Felicidades, ${this.playerName}!`, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#FF006E',
            align: 'center'
        }).setOrigin(0.5);

        // Medal or achievement
        const medal = earnedMedal ? '🏆 ¡SUPERHÉROE DIGITAL!' : '🌟 ¡BUEN TRABAJO!';
        this.add.text(500, 190, medal, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '28px',
            fontWeight: '700',
            color: '#00D9FF',
            align: 'center'
        }).setOrigin(0.5);

        // Score display
        this.add.text(500, 250, `📊 Obtuviste ${score} de ${total} puntos`, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#9D4EDD',
            align: 'center'
        }).setOrigin(0.5);

        // Summary
        this.add.text(500, 320, summary, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '18px',
            color: '#1a1a1a',
            align: 'center',
            wordWrap: { width: 700 }
        }).setOrigin(0.5);

        // Play again button
        addButton(this, 500, 420, 280, 70, '🎮 ¡Jugar de nuevo!', () => {
            this.scene.start('StartScene');
        }, 0x00D9FF);
    }
}
