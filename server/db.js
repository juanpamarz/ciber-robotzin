const scores = [];

function saveFinalScore({ playerName, score }) {
    const row = {
        id: scores.length + 1,
        playerName,
        score,
        finishedAt: new Date().toISOString()
    };

    scores.push(row);
    return row;
}

function listScores() {
    return [...scores].sort((a, b) => b.score - a.score);
}

module.exports = {
    saveFinalScore,
    listScores
};
