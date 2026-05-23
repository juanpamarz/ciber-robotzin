export const GAME_SETTINGS = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#FFFBF0',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

export const LEVELS = {
    Nivel1Scene: {
        title: 'Nivel 1: El Mundo Digital',
        questions: [
            {
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
                ]
            },
            {
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
                ]
            },
            {
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
                ]
            }
        ],
        nextScene: 'Nivel2Scene'
    },
    Nivel2Scene: {
        title: 'Nivel 2: Amigos en Línea',
        questions: [
            {
                question: '¿Qué significa ser un buen ciudadano digital?',
                options: [
                    {
                        label: 'Ser respetuoso, no acosar a otros y cuidar tu información',
                        isCorrect: true,
                        feedback: '¡Correcto! Los buenos ciudadanos digitales respetan a los demás.'
                    },
                    {
                        label: 'Pasar todo el día en redes sociales',
                        isCorrect: false,
                        feedback: 'El equilibrio es importante. No solo se trata del tiempo, sino también cómo lo usas.'
                    },
                    {
                        label: 'Hacer lo que quieras sin pensar en los demás',
                        isCorrect: false,
                        feedback: 'En línea y fuera de línea, debemos respetar a los otros.'
                    }
                ]
            },
            {
                question: 'Alguien te pide dinero en un juego en línea. ¿Qué haces?',
                options: [
                    {
                        label: 'Ignoras el mensaje y avisas a un adulto',
                        isCorrect: true,
                        feedback: '¡Excelente! Nunca das dinero a desconocidos en línea.'
                    },
                    {
                        label: 'Das dinero porque dice que es urgente',
                        isCorrect: false,
                        feedback: 'Los estafadores usan la urgencia como truco. Siempre pregunta a un adulto.'
                    },
                    {
                        label: 'Compartes tu información de pago',
                        isCorrect: false,
                        feedback: 'Nunca compartas información de pago con desconocidos.'
                    }
                ]
            },
            {
                question: '¿Cuál es el riesgo de compartir fotos personales en línea?',
                options: [
                    {
                        label: 'Que gente mala las use de manera incorrecta',
                        isCorrect: true,
                        feedback: '¡Muy bien! Las fotos pueden ser usadas para chantaje o engaño.'
                    },
                    {
                        label: 'Ninguno, si tienes muchos amigos',
                        isCorrect: false,
                        feedback: 'Incluso con amigos, las fotos pueden ser compartidas sin tu permiso.'
                    },
                    {
                        label: 'Solo si la foto es fea',
                        isCorrect: false,
                        feedback: 'Todas las fotos personales corren el mismo riesgo.'
                    }
                ]
            }
        ],
        nextScene: 'Nivel3Scene'
    },
    Nivel3Scene: {
        title: 'Nivel 3: Superhéroe Digital',
        questions: [
            {
                question: '¿Qué es un virus informático?',
                options: [
                    {
                        label: 'Un programa dañino que se copia a sí mismo',
                        isCorrect: true,
                        feedback: '¡Correcto! Los virus se propagan como los virus reales.'
                    },
                    {
                        label: 'Solo vive en computadoras viejas',
                        isCorrect: false,
                        feedback: 'Los virus pueden infectar computadoras nuevas también.'
                    },
                    {
                        label: 'Un sitio web colorido',
                        isCorrect: false,
                        feedback: 'Los virus son programas maliciosos, no sitios web.'
                    }
                ]
            },
            {
                question: 'Tu mejor amigo comparte su contraseña contigo. ¿Qué haces?',
                options: [
                    {
                        label: 'Le pides que la cambie y le explicas el riesgo',
                        isCorrect: true,
                        feedback: '¡Perfecto! Eres un buen amigo protegiendo su seguridad.'
                    },
                    {
                        label: 'Entras a su cuenta para ver qué hay',
                        isCorrect: false,
                        feedback: 'Nunca debes acceder a cuentas ajenas, incluso de amigos.'
                    },
                    {
                        label: 'Olvidas lo que te dijo',
                        isCorrect: false,
                        feedback: 'Deberías ayudarlo a entender que compartir contraseñas es peligroso.'
                    }
                ]
            },
            {
                question: '¿Cuál es la mejor manera de proteger tus dispositivos?',
                options: [
                    {
                        label: 'Usar antivirus, contraseñas fuertes y no descargar de sitios dudosos',
                        isCorrect: true,
                        feedback: '¡Excelente! Eres un auténtico superhéroe digital.'
                    },
                    {
                        label: 'Descargar todo lo que se vea interesante',
                        isCorrect: false,
                        feedback: 'Muchos descargas pueden contener virus o malware.'
                    },
                    {
                        label: 'No usar Internet nunca',
                        isCorrect: false,
                        feedback: 'Internet es increíble, solo necesitas saber cómo usarlo con seguridad.'
                    }
                ]
            },
            {
                question: '¿Qué debe hacer Robotzin si ve a alguien molestando a otro en línea?',
                options: [
                    {
                        label: 'Reportarlo a los moderadores y apoyar a la persona molestada',
                        isCorrect: true,
                        feedback: '¡Bravo! Eres un verdadero defensor de internet seguro.'
                    },
                    {
                        label: 'Unirse a la molestia',
                        isCorrect: false,
                        feedback: 'El acoso digital es serio y nunca debes participar.'
                    },
                    {
                        label: 'Ignorarlo completamente',
                        isCorrect: false,
                        feedback: 'Reportar acoso ayuda a proteger a otros en línea.'
                    }
                ]
            }
        ],
        nextScene: 'FinalScene'
    }
};

