import { addBackground, addButton, addPanel } from './config.js';

export class LoginScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoginScene' });
    }

    create() {
        addBackground(this);
        addPanel(this, 480, 255, 760, 330);

        this.add.text(480, 110, '¡Hola! Soy Ciber Robotzin 🤖', {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '40px',
            fontStyle: 'bold',
            color: '#16324f',
            align: 'center'
        }).setOrigin(0.5);

        this.add.text(480, 220, 'Vamos a aprender a navegar con seguridad mientras jugamos tres retos súper cortos.', {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '28px',
            color: '#16324f',
            align: 'center',
            wordWrap: { width: 620 }
        }).setOrigin(0.5);

        this.add.text(480, 305, 'Tu misión: elegir la opción más segura para ayudar a Robotzin.', {
            fontFamily: 'Trebuchet MS, Arial, sans-serif',
            fontSize: '24px',
            color: '#16324f',
            align: 'center',
            wordWrap: { width: 620 }
        }).setOrigin(0.5);

        addButton(this, 480, 395, 280, 70, 'Comenzar aventura', () => {
            this.scene.start('Nivel1Scene', { score: 0 });
        }, 0xcff6c8);
    }
}
