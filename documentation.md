# Documentación del Proyecto: Tarjeta de Presentación 3D

## Descripción General
Este proyecto es una tarjeta de presentación web interactiva creada con **Angular 20**. Destaca por su diseño moderno "Glassmorphism" y sus avanzadas animaciones 3D generadas íntegramente con CSS.

## Tecnologías Utilizadas
*   **Framework**: Angular 20 (Compatible con sintaxis moderna).
*   **Lenguaje**: TypeScript 5.8.
*   **Estilos**: CSS3 Puro (sin librerías externas de UI).
*   **Backend/Storage**: Firebase Storage (para hosting de imagen de perfil).
*   **Herramientas**: Angular CLI.

## Características Principales

### 1. Efecto 3D y Profundidad (Parallax)
La tarjeta simula estar en un espacio tridimensional real.
*   **Perspectiva global**: Se aplica una `perspective: 1000px` al contenedor principal.
*   **Capas (Layers)**: Cada elemento interno (foto, contadores, botones) tiene asignado un valor `translateZ` diferente (ej. 50px, 60px). Esto hace que al girar, los elementos se muevan a velocidades distintas, creando una sensación de volumen y separación.
*   **Sombras Dinámicas**: Los elementos flotantes proyectan sombras suaves (`box-shadow`) que refuerzan la ilusión de que están levitando sobre el cristal.

### 2. Animación Coreografiada
La tarjeta ejecuta una secuencia de animación continua de 20 segundos (`complexRefined`) que incluye:
1.  **Fase 1**: 4 Giros Rápidos sobre el eje Y (Derecha a Izquierda).
2.  **Pausa**: 1 segundo de estabilización.
3.  **Fase 2**: 2 Volteretas sobre el eje X ("Giros de radio").
4.  **Pausa**: 1 segundo.
5.  **Fase 3**: 3 Giros Inversos sobre el eje Y con recuperación de posición.
6.  **Pausa Final**: 10 segundos estática para permitir la lectura del contenido.

### 3. Integración con Imágenes (Local/Firebase)
Actualmente, el proyecto está configurado para cargar imágenes de forma local para optimizar el rendimiento y reducir costos en la fase inicial.

*   **Modo Actual (Local)**:
    *   La imagen de perfil se busca en la carpeta `public/assets/`.
    *   El componente `Card` mapea el nombre del archivo del JSON (`perfil.png`) a la ruta local.
*   **Modo Futuro (Firebase Storage)**:
    *   El código está preparado para descargar imágenes dinámicamente desde **Google Firebase Storage**.
    *   Se encuentra comentado en `src/app/components/card/card.ts` para ser activado en versiones posteriores.
    *   Requerirá configurar los providers en `app.config.ts` y añadir las claves en `environment.ts`.

## Estructura del Proyecto
*   `src/app/components/card/`: Contiene la lógica (`.ts`), vista (`.html`) y estilos (`.css`) de la tarjeta.
*   `public/assets/`: Directorio para recursos estáticos (imágenes, iconos, etc.).
*   `public/assets/data.json`: Archivo persistente con los datos de:
    *   Nombre y Título.
    *   Estadísticas (Proyectos, Likes, etc.).
    *   Enlaces Sociales.
    *   Datos de contacto (Email, Móvil).

## Cómo Ejecutar
1.  **Instalar dependencias**:
    ```bash
    npm install
    ```
2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm start
    ```
    *Nota: El script `npm start` ejecuta internamente `ng serve`.*
3.  **Abrir navegador en**: `http://localhost:4200`

---
*Documentación técnica - Versión 1.0*
*Desarrollado para Juan Melendez*
