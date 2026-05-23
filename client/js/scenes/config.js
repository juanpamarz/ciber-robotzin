export const GAME_SETTINGS = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#EAF6FF',
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
        nextScene: 'Nivel2Scene',
        questions: [
            {
                question: 'Robotzin recibió un enlace misterioso. ¿Qué debe hacer?',
                options: [
                    { label: 'Pedir ayuda a una persona adulta', isCorrect: true, feedback: '¡Excelente decisión!' },
                    { label: 'Abrirlo de inmediato', isCorrect: false, feedback: 'Mejor verifica antes de abrir enlaces.' },
                    { label: 'Reenviarlo a todos', isCorrect: false, feedback: 'No compartas enlaces sin revisar.' }
                ]
            },
            {
                question: '¿Cuál contraseña es más segura?',
                options: [
                    { label: '123456', isCorrect: false, feedback: 'Esa contraseña es muy débil.' },
                    { label: 'MiColorFavoritoEsAzul!7', isCorrect: true, feedback: '¡Muy bien! Es más fuerte.' },
                    { label: 'robotzin', isCorrect: false, feedback: 'Necesitas una contraseña más robusta.' }
                ]
            },
            {
                question: 'Si te piden datos personales por chat, ¿qué haces?',
                options: [
                    { label: 'No los comparto y aviso a un adulto', isCorrect: true, feedback: '¡Perfecto! Proteges tu privacidad.' },
                    { label: 'Los envío para evitar problemas', isCorrect: false, feedback: 'Nunca compartas datos privados por presión.' },
                    { label: 'Los publico en internet', isCorrect: false, feedback: 'Publicar datos personales es riesgoso.' }
                ]
            }
        ]
    },
    Nivel2Scene: {
        title: 'Nivel 2: Amigos en Línea',
        nextScene: 'Nivel3Scene',
        questions: [
            {
                question: '¿Qué hace un buen ciudadano digital?',
                options: [
                    { label: 'Respeta y cuida su información', isCorrect: true, feedback: '¡Correcto!' },
                    { label: 'Molesta a otros en línea', isCorrect: false, feedback: 'El respeto es clave en internet.' },
                    { label: 'Comparte todo sin pensar', isCorrect: false, feedback: 'Siempre piensa antes de publicar.' }
                ]
            },
            {
                question: 'Si alguien te pide dinero en un juego, ¿qué haces?',
                options: [
                    { label: 'Ignoro y aviso a un adulto', isCorrect: true, feedback: '¡Muy bien! Evitas estafas.' },
                    { label: 'Le doy dinero', isCorrect: false, feedback: 'Eso puede ser una estafa.' },
                    { label: 'Comparto datos de pago', isCorrect: false, feedback: 'Nunca compartas datos bancarios.' }
                ]
            },
            {
                question: '¿Cuál es un riesgo de compartir fotos personales?',
                options: [
                    { label: 'Pueden usarlas de forma incorrecta', isCorrect: true, feedback: '¡Exacto!' },
                    { label: 'No hay riesgos', isCorrect: false, feedback: 'Sí existen riesgos reales.' },
                    { label: 'Solo importa si la foto es fea', isCorrect: false, feedback: 'Todas las fotos personales requieren cuidado.' }
                ]
            }
        ]
    },
    Nivel3Scene: {
        title: 'Nivel 3: Superhéroe Digital',
        nextScene: 'FinalScene',
        questions: [
            {
                question: '¿Qué es un virus informático?',
                options: [
                    { label: 'Un programa dañino', isCorrect: true, feedback: '¡Correcto!' },
                    { label: 'Un sitio web bonito', isCorrect: false, feedback: 'Un virus es software malicioso.' },
                    { label: 'Algo que solo afecta equipos viejos', isCorrect: false, feedback: 'Puede afectar a todo tipo de equipos.' }
                ]
            },
            {
                question: 'Si un amigo comparte su contraseña contigo, ¿qué haces?',
                options: [
                    { label: 'Le explico que debe cambiarla', isCorrect: true, feedback: '¡Gran respuesta!' },
                    { label: 'Entro a su cuenta', isCorrect: false, feedback: 'Nunca accedas a cuentas ajenas.' },
                    { label: 'La publico', isCorrect: false, feedback: 'Eso sería peligroso e incorrecto.' }
                ]
            },
            {
                question: '¿Cómo proteger mejor tus dispositivos?',
                options: [
                    { label: 'Usando antivirus y buenas prácticas', isCorrect: true, feedback: '¡Muy bien!' },
                    { label: 'Descargando todo', isCorrect: false, feedback: 'Descargar sin cuidado es peligroso.' },
                    { label: 'No actualizando nada', isCorrect: false, feedback: 'Las actualizaciones ayudan a protegerte.' }
                ]
            },
            {
                question: 'Si ves acoso en línea, ¿qué debes hacer?',
                options: [
                    { label: 'Reportar y apoyar a la persona', isCorrect: true, feedback: '¡Excelente!' },
                    { label: 'Unirte al acoso', isCorrect: false, feedback: 'Nunca participes en acoso.' },
                    { label: 'Ignorarlo siempre', isCorrect: false, feedback: 'Reportar ayuda a proteger a otros.' }
                ]
            }
        ]
    }
};