export function addColorfulBackground(scene) {
    const colors = [0xFF006E, 0x00D9FF, 0xFFD60A, 0x00B4D8, 0x9D4EDD, 0x3A86FF, 0xFB5607];
    
    // Create gradient-like background with colorful circles
    scene.cameras.main.setBackgroundColor('#FFFBF0');
    
    // Add decorative circles around the scene
    scene.add.circle(100, 80, 60, 0xFF006E).setAlpha(0.3);
    scene.add.circle(900, 120, 70, 0x00D9FF).setAlpha(0.3);
    scene.add.circle(50, 500, 50, 0xFFD60A).setAlpha(0.3);
    scene.add.circle(950, 480, 65, 0x9D4EDD).setAlpha(0.3);
    scene.add.circle(500, 80, 55, 0x3A86FF).setAlpha(0.3);
    scene.add.circle(800, 550, 60, 0xFB5607).setAlpha(0.3);
}

export function addPanel(scene, x, y, width, height) {
    const panel = scene.add.rectangle(x, y, width, height, 0xFFFFFF, 0.97);
    panel.setStrokeStyle(5, 0xFF006E);
    return panel;
}

export function addButton(scene, x, y, width, height, label, onClick, fillColor = 0xFFD60A) {
    const container = scene.add.container(x, y);
    const background = scene.add.rectangle(0, 0, width, height, fillColor, 1);
    background.setStrokeStyle(4, 0x1a1a1a);
    const text = scene.add.text(0, 0, label, {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '22px',
        fontWeight: '700',
        color: '#1a1a1a',
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
        background.setFillStyle(0x00D9FF, 1);
        container.setScale(1.08);
    });

    container.on('pointerout', () => {
        background.setFillStyle(fillColor, 1);
        container.setScale(1);
    });

    container.on('pointerdown', onClick);
    return container;
}

export function addLargeTitle(scene, x, y, text) {
    return scene.add.text(x, y, text, {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '32px',
        color: '#FF006E',
        align: 'center',
        wordWrap: { width: 900 }
    }).setOrigin(0.5);
}

export function addSubtitle(scene, x, y, text) {
    return scene.add.text(x, y, text, {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '24px',
        fontWeight: '700',
        color: '#00B4D8',
        align: 'center',
        wordWrap: { width: 850 }
    }).setOrigin(0.5);
}

export function addBodyText(scene, x, y, text, width = 800) {
    return scene.add.text(x, y, text, {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '18px',
        color: '#1a1a1a',
        align: 'center',
        wordWrap: { width }
    }).setOrigin(0.5);
}

