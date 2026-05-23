# Ciber Robotzin

Sitio web infantil con una mini aventura interactiva creada con Phaser. La experiencia está pensada para compartirse fácilmente por internet y enseñar hábitos básicos de seguridad digital con un tono amigable.

## Qué incluye

- Pantalla de bienvenida para público infantil.
- Tres retos breves sobre enlaces, contraseñas y datos personales.
- Pantalla final con puntaje y opción para volver a jugar.
- Servidor Express mínimo para probarlo localmente.

## Uso local

```bash
npm install
npm start
```

Luego abre `http://localhost:3000`.

## Publicarlo gratis

Como el juego vive dentro de la carpeta `client`, puedes publicarlo como sitio estático gratis en servicios sencillos como:

- **Netlify Drop**: arrastra la carpeta `client` al panel de Netlify.
- **Vercel**: importa el repositorio y usa `client` como directorio público.

Si prefieres seguir usando Node, el servidor también acepta la variable `PORT` para despliegues simples.
