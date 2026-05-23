export class QuestionManager {
    constructor(scene, levelConfig) {
        this.scene = scene;
        this.levelConfig = levelConfig;
        this.questions = Array.isArray(levelConfig?.questions) ? levelConfig.questions : [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex] ?? null;
    }

    getStats() {
        return {
            currentQuestionIndex: this.currentQuestionIndex,
            totalQuestions: this.questions.length,
            correctAnswers: this.correctAnswers,
            incorrectAnswers: this.incorrectAnswers,
            score: this.correctAnswers
        };
    }

    answer(optionIndex) {
        const question = this.getCurrentQuestion();
        if (!question) {
            return null;
        }

        const option = question.options?.[optionIndex];
        if (!option) {
            return null;
        }

        const isCorrect = Boolean(option.isCorrect);
        if (isCorrect) {
            this.correctAnswers += 1;
        } else {
            this.incorrectAnswers += 1;
        }

        const answeredPayload = {
            ...this.getStats(),
            isCorrect,
            selectedOption: option,
            feedback: option.feedback
        };
        this.scene.events.emit('question:answered', answeredPayload);

        const isLast = this.currentQuestionIndex >= this.questions.length - 1;
        if (isLast) {
            const completedPayload = this.getStats();
            this.scene.events.emit('question:completed', completedPayload);
            return { status: 'completed', ...completedPayload, isCorrect };
        }

        this.currentQuestionIndex += 1;
        const nextPayload = {
            ...this.getStats(),
            question: this.getCurrentQuestion()
        };
        this.scene.events.emit('question:next', nextPayload);
        return { status: 'next', ...nextPayload, isCorrect };
    }
}
