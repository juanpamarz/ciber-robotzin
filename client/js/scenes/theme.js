export const PALETTE = {
    skyBlue: '#4FC3F7',
    skyBlueSoft: '#EAF6FF',
    skyBlueDeep: '#0288D1',
    brightOrange: '#FF8C00',
    brightOrangeSoft: '#FFE6CC',
    white: '#FFFFFF',
    textDark: '#1B2A3A',
    success: '#2E7D32',
    error: '#C62828'
};

export const CAMERA_CONFIG = {
    zoom: 1,
    roundPixels: true,
    backgroundColor: PALETTE.skyBlueSoft
};

export const FONT_STYLES = {
    title: {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '44px',
        fontStyle: 'bold',
        color: PALETTE.brightOrange
    },
    subtitle: {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '30px',
        fontStyle: 'bold',
        color: PALETTE.skyBlueDeep
    },
    body: {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '24px',
        color: PALETTE.textDark,
        align: 'center',
        wordWrap: { width: 760 }
    },
    button: {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '24px',
        fontStyle: 'bold',
        color: '#FFFFFF',
        align: 'center',
        wordWrap: { width: 620 }
    },
    hud: {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '20px',
        fontStyle: 'bold',
        color: PALETTE.textDark
    }
};

export function configureCamera(scene) {
    scene.cameras.main.setZoom(CAMERA_CONFIG.zoom);
    scene.cameras.main.setRoundPixels(CAMERA_CONFIG.roundPixels);
    scene.cameras.main.setBackgroundColor(CAMERA_CONFIG.backgroundColor);
}

export function drawBackground(scene) {
    configureCamera(scene);
    scene.add.rectangle(500, 300, 1000, 600, Phaser.Display.Color.HexStringToColor(PALETTE.skyBlueSoft).color, 1);
    scene.add.circle(100, 100, 75, Phaser.Display.Color.HexStringToColor(PALETTE.skyBlue).color, 0.2);
    scene.add.circle(900, 120, 90, Phaser.Display.Color.HexStringToColor(PALETTE.brightOrange).color, 0.16);
    scene.add.circle(860, 540, 100, Phaser.Display.Color.HexStringToColor(PALETTE.skyBlueDeep).color, 0.16);
    scene.add.circle(130, 520, 85, Phaser.Display.Color.HexStringToColor(PALETTE.brightOrange).color, 0.12);
}

export function drawPanel(scene, x = 500, y = 300, width = 860, height = 470) {
    const panel = scene.add.rectangle(x, y, width, height, Phaser.Display.Color.HexStringToColor(PALETTE.white).color, 0.96);
    panel.setStrokeStyle(6, Phaser.Display.Color.HexStringToColor(PALETTE.skyBlue).color);
    return panel;
}

export function createButton(scene, x, y, label, onClick, color = PALETTE.skyBlueDeep) {
    const button = scene.add.container(x, y);
    const bg = scene.add.rectangle(0, 0, 680, 62, Phaser.Display.Color.HexStringToColor(color).color, 1);
    bg.setStrokeStyle(3, Phaser.Display.Color.HexStringToColor(PALETTE.brightOrange).color);

    const text = scene.add.text(0, 0, label, FONT_STYLES.button).setOrigin(0.5);
    button.add([bg, text]);
    button.setSize(680, 62);
    button.setInteractive(new Phaser.Geom.Rectangle(-340, -31, 680, 62), Phaser.Geom.Rectangle.Contains);

    button.on('pointerover', () => button.setScale(1.03));
    button.on('pointerout', () => button.setScale(1));
    button.on('pointerdown', onClick);
    return button;
}
