import { GameState } from './GameState.js';
import { FONT_STYLES, PALETTE, drawBackground, drawPanel, createButton } from './theme.js';

export class LoginScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoginScene' });
        this.playerName = '';
    }

    create() {
        const currentState = GameState.load();
        this.playerName = currentState.playerName;

        drawBackground(this);
        drawPanel(this, 500, 300, 820, 420);

        this.add.text(500, 130, 'Ciber Robotzin', FONT_STYLES.title).setOrigin(0.5);
        this.add.text(500, 190, 'Escribe tu nombre para comenzar', FONT_STYLES.subtitle).setOrigin(0.5);

        const inputBox = this.add.rectangle(500, 270, 460, 68, Phaser.Display.Color.HexStringToColor(PALETTE.white).color, 1);
        inputBox.setStrokeStyle(4, Phaser.Display.Color.HexStringToColor(PALETTE.skyBlue).color);

        const inputText = this.add.text(500, 270, this.playerName, {
            ...FONT_STYLES.body,
            fontSize: '28px',
            wordWrap: { width: 420 }
        }).setOrigin(0.5);

        this.input.keyboard.on('keydown', (event) => {
            if (event.key === 'Backspace') {
                this.playerName = this.playerName.slice(0, -1);
            } else if (event.key === 'Enter') {
                this.startGame();
                return;
            } else if (event.key.length === 1 && this.playerName.length < 18) {
                this.playerName += event.key;
            }

            inputText.setText(this.playerName);
        });

        createButton(this, 500, 370, 'Comenzar Nivel 1', () => this.startGame(), PALETTE.brightOrange);

        this.add.text(500, 460, 'Usa Enter o el botón para avanzar', {
            ...FONT_STYLES.hud,
            color: PALETTE.skyBlueDeep
        }).setOrigin(0.5);
    }

    startGame() {
        const cleanName = this.playerName.trim();
        if (!cleanName) {
            return;
        }

        GameState.setPlayerName(cleanName);
        GameState.setScore(0);
        this.scene.start('Nivel1Scene');
    }
}