export function buildLevelScene(scene, sceneKey, playerName) {
    const challenge = LEVELS[sceneKey];
    const progress = scene.progress ?? { score: 0, currentQuestion: 0 };
    let locked = false;

    addColorfulBackground(scene);
    
    // Add player name display
    if (playerName) {
        scene.add.text(490, 20, `🤖 ${playerName}`, {
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            color: '#FF006E',
            backgroundColor: '#FFFFFF',
            padding: { x: 12, y: 8 },
            align: 'center'
        }).setOrigin(0.5).setDepth(100);
    }

    // Add level title
    addLargeTitle(scene, 500, 50, challenge.title);

    // Get current question
    const currentQ = challenge.questions[progress.currentQuestion];
    
    // Add main panel
    addPanel(scene, 500, 300, 820, 380);

    // Add question
    scene.add.text(500, 130, currentQ.question, {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '22px',
        fontWeight: '700',
        color: '#1a1a1a',
        align: 'center',
        wordWrap: { width: 750 }
    }).setOrigin(0.5);

    // Add score and progress
    scene.add.text(30, 30, `⭐ Pregunta ${progress.currentQuestion + 1}/${challenge.questions.length}`, {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        color: '#9D4EDD'
    }).setOrigin(0, 0.5);

    scene.add.text(30, 570, `📊 Puntos: ${progress.score}`, {
        fontFamily: 'Fredoka, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        color: '#3A86FF'
    }).setOrigin(0, 0.5);

    // Add NPC character that gets approached by robot
    const npcX = 880;
    const npcY = 150;
    scene.add.text(npcX, npcY, '🧠', {
        fontFamily: 'Arial',
        fontSize: '70px'
    }).setOrigin(0.5).setName('npc-character');

    // Add robot character that walks to NPCs
    const robotX = 120;
    const robotY = 400;
    const robotChar = scene.add.text(robotX, robotY, '🤖', {
        fontFamily: 'Arial',
        fontSize: '80px'
    }).setOrigin(0.5).setName('robot-character');

    // Add walkway effect - show NPC approaching animation
    const walkingNPC = scene.add.text(npcX, npcY, '🧠', {
        fontFamily: 'Arial',
        fontSize: '70px',
        alpha: 0.5
    }).setOrigin(0.5).setName('walking-npc');

    // Animate NPC moving to robot position
    scene.tweens.add({
        targets: walkingNPC,
        x: { from: npcX, to: 200 },
        duration: 1200,
        ease: 'Linear',
        delay: 300
    });

    // Add another NPC character on the left
    scene.add.text(120, 450, '💡', {
        fontFamily: 'Arial',
        fontSize: '60px'
    }).setOrigin(0.5);

    // Add answer buttons
    currentQ.options.forEach((option, index) => {
        const colors = [0xFF006E, 0x00D9FF, 0xFFD60A, 0xFB5607];
        const buttonColor = colors[index % colors.length];
        
        addButton(scene, 500, 240 + index * 75, 680, 60, option.label, () => {
            if (locked) {
                return;
            }

            locked = true;
            const nextScore = progress.score + (option.isCorrect ? 1 : 0);
            const messageColor = option.isCorrect ? '#00A651' : '#CC0000';
            const messageBackground = option.isCorrect ? 0xD4EDDA : 0xF8D7DA;
            const messageEmoji = option.isCorrect ? '✅' : '❌';

            const feedbackBox = scene.add.rectangle(500, 520, 780, 70, messageBackground, 0.98);
            feedbackBox.setStrokeStyle(3, messageColor);
            scene.add.text(500, 520, `${messageEmoji} ${option.feedback}`, {
                fontFamily: 'Fredoka, sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                color: messageColor,
                align: 'center',
                wordWrap: { width: 750 }
            }).setOrigin(0.5);

            // Animate robot moving to next position on correct answer
            if (option.isCorrect) {
                const nextX = 150 + (progress.currentQuestion * 150);
                scene.tweens.add({
                    targets: robotChar,
                    x: nextX,
                    y: 350,
                    duration: 800,
                    ease: 'Linear',
                    delay: 400
                });
            }

            scene.time.delayedCall(1800, () => {
                if (progress.currentQuestion + 1 < challenge.questions.length) {
                    // More questions in this level
                    scene.scene.restart({ 
                        score: nextScore, 
                        currentQuestion: progress.currentQuestion + 1,
                        playerName 
                    });
                } else {
                    // Move to next scene
                    scene.scene.start(challenge.nextScene, { 
                        score: nextScore,
                        playerName 
                    });
                }
            });
        }, buttonColor);
    });
}
