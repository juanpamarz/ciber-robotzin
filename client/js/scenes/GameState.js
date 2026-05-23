const STORAGE_KEY = 'ciberRobotzin.gameState';

const defaultState = {
    playerName: '',
    score: 0
};

let cache = { ...defaultState };

function canUseStorage() {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function readStorage() {
    if (!canUseStorage()) {
        return { ...defaultState };
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return { ...defaultState };
        }

        const parsed = JSON.parse(raw);
        return {
            playerName: typeof parsed.playerName === 'string' ? parsed.playerName : '',
            score: Number.isFinite(parsed.score) ? parsed.score : 0
        };
    } catch (_error) {
        return { ...defaultState };
    }
}

function writeStorage(nextState) {
    cache = {
        playerName: nextState.playerName,
        score: nextState.score
    };

    if (canUseStorage()) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    }
}

export const GameState = {
    load() {
        cache = readStorage();
        return { ...cache };
    },

    get() {
        return { ...cache };
    },

    setPlayerName(playerName) {
        writeStorage({ ...cache, playerName: String(playerName ?? '').trim() });
    },

    setScore(score) {
        writeStorage({ ...cache, score: Number.isFinite(score) ? score : 0 });
    },

    addScore(amount) {
        const value = Number.isFinite(amount) ? amount : 0;
        writeStorage({ ...cache, score: cache.score + value });
    },

    reset() {
        writeStorage({ ...defaultState });
    }
};
