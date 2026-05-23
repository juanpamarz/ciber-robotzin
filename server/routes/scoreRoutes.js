const express = require('express');
const { saveFinalScore, listScores } = require('../db');

const router = express.Router();

router.post('/scores', (req, res) => {
    const { playerName, score } = req.body ?? {};

    if (typeof playerName !== 'string' || playerName.trim().length < 1) {
        return res.status(400).json({ error: 'playerName es obligatorio' });
    }

    if (!Number.isFinite(score) || score < 0) {
        return res.status(400).json({ error: 'score debe ser un número válido' });
    }

    const created = saveFinalScore({
        playerName: playerName.trim().slice(0, 60),
        score: Math.floor(score)
    });

    return res.status(201).json(created);
});

router.get('/scores', (_req, res) => {
    return res.json({ data: listScores() });
});

module.exports = router;
