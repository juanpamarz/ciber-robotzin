export class LoginScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoginScene' });
    }

    create() {
        this.add.text(250, 250, '¡Login Scene Funciona!', { fontSize: '30px', fill: '#ffffff' });
    }
}