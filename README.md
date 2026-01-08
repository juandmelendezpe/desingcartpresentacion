# Presentation Card 3D - Angular

Este proyecto es una **Tarjeta de Presentación 3D interactiva** desarrollada con **Angular 20**. Utiliza técnicas avanzadas de CSS para crear un efecto de profundidad (parallax) y animaciones de rotación sofisticadas, todo con un estilo moderno de "Glassmorphism".

## 🚀 Características Principales

*   **Efecto 3D Real**: Implementación de `perspective` y `translateZ` para dar profundidad a los elementos.
*   **Diseño Glassmorphism**: Uso de `backdrop-filter` para un aspecto de cristal traslúcido.
*   **Animaciones Coreografiadas**: Secuencia de rotación en los ejes X e Y para mostrar la tarjeta de forma dinámica.
*   **Altamente Personalizable**: Los datos se cargan desde un archivo JSON externo.
*   **Responsive**: Adaptado para dispositivos móviles y tablets.

## 🛠️ Tecnologías

*   **Framework**: [Angular 20](https://angular.dev/)
*   **Estilos**: CSS3 Puro (sin frameworks de UI externos)
*   **Backend**: Preparado para Firebase Storage (Opcional)

## 💻 Desarrollo

### Servidor de Desarrollo

Para iniciar el servidor local, ejecuta:

```bash
npm start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias los archivos fuente.

### Estructura de Datos

Puedes modificar la información de la tarjeta en:
`public/assets/data.json`

### Construcción

Para generar los archivos de producción:

```bash
npm run build
```

Los artefactos se guardarán en el directorio `dist/`.

## 📌 Próximas Implementaciones

*   [ ] Integración completa con Firebase Storage para imágenes dinámicas.
*   [ ] Temas de color personalizables.
*   [ ] Soporte para múltiples perfiles.

---
Desarrollado con ❤️ por el equipo de diseño.
