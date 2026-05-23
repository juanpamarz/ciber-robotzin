import { addColorfulBackground, addButton, addPanel, addLargeTitle, addBodyText } from './config.js';

export class LoginScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoginScene' });
    }

    init(data) {
        this.playerName = data?.playerName ?? 'Aventurero';
    }

    create() {
        addColorfulBackground(this);
        addPanel(this, 500, 300, 820, 400);

        // Large title with Zelda-like font
        addLargeTitle(this, 500, 80, '¡Hola! Soy Ciber Robotzin');

        // Add emoji robots around
        this.add.text(150, 200, '🤖', {
            fontFamily: 'Arial',
            fontSize: '60px'
        }).setOrigin(0.5);

        this.add.text(850, 200, '🤖', {
            fontFamily: 'Arial',
            fontSize: '60px'
        }).setOrigin(0.5);

        // Subtitle with current player
        this.add.text(500, 170, `¡Bienvenido, ${this.playerName}!`, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#00D9FF',
            align: 'center'
        }).setOrigin(0.5);

        // Main message
        this.add.text(500, 260, '¿Estás listo para una aventura épica?', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            color: '#9D4EDD',
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(500, 310, 'Vamos a aprender a navegar con seguridad en internet mientras ayudas a robots a tomar buenas decisiones digitales.', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '18px',
            color: '#1a1a1a',
            align: 'center',
            wordWrap: { width: 700 }
        }).setOrigin(0.5);

        this.add.text(500, 380, '⚠️ Tu misión: elegir la opción más segura en cada reto.', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '18px',
            fontWeight: '700',
            color: '#FF006E',
            align: 'center',
            wordWrap: { width: 700 }
        }).setOrigin(0.5);

        // Play button
        addButton(this, 500, 470, 280, 70, '🚀 ¡Comenzar aventura!', () => {
            this.scene.start('Nivel1Scene', { score: 0, currentQuestion: 0, playerName: this.playerName });
        }, 0xFFD60A);
    }
}
