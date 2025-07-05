# Consultorio Verón

Sitio web profesional para el Consultorio Verón, especializado en evaluación física y rendimiento deportivo.

## 🏥 Sobre el Proyecto

Este es el sitio web oficial del Consultorio Verón, desarrollado con React y Vite. El sitio presenta los servicios de evaluación física, rendimiento deportivo y asesoramiento en salud deportiva.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Carrusel de Imágenes**: Muestra automáticamente las imágenes de los servicios
- **Videos Informativos**: Contenido multimedia sobre evaluaciones y rendimiento
- **Formulario de Contacto**: Integrado para consultas de clientes
- **SEO Optimizado**: Meta tags y estructura para mejor posicionamiento
- **Performance**: Optimizado para carga rápida y experiencia de usuario

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de build rápida
- **Styled Components** - CSS-in-JS para estilos
- **ESLint** - Linting de código
- **Vercel** - Plataforma de despliegue

## 📁 Estructura del Proyecto

```
consultorio-veron/
├── public/
│   ├── images/          # Imágenes del sitio
│   └── videos/          # Videos informativos
├── src/
│   ├── components/      # Componentes React
│   │   └── Carousel/    # Componente de carrusel organizado
│   ├── hooks/           # Hooks personalizados
│   ├── styles/          # Estilos globales y de layout
│   ├── utils/           # Utilidades y constantes
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── vercel.json          # Configuración de Vercel
├── package.json         # Dependencias y scripts
└── README.md           # Documentación
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js >= 18.0.0
- npm >= 8.0.0

### Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd consultorio-veron
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run deploy` - Construye para despliegue

## 🌐 Despliegue en Vercel

El proyecto está configurado para despliegue automático en Vercel:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente la configuración
3. El despliegue se realizará automáticamente en cada push

### Configuración de Vercel

El archivo `vercel.json` incluye:
- Configuración de build optimizada
- Headers de cache para assets estáticos
- Rewrites para SPA (Single Page Application)

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px+
- **Tablets**: 768px+
- **Desktop**: 1100px+

## 🎨 Personalización

### Colores del Tema

Los colores están centralizados en `src/utils/constants.js`:
- Primary: #1a3c5a
- Background: #f4f8fb
- White: #fff

### Imágenes y Videos

- Las imágenes se cargan desde `/public/images/`
- Los videos se cargan desde `/public/videos/`
- El carrusel filtra automáticamente las imágenes que no contengan "logo"

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Consultorio Verón - [info@consultorioveron.com](mailto:info@consultorioveron.com)

---

Desarrollado con ❤️ para el Consultorio Verón
