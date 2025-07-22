# Guinea App - Frontend Vue

Plataforma Web hecha con Vue JS que consta de un sencillo gestor de usuarios (login, registro y logout).

---

## Indice

## Introducción

Este proyecto consiste en una plataforma Web hecha en Vue JS con distintas librerias adicionales y ofrece las siguientes características:

- Inicio de sesión
  - Muestra de errores
- Registro de usuario
  - Muestra de errores
- Persistencia de usuario (a traves de LocalStorage)

## Estructura del proyecto

```
📁 guinea-prueba-app-frontend-vue
│
├── 📁 public/                      # Carpeta para colocar los assets publicos
├── 📁 src/                         # Carpeta principal
│   ├── 📁 application/             # Carpeta de metodos globales de aplicación
│   │   └── 📁 use-cases/           # Casos de uso para distintos modulos (user, auth)
│   ├── 📁 assets/                  # Carpeta de assets internos
│   ├── 📁 domain/                  # Carpeta principal de logica de negocio
│   │   ├── 📁 entities/            # Modelos/Entidades de negocio
│   │   └── 📁 repositories/        # Repositorios declaradores
│   ├── 📁 infrastructure/          # Carpeta conectora de información
│   │   ├── 📁 http/                # Carpeta de configuración de Axios y peticiones de todos los modulos
│   │   └── 📁 repositories/        # Carpeta de implementación a los repositorios declarados
│   ├── 📁 shared/                  # Carpeta de formatters y utilidades para compartir entre modulos
│   ├── 📁 ui/                      # Carpeta principal de UI
│   │   ├── 📁 components/          # Carpeta de componentes global
│   │   │   ├── 📁 buttons/         # Carpeta de componentes botones reutilizables y dinamicos
│   │   │   └── 📁 inputs/          # Carpeta de componentes inputs reutilizables
│   │   ├── 📁 pages/               # Carpeta de páginas publicas y privadas.
│   │   │   ├── 📁 private/         # Carpeta con ingreso exclusivo del usuario
│   │   │   └── 📁 public/          # Carpeta con ingreso publico
│   │   ├── 📁 router/              # Carpeta de logica de rutas
│   │   ├── 📁 shared/              # Carpeta de componentes compartidos solo en ui
│   │   └── 📁 stores/              # Carpeta de Stores (pinia)
│   ├── 📄 App.vue
│   ├── 📄 main.ts
│   ├── 📄 shims-vue.d.ts           # Archivo para el compilador de vscode
│   ├── 📄 style.css
│   └── 📄 vite-env.d.ts
├── 📄 .env.development
├── 📄 .env.production
└── 📄 [...]
```

## Requisitos

✅ **API** -> [Github API](#links)

✅ **Node.js >= 18.0.0**

✅ **NPM >= 10.0.0**

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/SaidSuyv/guinea-prueba-app-frontend-vue
cd guinea-prueba-app-frontend-vue
```

### 2. Configurar variables de entorno

Editar el archivo `.env` con los siguientes campos
| Variable | Descripción |
| -------- | ----------- |
| `VITE_API_URL` | URL de la API a consultar |

### 3. Instalar dependencias

```bash
npm install
```

## Ejecución

### Iniciar servidor

```bash
npm run dev
```

### Compilar aplicacion a producción

```bash
npm run build
```

### Iniciar pruebas

```bash
```

## Dependencias

### 1. Dependencias principales

| Paquete NPM | Uso | Documentación |
| ----------- | --- | ------------- |
| [tailwindcss](https://www.npmjs.com/package/tailwindcss) | Framework de estilos | [Enlace](https://tailwindcss.com/docs/installation/using-vite) |
| [axios](https://www.npmjs.com/package/axios) | Funcionalidades de peticiónes API | [Enlace](https://axios-http.com/es/docs/intro) |
| [lucide-vue-next](https://lucide.dev/guide/packages/lucide-vue-next) | Iconos para Vue | [Enlace](https://lucide.dev/guide/installation) |
| [pinia](https://www.npmjs.com/package/pinia) | Gestor de variables global | [Enlace](https://pinia.vuejs.org/) |
| [vue-router](https://www.npmjs.com/package/vue-router) | Gestor de rutas | [Enlace](https://router.vuejs.org/) |
| [vue-toastification](https://www.npmjs.com/package/vue-toastification) | Snackbar | [Enlace](https://vue-toastification.maronato.dev/) |

## Decisiones arquitectónicas

La arquitectura que tome en este proyecto se basa en Clean Architecture separando lo mayor posible la lógica de negocio con el UI respectivo, declarando cada Tipo para poder hacer que el flujo sea esperado y comprensible.

Tambien se adquirio una arquitectura Feature first en ciertos modulos para englobar archivos, variables, providers, etc.

## Links

- [Github API](https://github.com/SaidSuyv/guinea-prueba-app-backend)