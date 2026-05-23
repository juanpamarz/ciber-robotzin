# Ciber Robotzin

Juego educativo infantil en Phaser 3 con 3 niveles sobre ciberseguridad.

## Estructura principal

- Escenas: `Login -> Nivel1 -> Nivel2 -> Nivel3 -> Final`
- Estado global: `client/js/scenes/GameState.js` (usa `localStorage` para nombre y puntaje)
- Retos: `client/js/scenes/QuestionManager.js` (maneja aciertos/errores y eventos Phaser)
- Estilo visual: `client/js/scenes/theme.js` (cámara, fuentes legibles y paleta Azul Cielo + Naranja Brillante)

## API básica de puntajes (Express)

- `POST /api/scores` guarda el puntaje final
  - body JSON: `{ "playerName": "Ana", "score": 9 }`
- `GET /api/scores` lista puntajes guardados

## Uso local

```bash
npm install
npm start
```

Luego abre `http://localhost:3000`.

## Validación rápida

```bash
npm test
```
