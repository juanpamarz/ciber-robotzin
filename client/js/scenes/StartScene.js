import { addColorfulBackground, addButton, addPanel, addLargeTitle, addBodyText } from './config.js';

export class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
        this.playerName = '';
    }

    create() {
        addColorfulBackground(this);
        addPanel(this, 500, 300, 880, 480);

        // Title
        this.add.text(500, 60, '🌐 CIBERSEGURIDAD', {
            fontFamily: "'Press Start 2P', cursive",
            fontSize: '28px',
            color: '#FF006E',
            align: 'center'
        }).setOrigin(0.5);

        // Cybersecurity explanation
        this.add.text(500, 130, '¿Por qué es importante la ciberseguridad?', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#00D9FF',
            align: 'center'
        }).setOrigin(0.5);

        const explanationText = 'La ciberseguridad protege tu información personal en internet. Te enseña a reconocer peligros en línea, mantener tus contraseñas seguras y ser respetuoso con otros. ¡Internet es increíble cuando sabes cómo usarlo de manera segura!';

        this.add.text(500, 210, explanationText, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '18px',
            color: '#1a1a1a',
            align: 'center',
            wordWrap: { width: 800 }
        }).setOrigin(0.5);

        // Name input prompt
        this.add.text(500, 310, '¿Cuál es tu nombre?', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            color: '#9D4EDD',
            align: 'center'
        }).setOrigin(0.5);

        // Input field simulation
        const inputBox = this.add.rectangle(500, 360, 300, 50, 0xFFFFFF, 1);
        inputBox.setStrokeStyle(3, 0xFF006E);

        const inputText = this.add.text(500, 360, '', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '24px',
            fontWeight: '700',
            color: '#1a1a1a',
            align: 'center'
        }).setOrigin(0.5);

        // Focus on input
        this.input.keyboard.on('keydown', (event) => {
            const key = event.key;
            
            if (key === 'Backspace') {
                this.playerName = this.playerName.slice(0, -1);
            } else if (key === 'Enter') {
                if (this.playerName.trim().length > 0) {
                    this.scene.start('LoginScene', { playerName: this.playerName });
                }
            } else if (key.length === 1 && this.playerName.length < 20) {
                this.playerName += key;
            }
            
            inputText.setText(this.playerName);
        });

        // Play button
        addButton(this, 500, 450, 300, 60, `¡Vamos a jugar!`, () => {
            if (this.playerName.trim().length > 0) {
                this.scene.start('LoginScene', { playerName: this.playerName });
            }
        }, 0x00D9FF);

        this.add.text(500, 520, 'Escribe tu nombre y presiona Enter o el botón', {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '14px',
            color: '#666',
            align: 'center'
        }).setOrigin(0.5);
    }
}
