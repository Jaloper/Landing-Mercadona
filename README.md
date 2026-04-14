# Landing Page — Mercadona (Empresite)

Recreación de la ficha de empresa de **Mercadona** en el directorio de empresas **Empresite**. Proyecto de maquetación estático construido con HTML, CSS y JavaScript vanilla, sin dependencias externas ni frameworks.

## Vista general

La página simula la ficha pública de una empresa dentro de un directorio empresarial, con todos los bloques habituales de ese tipo de plataforma:

- **Barra de navegación** — logo, menú hamburguesa (mobile), avatar de usuario y botones de acción.
- **Barra de búsqueda** — campo de búsqueda con breadcrumb de navegación.
- **Zona de valoración** — nombre de la empresa, badge de empresa verificada con popup informativo, sistema de estrellas interactivo y accesos rápidos (llamar, sitio web, cómo llegar, ver informe).
- **Menú de opciones** — dropdown en escritorio y bottom sheet deslizable en móvil (guardar ficha, editar, reportar, eliminar).
- **Slider de secciones** — navegación ancla hacia las distintas secciones de la ficha.
- **Bloques de información** — dirección y contacto, información general, datos comerciales, rankings, sucursales y últimas noticias.
- **Banners publicitarios** — zona de publicidad entre secciones.
- **Marcas similares** — sección de empresas relacionadas.
- **Footer** — pie de página con enlaces.

## Tecnologías

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | CSS3 (variables, flexbox, media queries) |
| Interactividad | JavaScript ES6+ vanilla |
| Tipografías | Open Sans · STIX Two Text (autohospedadas) |

## Estructura de archivos

```
Landing_Mercadona/
├── index.html          # Documento principal
├── style.css           # Todos los estilos
├── more-options.js     # Lógica del menú de opciones (dropdown / bottom sheet)
├── stars.js            # Sistema de valoración por estrellas interactivo
├── fonts/              # Fuentes autohospedadas (Open Sans, STIX Two Text)
└── assets/             # Imágenes organizadas por sección
    ├── NavBar/
    ├── FirstAd/
    ├── ReviewZone/
    ├── SecondAd/
    ├── BrandInformation/
    ├── ComercialInfo/
    ├── CommercialData/
    ├── footer/
    └── similarBrands/
```

## Funcionalidades interactivas

- **Estrellas de valoración** — el usuario puede pasar el ratón para previsualizar la puntuación, hacer clic para seleccionarla y enviar el voto. La media se recalcula en tiempo real.
- **Popup "Empresa verificada"** — se abre al pulsar el icono ⓘ junto al badge y se cierra con el botón o haciendo clic fuera.
- **Menú "Más opciones"** — en escritorio se muestra como dropdown; en móvil aparece como una tarjeta que sube desde la parte inferior y puede cerrarse arrastrándola hacia abajo.

## Cómo ejecutar

Al ser un proyecto puramente estático, basta con abrir `index.html` en cualquier navegador moderno. No se requiere servidor ni instalación.
