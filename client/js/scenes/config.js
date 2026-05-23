export const GAME_SETTINGS = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    parent: 'game-container',
    backgroundColor: '#8ed6ff'
};

export const LEVELS = {
    Nivel1Scene: {
        title: 'Reto 1: El enlace sorpresa',
        question: 'Robotzin recibió un mensaje con un enlace misterioso. ¿Qué debe hacer?',
        options: [
            {
                label: 'Preguntar a una persona adulta antes de abrirlo',
                isCorrect: true,
                feedback: '¡Genial! Pedir ayuda evita muchos riesgos.'
            },
            {
                label: 'Abrirlo rápido porque dice que ganó un premio',
                isCorrect: false,
                feedback: 'Ups. Los premios inesperados pueden ser trampas.'
            },
            {
                label: 'Compartirlo con todos sus amigos sin revisarlo',
                isCorrect: false,
                feedback: 'Mejor no compartir enlaces dudosos.'
            }
        ],
        nextScene: 'Nivel2Scene'
    },
    Nivel2Scene: {
        title: 'Reto 2: Contraseña poderosa',
        question: '¿Cuál contraseña ayuda más a cuidar la cuenta de Robotzin?',
        options: [
            {
                label: 'robotzin123',
                isCorrect: false,
                feedback: 'Es muy fácil de adivinar. Necesitamos algo más fuerte.'
            },
            {
                label: 'MiColorFavoritoEsAzul!7',
                isCorrect: true,
                feedback: '¡Excelente! Es larga y más difícil de adivinar.'
            },
            {
                label: '123456',
                isCorrect: false,
                feedback: 'Esa clave es demasiado común.'
            }
        ],
        nextScene: 'Nivel3Scene'
    },
    Nivel3Scene: {
        title: 'Reto 3: Foto segura',
        question: 'Un desconocido pide una foto y tu dirección. ¿Qué hace Robotzin?',
        options: [
            {
                label: 'No comparte datos personales y avisa a una persona adulta',
                isCorrect: true,
                feedback: '¡Perfecto! La información personal se cuida.'
            },
            {
                label: 'Envía todo para que no se enojen',
                isCorrect: false,
                feedback: 'Nunca hay que compartir datos privados por presión.'
            },
            {
                label: 'Publica la dirección en un comentario abierto',
                isCorrect: false,
                feedback: 'Eso pondría en riesgo su seguridad.'
            }
        ],
        nextScene: 'FinalScene'
    }
};

export function addBackground(scene) {
    scene.cameras.main.setBackgroundColor('#8ed6ff');
    scene.add.rectangle(480, 470, 960, 140, 0x6dd16b).setStrokeStyle(4, 0x2c6a2b);
    scene.add.circle(120, 100, 45, 0xffdf6b);
    scene.add.ellipse(760, 110, 220, 70, 0xffffff, 0.92);
    scene.add.ellipse(840, 140, 190, 60, 0xffffff, 0.92);
    scene.add.ellipse(680, 145, 180, 55, 0xffffff, 0.92);
}

export function addPanel(scene, x, y, width, height) {
    const panel = scene.add.rectangle(x, y, width, height, 0xffffff, 0.94);
    panel.setStrokeStyle(5, 0x16324f);
    return panel;
}

export function addButton(scene, x, y, width, height, label, onClick, fillColor = 0xfff4b1) {
    const container = scene.add.container(x, y);
    const background = scene.add.rectangle(0, 0, width, height, fillColor, 1);
    background.setStrokeStyle(4, 0x16324f);
    const text = scene.add.text(0, 0, label, {
        fontFamily: 'Trebuchet MS, Arial, sans-serif',
        fontSize: '24px',
        color: '#16324f',
        align: 'center',
        wordWrap: { width: width - 30 }
    }).setOrigin(0.5);

    container.add([background, text]);
    container.setSize(width, height);
    container.setInteractive(
        new Phaser.Geom.Rectangle(-width / 2, -height / 2, width, height),
        Phaser.Geom.Rectangle.Contains
    );

    container.on('pointerover', () => {
        background.setFillStyle(0xffe27a, 1);
        container.setScale(1.02);
    });

    container.on('pointerout', () => {
        background.setFillStyle(fillColor, 1);
        container.setScale(1);
    });

    container.on('pointerdown', onClick);
    return container;
}

export function buildLevelScene(scene, sceneKey) {
    const challenge = LEVELS[sceneKey];
    const progress = scene.progress ?? { score: 0 };
    let locked = false;

    addBackground(scene);
    addPanel(scene, 480, 250, 820, 350);

    scene.add.text(480, 75, challenge.title, {
        fontFamily: 'Trebuchet MS, Arial, sans-serif',
        fontSize: '34px',
        fontStyle: 'bold',
        color: '#16324f'
    }).setOrigin(0.5);

    scene.add.text(480, 145, challenge.question, {
        fontFamily: 'Trebuchet MS, Arial, sans-serif',
        fontSize: '25px',
        color: '#16324f',
        align: 'center',
        wordWrap: { width: 700 }
    }).setOrigin(0.5);

    scene.add.text(130, 35, `⭐ Puntos: ${progress.score}`, {
        fontFamily: 'Trebuchet MS, Arial, sans-serif',
        fontSize: '24px',
        fontStyle: 'bold',
        color: '#16324f'
    }).setOrigin(0, 0.5);

    challenge.options.forEach((option, index) => {
        addButton(scene, 480, 250 + index * 82, 640, 62, option.label, () => {
            if (locked) {
                return;
            }

            locked = true;
            const nextScore = progress.score + (option.isCorrect ? 1 : 0);
            const messageColor = option.isCorrect ? '#146b2f' : '#a63c3c';
            const messageBackground = option.isCorrect ? 0xdaf7cf : 0xffd6d6;

            const feedbackBox = scene.add.rectangle(480, 470, 720, 72, messageBackground, 0.98);
            feedbackBox.setStrokeStyle(4, 0x16324f);
            scene.add.text(480, 470, option.feedback, {
                fontFamily: 'Trebuchet MS, Arial, sans-serif',
                fontSize: '24px',
                color: messageColor,
                align: 'center',
                wordWrap: { width: 660 }
            }).setOrigin(0.5);

            scene.time.delayedCall(1700, () => {
                scene.scene.start(challenge.nextScene, { score: nextScore });
            });
        });
    });
}
