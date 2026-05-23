import { LEVELS } from './config.js';
import { GameState } from './GameState.js';
import { QuestionManager } from './QuestionManager.js';
import { FONT_STYLES, PALETTE, drawBackground, drawPanel, createButton } from './theme.js';

export class BaseLevelScene extends Phaser.Scene {
    constructor(sceneKey) {
        super({ key: sceneKey });
        this.sceneKey = sceneKey;
        this.locked = false;
    }

    create() {
        const level = LEVELS[this.sceneKey];
        if (!level) {
            throw new Error(`No se encontró configuración para ${this.sceneKey}`);
        }

        this.level = level;
        this.state = GameState.load();
        this.questionManager = new QuestionManager(this, level);

        drawBackground(this);
        drawPanel(this);

        this.add.text(500, 76, level.title, FONT_STYLES.title).setOrigin(0.5);
        this.playerLabel = this.add.text(500, 128, `Jugador: ${this.state.playerName || 'Aventurero'}`, FONT_STYLES.subtitle).setOrigin(0.5);

        this.progressLabel = this.add.text(140, 28, '', FONT_STYLES.hud).setOrigin(0, 0.5);
        this.scoreLabel = this.add.text(140, 572, '', FONT_STYLES.hud).setOrigin(0, 0.5);

        this.questionLabel = this.add.text(500, 210, '', FONT_STYLES.body).setOrigin(0.5);
        this.feedbackLabel = this.add.text(500, 520, '', {
            ...FONT_STYLES.hud,
            align: 'center',
            wordWrap: { width: 760 }
        }).setOrigin(0.5);

        this.optionButtons = [];

        this.events.on('question:answered', this.onQuestionAnswered, this);
        this.events.on('question:next', this.onQuestionNext, this);
        this.events.on('question:completed', this.onQuestionCompleted, this);

        this.renderQuestion();
        this.refreshHud();
    }

    renderQuestion() {
        const question = this.questionManager.getCurrentQuestion();
        if (!question) {
            return;
        }

        this.questionLabel.setText(question.question);
        this.feedbackLabel.setText('');
        this.locked = false;

        for (const button of this.optionButtons) {
            button.destroy();
        }
        this.optionButtons = [];

        question.options.forEach((option, index) => {
            const color = index % 2 === 0 ? PALETTE.skyBlueDeep : PALETTE.brightOrange;
            const button = createButton(this, 500, 290 + (index * 78), option.label, () => {
                if (this.locked) {
                    return;
                }

                this.locked = true;
                const result = this.questionManager.answer(index);
                if (!result) {
                    this.locked = false;
                    return;
                }

                this.time.delayedCall(1200, () => {
                    if (result.status === 'next') {
                        this.renderQuestion();
                    } else {
                        const nextScene = this.level.nextScene;
                        if (nextScene) {
                            this.scene.start(nextScene);
                        }
                    }
                });
            }, color);

            this.optionButtons.push(button);
        });
    }

    onQuestionAnswered(payload) {
        const color = payload.isCorrect ? PALETTE.success : PALETTE.error;
        this.feedbackLabel.setColor(color);
        this.feedbackLabel.setText(payload.feedback);
        this.refreshHud();
    }

    onQuestionNext() {
        this.refreshHud();
    }

    onQuestionCompleted(payload) {
        GameState.addScore(payload.score);
        this.refreshHud();
    }

    refreshHud() {
        const stats = this.questionManager.getStats();
        const totalScore = this.state.score + stats.score;
        this.progressLabel.setText(`Pregunta ${stats.currentQuestionIndex + 1}/${stats.totalQuestions}`);
        this.scoreLabel.setText(`Puntaje total: ${totalScore}`);
    }
}
