# 🚀 Experiencia de Realidad Aumentada (AR) - ar-fer

Este proyecto es una experiencia de Realidad Aumentada basada en la web que utiliza **MindAR** para detectar imágenes y superponer contenido interactivo.

---

## 📸 Cómo Probar la Experiencia

1.  **Abre el sitio web:** Ve a [https://abundis-rmn2.github.io/ar-fer/](https://abundis-rmn2.github.io/ar-fer/) desde tu móvil o computadora con cámara.
2.  **Permite el acceso a la cámara:** Acepta los permisos de video en tu navegador.
3.  **Apunta al marcador:** Busca el marcador de imagen (la imagen de café o el QR del proyecto) para ver cómo aparece el video superpuesto.

---

## 🛠️ Guía Rápida de GitHub (Para Principiantes)

Si quieres actualizar este proyecto o guardarlo en tu computadora, aquí tienes los pasos básicos:

### 1. Clonar el proyecto (Descargarlo)
Para traer este código a tu computadora por primera vez:
```bash
git clone https://github.com/abundis-rmn2/ar-fer.git
```

### 2. Guardar cambios (Commit)
Cada vez que hagas un cambio (como editar `index.html` o `style.css`), guarda tus avances:
```bash
# 1. Prepara los archivos que cambiaste
git add .

# 2. Ponle un nombre a tu avance
git commit -m "Explicación breve de lo que hice"
```

### 3. Subir cambios a Internet (Push)
Para que tus cambios se vean en el enlace de GitHub Pages:
```bash
git push origin main
```
*Tus cambios tardarán ~1 minuto en reflejarse en la web.*

---

## 📁 Estructura del Proyecto

*   `index.html`: El cuerpo de la página y configuración de MindAR.
*   `style.css`: El diseño visual y los efectos.
*   `app.js`: La lógica de programación (qué pasa cuando se detecta la imagen).
*   `cafe.mind`: El "cerebro" que reconoce la imagen objetivo.
*   `video.mp4`: El contenido que se proyecta en AR.

---

## 💡 Tips de Desarrollo
*   **Archivos grandes:** Evita subir archivos pesados directamente si no son necesarios.
*   **Github Pages:** El despliegue es automático cada vez que haces un `git push`.

---
Desarrollado con ❤️ para experimentar con AR Web. ☕✨
