/* ==========================================================================
   FUENTE ÚNICA DE DATOS DEL PORTFOLIO
   --------------------------------------------------------------------------
   Editá SÓLO este archivo para agregar/modificar proyectos.
   Tanto index.html como project-details.html se generan a partir de aquí.

   Para agregar capturas a un proyecto:
     1. Poné las imágenes en  assets/images/projects/<slug>/
     2. Agregá una entrada en el array "gallery" con el nombre del archivo.
   Mientras el archivo no exista, la web muestra un placeholder con el título,
   así que la página siempre se ve "armada".

   Valores de "status" (se traducen en scripts/main.js → statusLabel):
     'In use' | 'Beta' | 'In Development' | 'Production'
   ========================================================================== */

window.PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'mecanica',
    freelance: true,
    title: 'Mecánica Pistón',
    tagline_en: 'Offline-first management system for a mechanical workshop.',
    tagline_es: 'Sistema de gestión offline-first para taller mecánico.',
    status: 'In use',
    year: '2026',
    layout: 'web',          // 'web' (landscape) | 'mobile' (portrait)
    accent: '#22d3ee',
    cover: 'assets/images/projects/mecanica/oscuro/dashboard.png',
    links: {
      github: 'https://github.com/JuanEspinoza8/mecanica-piston',
      demo: null
    },
    desc_en: [
      'Management system for a real mechanical workshop, built as an offline-first PWA. It handles clients, vehicles, work orders, spare parts, debts, payments and photos from the shop\'s computer or a phone.',
      'Offline, you can keep browsing and entering data: changes are stored in IndexedDB (Dexie) and queued. On reconnect, the queue syncs to Supabase in order, with retries and an inbox for errors the server rejects. Debt balances are computed by Postgres triggers and access is protected with Row Level Security.'
    ],
    desc_es: [
      'Sistema de gestión para un taller mecánico real, construido como PWA offline-first. Administra clientes, vehículos, órdenes de trabajo, repuestos, deudas, pagos y fotos desde la computadora del taller o el celular.',
      'Sin conexión se puede seguir consultando y cargando datos: los cambios se guardan en IndexedDB (Dexie) y se encolan. Al reconectar, la cola se sincroniza con Supabase en orden, con reintentos y una bandeja para los errores que el servidor rechaza. El saldo de las deudas lo calcula Postgres con triggers y el acceso está protegido con Row Level Security.'
    ],
    features_en: [
      'Client and vehicle management',
      'Work orders with diagnosis, statuses and task checklist',
      'Spare parts loading with automatic cost calculation',
      'Installment debts and payments with receipts; balance computed by Postgres',
      'Photos and PDFs served through signed URLs',
      'Global search by plate, model, name or phone',
      'Installable as a native app (PWA)',
      'Offline mode with a sync queue, retries and an error inbox',
      'Tests with Vitest and CI with GitHub Actions'
    ],
    features_es: [
      'Gestión de clientes y vehículos',
      'Órdenes de trabajo con diagnóstico, estados y checklist de tareas',
      'Carga de repuestos con cálculo automático de costos',
      'Deudas en cuotas y pagos con comprobante; el saldo lo calcula Postgres',
      'Fotos y PDF servidos con URLs firmadas',
      'Búsqueda global por patente, modelo, nombre o teléfono',
      'Instalable como app nativa (PWA)',
      'Modo offline con cola de sincronización, reintentos y bandeja de errores',
      'Tests con Vitest y CI con GitHub Actions'
    ],
    tech: [
      { group_en: 'Frontend', group_es: 'Frontend', items: [
        { icon: 'devicon-react-original colored', name: 'React 19' },
        { icon: 'devicon-vitejs-plain colored', name: 'Vite 8' },
        { icon: 'devicon-tailwindcss-original colored', name: 'Tailwind CSS 3' },
        { icon: 'devicon-react-original colored', name: 'React Router v7' },
        { icon: 'devicon-javascript-plain colored', name: 'Workbox (PWA)' }
      ]},
      { group_en: 'State & Data', group_es: 'Estado y Datos', items: [
        { icon: 'devicon-react-original colored', name: 'TanStack Query' },
        { icon: 'devicon-javascript-plain colored', name: 'Zustand' },
        { icon: 'devicon-javascript-plain colored', name: 'Dexie.js (IndexedDB)' },
        { icon: 'devicon-react-original colored', name: 'React Hook Form + Zod' },
        { icon: 'devicon-react-original colored', name: 'Recharts' }
      ]},
      { group_en: 'Backend & Cloud', group_es: 'Backend & Cloud', items: [
        { icon: 'devicon-supabase-plain colored', name: 'Supabase' },
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
        { icon: 'devicon-netlify-plain colored', name: 'Netlify' }
      ]},
      { group_en: 'Testing & CI', group_es: 'Tests y CI', items: [
        { icon: 'devicon-vitest-plain colored', name: 'Vitest' },
        { icon: 'devicon-githubactions-plain colored', name: 'GitHub Actions' }
      ]}
    ],
    // Galería con variantes reales: tema (claro/oscuro) x dispositivo (escritorio/celular)
    galleryModes: true,
    gallery: {
      desktop: [
        { file: 'login.png',                 cap_en: 'Login',                cap_es: 'Inicio de sesión' },
        { file: 'pantalla-carga.png',        cap_en: 'Loading screen',       cap_es: 'Pantalla de carga' },
        { file: 'dashboard.png',             cap_en: 'Dashboard',            cap_es: 'Panel principal' },
        { file: 'clientes.png',              cap_en: 'Clients',              cap_es: 'Clientes' },
        { file: 'nuevo-cliente.png',         cap_en: 'New client',           cap_es: 'Nuevo cliente' },
        { file: 'vehiculos.png',             cap_en: 'Vehicles',             cap_es: 'Vehículos' },
        { file: 'nuevo-vehiculo.png',        cap_en: 'New vehicle',          cap_es: 'Nuevo vehículo' },
        { file: 'perfil-vechiculo.png',      cap_en: 'Vehicle profile',      cap_es: 'Perfil de vehículo' },
        { file: 'ordenes-modo-tablero.png',  cap_en: 'Work orders (board)',  cap_es: 'Órdenes (tablero)' },
        { file: 'ordenes-modo-lista.png',    cap_en: 'Work orders (list)',   cap_es: 'Órdenes (lista)' },
        { file: 'nueva-orden.png',           cap_en: 'New work order',       cap_es: 'Nueva orden' },
        { file: 'orden-detalle.png',         cap_en: 'Work order detail',    cap_es: 'Detalle de orden' },
        { file: 'registrar-pago.png',        cap_en: 'Register payment',     cap_es: 'Registrar pago' }
      ],
      mobile: [
        { file: 'login.jpeg',                cap_en: 'Login',                cap_es: 'Inicio de sesión' },
        { file: 'pantalla-carga.jpeg',       cap_en: 'Loading screen',       cap_es: 'Pantalla de carga' },
        { file: 'dashboard.jpeg',            cap_en: 'Dashboard',            cap_es: 'Panel principal' },
        { file: 'stats.jpeg',                cap_en: 'Statistics',           cap_es: 'Estadísticas' },
        { file: 'clientes.jpeg',             cap_en: 'Clients',              cap_es: 'Clientes' },
        { file: 'nuevo-cliente.jpeg',        cap_en: 'New client',           cap_es: 'Nuevo cliente' },
        { file: 'vehiculos.jpeg',            cap_en: 'Vehicles',             cap_es: 'Vehículos' },
        { file: 'nuevo-vehiculo.jpeg',       cap_en: 'New vehicle',          cap_es: 'Nuevo vehículo' },
        { file: 'perfil-vehiculo-1.jpeg',    cap_en: 'Vehicle profile',      cap_es: 'Perfil de vehículo' },
        { file: 'perfil-vehiculo-2.jpeg',    cap_en: 'Vehicle profile (2)',  cap_es: 'Perfil de vehículo (2)' },
        { file: 'ordenes.jpeg',              cap_en: 'Work orders',          cap_es: 'Órdenes' },
        { file: 'nueva-orden.jpeg',          cap_en: 'New work order',       cap_es: 'Nueva orden' },
        { file: 'orden-detalle-1.jpeg',      cap_en: 'Work order detail',    cap_es: 'Detalle de orden' },
        { file: 'orden-detalle-2.jpeg',      cap_en: 'Work order detail (2)',cap_es: 'Detalle de orden (2)' },
        { file: 'orden-detalle-3.jpeg',      cap_en: 'Work order detail (3)',cap_es: 'Detalle de orden (3)' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Lead Developer', role_es: 'Lead Developer', github: 'JuanEspinoza8' },
      { name: 'Lucas',         role_en: 'Frontend Developer', role_es: 'Frontend Developer', github: 'Lucas-04git' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'law',
    freelance: true,
    title: 'Gestión de Estudio Jurídico',
    tagline_en: 'All-in-one platform to digitalize a law firm.',
    tagline_es: 'Plataforma integral para digitalizar un estudio jurídico.',
    status: 'In use',
    year: '2026',
    layout: 'web',
    accent: '#c9a227',
    cover: 'assets/images/projects/law/oscuro/expediente-detalle.png',
    links: {
      github: 'https://github.com/JuanEspinoza8/gestion-estudio-juridico',
      demo: null
    },
    desc_en: [
      'Comprehensive system for law firms that digitalizes the daily administration of the office: it centralizes clients, case files, hearing schedules and finances (fees, installments and payments), accessible from any device. In use by a real law firm; there is no public demo because it holds real client data.',
      'Layered REST API (routes, models and services) on Node.js and Express 5, with PostgreSQL and Supabase Storage. Input validation with zod, JWT + bcrypt, rate limiting and security headers with helmet (CSP). Automated tests with Jest and Supertest, including integration tests against an in-memory PostgreSQL, and CI on GitHub Actions. Installable as a PWA with a responsive design.'
    ],
    desc_es: [
      'Sistema integral para estudios de abogados que digitaliza la administración diaria del estudio: centraliza clientes, expedientes, agenda de audiencias y finanzas (honorarios, cuotas y pagos), accesible desde cualquier dispositivo. Está en uso por un estudio jurídico real; no tiene demo pública porque maneja datos reales de clientes.',
      'API REST en capas (rutas, modelos y servicios) sobre Node.js y Express 5, con PostgreSQL y Supabase Storage. Validación con zod, JWT + bcrypt, rate limiting y cabeceras de seguridad con helmet (CSP). Tests automatizados con Jest y Supertest, con integración contra PostgreSQL en memoria, y CI en GitHub Actions. Instalable como PWA, con diseño responsivo.'
    ],
    features_en: [
      'Analytics dashboard with "money on the street" and debtor ranking',
      'Fee and payment management with automatic balance deduction',
      'Fees split into installments with progress tracking',
      'Client–case file relation and PDF document uploads',
      'PDFs opened through short-lived signed URLs',
      'Interactive hearings calendar and procedural deadlines, with email reminders',
      'Per-client notes with due dates and personal quick notes',
      'Secure authentication (JWT, bcrypt), rate limiting and user audit logs',
      'Automated tests and CI',
      'Installable as a native app (PWA) with responsive mobile design'
    ],
    features_es: [
      'Dashboard analítico con capital "en la calle" y ranking de deudores',
      'Gestión de honorarios y pagos con descuento automático del saldo',
      'Honorarios en cuotas con seguimiento de la cuota en curso',
      'Relación cliente-expediente y carga de documentos PDF',
      'PDFs abiertos con URLs firmadas de corta duración',
      'Agenda interactiva de audiencias y vencimientos procesales, con recordatorios por email',
      'Notas por cliente con vencimiento y notas rápidas personales',
      'Autenticación segura (JWT, bcrypt), rate limiting y logs de auditoría de usuarios',
      'Tests automatizados y CI',
      'Instalable como app nativa (PWA) con diseño responsivo móvil'
    ],
    tech: [
      { group_en: 'Frontend', group_es: 'Frontend', items: [
        { icon: 'devicon-html5-plain colored', name: 'HTML5' },
        { icon: 'devicon-css3-plain colored', name: 'CSS3' },
        { icon: 'devicon-javascript-plain colored', name: 'JavaScript' },
        { icon: 'devicon-html5-plain colored', name: 'PWA' }
      ]},
      { group_en: 'Backend', group_es: 'Backend', items: [
        { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
        { icon: 'devicon-express-original', name: 'Express 5', mono: true },
        { icon: 'devicon-javascript-plain colored', name: 'zod' },
        { icon: 'devicon-javascript-plain colored', name: 'JWT + bcrypt' },
        { icon: 'devicon-javascript-plain colored', name: 'Multer' }
      ]},
      { group_en: 'Database & Cloud', group_es: 'Base de Datos & Cloud', items: [
        { icon: 'devicon-supabase-plain colored', name: 'Supabase' },
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' }
      ]},
      { group_en: 'Testing & CI', group_es: 'Tests y CI', items: [
        { icon: 'devicon-jest-plain colored', name: 'Jest + Supertest' },
        { icon: 'devicon-githubactions-plain colored', name: 'GitHub Actions' }
      ]}
    ],
    // Galería con variantes reales: tema (claro/oscuro) x dispositivo (escritorio/celular)
    galleryModes: true,
    gallery: {
      desktop: [
        { file: 'login.png',                 cap_en: 'Login',                cap_es: 'Inicio de sesión' },
        { file: 'clientes.png',              cap_en: 'Clients',              cap_es: 'Clientes' },
        { file: 'nuevo-cliente.png',         cap_en: 'New client',           cap_es: 'Nuevo cliente' },
        { file: 'detalle-cliente.png',       cap_en: 'Client detail',        cap_es: 'Detalle de cliente' },
        { file: 'expedientes.png',           cap_en: 'Case files',           cap_es: 'Expedientes' },
        { file: 'nuevo-expediente.png',      cap_en: 'New case file',        cap_es: 'Nuevo expediente' },
        { file: 'expediente-detalle.png',    cap_en: 'Case file detail',     cap_es: 'Detalle de expediente' },
        { file: 'registrar-pago.png',        cap_en: 'Register payment',     cap_es: 'Registrar pago' },
        { file: 'agenda-vista-mensual.png',  cap_en: 'Calendar (monthly)',   cap_es: 'Agenda (mensual)' },
        { file: 'agenda-vista-semanal.png',  cap_en: 'Calendar (weekly)',    cap_es: 'Agenda (semanal)' }
      ],
      mobile: [
        { file: 'login.jpeg',                cap_en: 'Login',                cap_es: 'Inicio de sesión' },
        { file: 'clientes.jpeg',             cap_en: 'Clients',              cap_es: 'Clientes' },
        { file: 'cliente-detalle.jpeg',      cap_en: 'Client detail',        cap_es: 'Detalle de cliente' },
        { file: 'expedientes.jpeg',          cap_en: 'Case files',           cap_es: 'Expedientes' },
        { file: 'expediente-detalle.jpeg',   cap_en: 'Case file detail',     cap_es: 'Detalle de expediente' },
        { file: 'registrar-pago.jpeg',       cap_en: 'Register payment',     cap_es: 'Registrar pago' },
        { file: 'agenda.jpeg',               cap_en: 'Calendar',             cap_es: 'Agenda' },
        { file: 'agenda-vista.mensual.jpeg', cap_en: 'Calendar (monthly)',   cap_es: 'Agenda (mensual)' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Lead Developer', role_es: 'Lead Developer', github: 'JuanEspinoza8' },
      { name: 'Lucas',         role_en: 'Frontend & UI/UX', role_es: 'Frontend & UI/UX', github: 'Lucas-04git' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'snapit',
    title: 'SnapIt',
    tagline_en: 'Mobile app to report problems on public spaces, with a web panel to review and manage them.',
    tagline_es: 'App móvil para reportar problemas de la vía pública, con un panel web para verlos y gestionarlos.',
    status: 'In Development',
    year: '2026',
    layout: 'mobile',
    alsoWeb: true,
    accent: '#14b8a6',
    cover: 'assets/images/projects/snapit/celular/01-mapa.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/SNAPIT',
      demo: null
    },
    desc_en: [
      'Final project of the University Technician degree in Web Development (UNCo, 2026), built by a team of three. Neighbors report problems on public spaces (potholes, broken sidewalks, curbs without ramps, streetlights out) from the mobile app, with a photo and their GPS location. The map can also be browsed on the web, where operators of each municipal area verify the reports, group them into incidents, prioritize them and track their progress.',
      'Monorepo with three parts: a REST API in Express + TypeScript + Prisma over PostgreSQL with PostGIS and pgRouting, the Flutter mobile app and a React web panel. Each report gets a trust score (photo metadata, location, the neighbor\'s reputation), priorities are recalculated every day, Claude (Anthropic API) helps classify photos, and the pedestrian network is imported from OpenStreetMap as the base for accessible walking routes. Every layer has its own CI job on GitHub Actions. Still in development.'
    ],
    desc_es: [
      'Trabajo final de la Tecnicatura Universitaria en Desarrollo Web (UNCo, 2026), hecho en un equipo de tres. Los vecinos reportan problemas de la vía pública (pozos, veredas rotas, cordones sin rampa, luminarias apagadas) desde la app móvil, con una foto y su ubicación GPS. El mapa también se puede ver desde la web, donde los operadores de cada área municipal verifican los reportes, los agrupan en incidentes, los priorizan y siguen su avance.',
      'Monorepo con tres partes: una API REST en Express + TypeScript + Prisma sobre PostgreSQL con PostGIS y pgRouting, la app móvil en Flutter y un panel web en React. Cada reporte tiene un nivel de confianza (metadatos de la foto, ubicación, reputación del vecino), la prioridad se recalcula todos los días, Claude (API de Anthropic) ayuda a clasificar las fotos y la red peatonal se importa de OpenStreetMap como base para los recorridos accesibles. Cada capa tiene su propio trabajo de CI en GitHub Actions. En desarrollo.'
    ],
    features_en: [
      'Mobile app to report with photo, category, severity and GPS location',
      'Public incident map in the app and on the web, with filters by category, status and date',
      'Trust score for each report: photo metadata, location and neighbor reputation',
      'Review queue for operators, with AI-assisted processing (Claude)',
      'Incident workflow in the API: forward to an area, track progress, comment and recategorize',
      'Daily priority recalculation',
      'Roles: neighbor, operator and administrator; administrators create operator accounts',
      'Email confirmation and password recovery',
      'Points of interest and pedestrian network imported from OpenStreetMap',
      'Tests against a real PostGIS database and CI for the API, web and app'
    ],
    features_es: [
      'App móvil para reportar con foto, categoría, gravedad y ubicación GPS',
      'Mapa público de incidentes en la app y en la web, con filtros por categoría, estado y fecha',
      'Nivel de confianza de cada reporte: metadatos de la foto, ubicación y reputación del vecino',
      'Bandeja de revisión para operadores, con procesamiento asistido por IA (Claude)',
      'Gestión de incidentes en la API: derivar a un área, registrar el avance, comentar y recategorizar',
      'Recálculo diario de la prioridad',
      'Roles de vecino, operador y administrador; el administrador da de alta a los operadores',
      'Confirmación de correo y recuperación de clave',
      'Puntos de interés y red peatonal importados de OpenStreetMap',
      'Tests contra PostGIS real y CI para la API, la web y la app'
    ],
    tech: [
      { group_en: 'Backend', group_es: 'Backend', items: [
        { icon: 'devicon-nodejs-plain colored', name: 'Node.js' },
        { icon: 'devicon-express-original', name: 'Express', mono: true },
        { icon: 'devicon-typescript-plain colored', name: 'TypeScript' },
        { icon: 'devicon-prisma-original', name: 'Prisma', mono: true },
        { icon: 'devicon-javascript-plain colored', name: 'JWT' }
      ]},
      { group_en: 'Database & GIS', group_es: 'Base de Datos y GIS', items: [
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
        { icon: 'devicon-postgresql-plain colored', name: 'PostGIS + pgRouting' },
        { icon: 'devicon-javascript-plain colored', name: 'OpenStreetMap' }
      ]},
      { group_en: 'Web', group_es: 'Web', items: [
        { icon: 'devicon-react-original colored', name: 'React 19' },
        { icon: 'devicon-vitejs-plain colored', name: 'Vite' },
        { icon: 'devicon-tailwindcss-original colored', name: 'Tailwind CSS 4' },
        { icon: 'devicon-react-original colored', name: 'TanStack Query' },
        { icon: 'devicon-javascript-plain colored', name: 'Leaflet' }
      ]},
      { group_en: 'Mobile', group_es: 'Mobile', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-flutter-plain colored', name: 'Riverpod' },
        { icon: 'devicon-flutter-plain colored', name: 'flutter_map' }
      ]},
      { group_en: 'AI & Tooling', group_es: 'IA y Herramientas', items: [
        { icon: 'devicon-claude-plain colored', name: 'Claude (Anthropic API)' },
        { icon: 'devicon-docker-plain colored', name: 'Docker' },
        { icon: 'devicon-vitest-plain colored', name: 'Vitest' },
        { icon: 'devicon-githubactions-plain colored', name: 'GitHub Actions' }
      ]}
    ],
    // App y panel sin modo oscuro: se elige solo el dispositivo (celular/ y escritorio/).
    // Capturas con datos de ejemplo en una base aislada, no con datos reales.
    galleryModes: true,
    galleryThemes: false,
    gallery: {
      mobile: [
        { file: '01-mapa.jpeg',            cap_en: 'Incident map',          cap_es: 'Mapa de incidentes' },
        { file: '02-ficha.jpeg',           cap_en: 'Incident card',         cap_es: 'Ficha de un incidente' },
        { file: '03-reportar.jpeg',        cap_en: 'Report a problem',      cap_es: 'Reportar un problema' },
        { file: '04-mis-reportes.jpeg',    cap_en: 'My reports',            cap_es: 'Mis reportes' }
      ],
      desktop: [
        { file: '01-mapa.jpeg',            cap_en: 'Public incident map',   cap_es: 'Mapa público de incidentes' },
        { file: '02-revision.jpeg',        cap_en: 'Operator review queue', cap_es: 'Revisión de reportes' },
        { file: '03-revisar-reporte.jpeg', cap_en: 'Reviewing a report',    cap_es: 'Revisar un reporte' },
        { file: '04-incidentes.jpeg',      cap_en: 'Incidents',             cap_es: 'Incidentes' },
        { file: '05-administracion.jpeg',  cap_en: 'Operator accounts',     cap_es: 'Alta de operadores' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza',    role_en: 'Full Stack Developer', role_es: 'Desarrollador Full Stack', github: 'JuanEspinoza8' },
      { name: 'Ezequiel Retamal', role_en: 'Backend & Web',        role_es: 'Backend y Web',            github: 'ezequiel95jr' },
      { name: 'Lautaro',          role_en: 'Frontend Developer',   role_es: 'Desarrollador Frontend',   github: 'LautyM22' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'eett',
    freelance: true,
    title: 'Gestión EETT',
    tagline_en: 'Mobile app for the maintenance and operations of electrical transformer substations, also usable from the PC.',
    tagline_es: 'App móvil de mantenimiento y operación de estaciones transformadoras eléctricas, que también se usa desde la PC.',
    status: 'In Development',
    year: '2026',
    layout: 'mobile',
    alsoWeb: true,
    accent: '#34d399',
    cover: 'assets/images/projects/eett/oscuro/celular/01-inicio.jpeg',
    links: {
      // Repo privado: es un trabajo para una empresa.
      github: null,
      demo: null
    },
    desc_en: [
      'App for the maintenance and operations area of a power transmission company, to manage its transformer substations: monthly inspection routines, alerts, switching operations, tasks, equipment and predictive maintenance, in one place instead of paper forms and spreadsheets.',
      'A single Flutter app with two targets: an Android APK for field work at the substation and the same app in the browser for the office. It is currently an interface demo with sample data and no server, used to validate every screen with the team before building the backend. Built with Riverpod and go_router, with light and dark themes and a design system whose AA contrast is checked by tests, and CI that runs analysis and tests and builds the web version and the APK. The screenshots blur the identifiers of real substations.'
    ],
    desc_es: [
      'App para el área de mantenimiento y operación de una empresa de transporte de energía eléctrica, para gestionar sus estaciones transformadoras: rutinas de inspección mensuales, alertas, maniobras, tareas, equipos y mantenimiento predictivo, en un solo lugar en vez de planillas de papel y Excel.',
      'Una sola app Flutter con dos salidas: el APK para Android, para el trabajo en la estación, y la misma app en el navegador de la PC. Hoy es una demo de interfaz con datos de ejemplo y sin servidor, para validar cada pantalla con el equipo antes de construir el backend. Hecha con Riverpod y go_router, con modo claro y oscuro, un sistema de diseño cuyo contraste AA verifican los tests, y CI que corre el análisis y los tests y compila la versión web y el APK. En las capturas están difuminados los identificadores de las estaciones reales.'
    ],
    features_en: [
      'Monthly inspection routine on the phone, field by field, with last month\'s values alongside',
      'Out-of-range readings flagged on the spot',
      'Alerts board with configurable columns, plus list and by-station views',
      'Weekly schedule of switching operations',
      'Tasks linked to alerts and operations',
      'Equipment, history and predictive maintenance test schedule',
      'Training tutorials with text, images and video',
      'Reports screen to export routines, alerts and tasks (PDF / Excel)',
      'Roles: technician, supervisor and administrator',
      'Light and dark themes'
    ],
    features_es: [
      'Rutina de inspección mensual en el celular, campo por campo, con los valores del mes anterior al lado',
      'Lecturas fuera de lo normal marcadas en el momento',
      'Tablero de alertas con columnas configurables, y vistas de lista y por estación',
      'Agenda semanal de maniobras',
      'Tareas vinculadas a alertas y maniobras',
      'Equipos, historial y cronograma de ensayos de mantenimiento predictivo',
      'Tutoriales de capacitación con texto, imágenes y video',
      'Pantalla de informes para bajar rutinas, alertas y tareas (PDF / Excel)',
      'Roles de técnico, supervisor y administrador',
      'Modo claro y oscuro'
    ],
    tech: [
      { group_en: 'Mobile & Web', group_es: 'Mobile y Web', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-materialui-plain colored', name: 'Material 3' }
      ]},
      { group_en: 'State & Navigation', group_es: 'Estado y Navegación', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Riverpod' },
        { icon: 'devicon-flutter-plain colored', name: 'go_router' },
        { icon: 'devicon-flutter-plain colored', name: 'fl_chart' },
        { icon: 'devicon-flutter-plain colored', name: 'video_player' }
      ]},
      { group_en: 'Quality', group_es: 'Calidad', items: [
        { icon: 'devicon-flutter-plain colored', name: 'flutter_test' },
        { icon: 'devicon-githubactions-plain colored', name: 'GitHub Actions' }
      ]}
    ],
    // Galería con variantes reales: tema (claro/oscuro) x dispositivo (celular/PC). El celular va primero.
    galleryModes: true,
    gallery: {
      mobile: [
        { file: '01-inicio.jpeg',         cap_en: 'Home',                 cap_es: 'Inicio' },
        { file: '02-carga-rutina.jpeg',   cap_en: 'Routine data entry',   cap_es: 'Carga de la rutina' },
        { file: '03-alertas.jpeg',        cap_en: 'Alerts board',         cap_es: 'Tablero de alertas' },
        { file: '04-alerta.jpeg',         cap_en: 'Alert detail',         cap_es: 'Ficha de alerta' },
        { file: '05-maniobras.jpeg',      cap_en: 'Switching operations', cap_es: 'Maniobras' },
        { file: '06-tareas.jpeg',         cap_en: 'Tasks',                cap_es: 'Tareas' },
        { file: '07-capacitacion.jpeg',   cap_en: 'Training tutorial',    cap_es: 'Tutorial de capacitación' }
      ],
      desktop: [
        { file: '01-inicio.jpeg',         cap_en: 'Home',                 cap_es: 'Inicio' },
        { file: '02-carga-rutina.jpeg',   cap_en: 'Routine data entry',   cap_es: 'Carga de la rutina' },
        { file: '03-alertas.jpeg',        cap_en: 'Alerts board',         cap_es: 'Tablero de alertas' },
        { file: '04-alerta.jpeg',         cap_en: 'Alert detail',         cap_es: 'Ficha de alerta' },
        { file: '05-maniobras.jpeg',      cap_en: 'Weekly operations',    cap_es: 'Maniobras de la semana' },
        { file: '06-tareas.jpeg',         cap_en: 'Tasks',                cap_es: 'Tareas' },
        { file: '07-capacitacion.jpeg',   cap_en: 'Training tutorial',    cap_es: 'Tutorial de capacitación' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Developer', role_es: 'Desarrollador', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'otto',
    freelance: true,
    title: 'Otto — Gestor Financiero',
    tagline_en: 'Personal finance manager for Android, used every day by a client.',
    tagline_es: 'Gestor de finanzas personales para Android que un cliente usa todos los días.',
    status: 'In use',
    year: '2026',
    layout: 'mobile',
    accent: '#22c55e',
    cover: 'assets/images/projects/otto/oscuro/celular/01-inicio.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/otto',
      demo: null
    },
    desc_en: [
      'Android personal finance manager, built for a client who uses it every day. It tracks income and expenses, savings goals in pesos and in dollars, fixed expenses, installment purchases and the salary, and it has a chat ("Decile a Otto") that understands messages like "I paid 50k for electricity and 12k at the supermarket".',
      'All the money lives in a single ledger: every transaction is a row between accounts (free pesos, dollars and one account per goal), amounts are stored in integer cents and balances come from a SQL view, so there are no stored totals to drift. One write service validates against the balance inside the same transaction, and salary, fixed expenses and installments are monthly plans that can never be applied twice. The client\'s existing database is migrated to the new schema with a check of balances, totals and installments before the commit, rolling everything back if they don\'t match. Tests cover the money type, the migration, the ledger, the plans, the backup and the lock.',
      'Data is stored in SQLite on the phone and excluded from Google backups. The AI is optional: when it\'s on, the chat sends the message text and the category names, and the monthly summary sends the totals, to Pollinations through a Cloudflare Worker that keeps the API key out of the app. It can be turned off in the settings, and the chat then uses a local parser.'
    ],
    desc_es: [
      'Gestor de finanzas personales para Android, hecho para un cliente que lo usa todos los días. Registra gastos e ingresos, metas de ahorro en pesos y en dólares, gastos fijos, compras en cuotas y el sueldo, y tiene un chat ("Decile a Otto") que entiende mensajes como "pagué 50 lucas de luz y el super 12 mil".',
      'Toda la plata vive en un libro único: cada movimiento es una fila entre cuentas (pesos libres, dólares y una cuenta por meta), los montos se guardan en centavos enteros y los saldos salen de una vista SQL, así que no hay totales guardados que se desincronicen. Un solo servicio de escritura valida contra el saldo dentro de la misma transacción, y el sueldo, los fijos y las cuotas son planes mensuales que no se pueden aplicar dos veces. La base que ya tenía el cliente se migra al esquema nuevo comparando saldos, totales y cuotas antes del commit, y si algo no cierra se revierte todo. Hay tests del tipo de dinero, la migración, el libro, los planes, el respaldo y el bloqueo.',
      'Los datos se guardan en SQLite en el teléfono y no van al backup de Google. La IA es opcional: cuando está activa, el chat envía el texto del mensaje y los nombres de las categorías, y el resumen del mes envía los totales, a Pollinations a través de un Cloudflare Worker que guarda la clave fuera de la app. Se puede apagar en los ajustes, y entonces el chat usa un parser local.'
    ],
    features_en: [
      'Available money in pesos, with dollars shown apart at the blue-market rate',
      'Savings goals in pesos or dollars: add, withdraw and move between goals',
      'Salary, fixed expenses and installments as monthly plans to confirm, never duplicated',
      'Category budgets with a yellow alert at 80% and a red one at 100%',
      'Chat that registers several transactions per message, with AI or a local parser',
      'Monthly summary with feedback from Otto',
      'Single ledger with amounts in cents and balances computed in SQL',
      'Verified migration of the client\'s database, with automatic rollback',
      'Fingerprint or PIN lock that also hides the app in recents and screenshots',
      'JSON backup, daily reminders and light/dark mode'
    ],
    features_es: [
      'Disponible en pesos, con los dólares aparte estimados al blue',
      'Metas de ahorro en pesos o en dólares: aportar, retirar y mover entre metas',
      'Sueldo, fijos y cuotas como planes mensuales para confirmar, sin duplicarse',
      'Presupuestos por categoría con alerta amarilla al 80% y roja al 100%',
      'Chat que registra varios movimientos por mensaje, con IA o con un parser local',
      'Resumen del mes con una devolución de Otto',
      'Libro único con montos en centavos y saldos calculados en SQL',
      'Migración verificada de la base del cliente, con rollback automático',
      'Bloqueo con huella o PIN que además oculta la app en recientes y capturas',
      'Respaldo en JSON, recordatorios diarios y modo claro/oscuro'
    ],
    tech: [
      { group_en: 'Mobile', group_es: 'Mobile', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-android-plain colored', name: 'Android' }
      ]},
      { group_en: 'State & Data', group_es: 'Estado y Datos', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Riverpod' },
        { icon: 'devicon-sqlite-plain colored', name: 'SQLite (sqflite)' },
        { icon: 'devicon-flutter-plain colored', name: 'fl_chart' }
      ]},
      { group_en: 'Security & AI', group_es: 'Seguridad e IA', items: [
        { icon: 'devicon-android-plain colored', name: 'local_auth' },
        { icon: 'devicon-android-plain colored', name: 'Local Notifications' },
        { icon: 'devicon-cloudflareworkers-plain colored', name: 'Cloudflare Workers' },
        { icon: 'devicon-flutter-plain colored', name: 'Pollinations AI' }
      ]}
    ],
    // Galería con variante de tema (claro/oscuro). App móvil: sin selector de dispositivo.
    galleryModes: true,
    gallery: {
      mobile: [
        { file: '01-inicio.jpeg',         cap_en: 'Dashboard',            cap_es: 'Inicio' },
        { file: '02-metas.jpeg',          cap_en: 'Savings goals',        cap_es: 'Metas de ahorro' },
        { file: '03-registrar.jpeg',      cap_en: 'New expense',          cap_es: 'Registrar gasto' },
        { file: '04-chat.jpeg',           cap_en: 'Chat with Otto',       cap_es: 'Chat con Otto' },
        { file: '05-fijos.jpeg',          cap_en: 'Fixed expenses',       cap_es: 'Gastos fijos' },
        { file: '06-cuotas.jpeg',         cap_en: 'Installments',         cap_es: 'Cuotas' },
        { file: '07-presupuestos.jpeg',   cap_en: 'Category budgets',     cap_es: 'Presupuestos por categoría' },
        { file: '08-configuracion.jpeg',  cap_en: 'Settings & privacy',   cap_es: 'Ajustes y privacidad' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Freelance Developer', role_es: 'Freelance Developer', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'quiz',
    freelance: true,
    title: 'QuizDaily+',
    tagline_en: 'Daily microlearning app with AI-generated quizzes.',
    tagline_es: 'App de microaprendizaje diario con quizzes generados por IA.',
    status: 'In use',
    year: '2025',
    layout: 'mobile',
    accent: '#7c6df2',
    cover: 'assets/images/projects/quiz/oscuro/celular/01-inicio.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/app_quiz',
      demo: null
    },
    desc_en: [
      'Daily microlearning app: study any topic through short daily reviews. Create questions by hand or generate them with AI from a text, a PDF or an image, edit them before saving, and keep your streak and daily goal.',
      'Built with Flutter and Hive for local storage: it works offline, except for the AI generator, which uses Google Gemini and validates its responses. Repository layer shared through Provider, study reminders scheduled in the local time zone, JSON backup and restore, and unit and widget tests.'
    ],
    desc_es: [
      'App de microaprendizaje diario: estudiá cualquier tema con repasos cortos todos los días. Creá preguntas a mano o generalas con IA a partir de un texto, un PDF o una imagen, editalas antes de guardarlas y mantené tu racha y tu meta diaria.',
      'Construida con Flutter y Hive como almacenamiento local: funciona sin conexión, salvo el generador con IA, que usa Google Gemini y valida sus respuestas. Capa de repositorios compartida con Provider, recordatorios programados en la zona horaria local, respaldo y restauración en JSON, y tests unitarios y de widgets.'
    ],
    features_en: [
      'AI question generation (Google Gemini) from text, PDF or image',
      'Edit generated questions before saving them',
      'Daily quiz with streak and daily goal',
      'Smart review: questions you miss come back more often',
      'Exam mode by subject and date',
      'Scheduled study reminders',
      'Charts and statistics to track your progress',
      'JSON backup and restore',
      'Delete questions with undo',
      'Light and dark mode'
    ],
    features_es: [
      'Generación de preguntas con IA (Google Gemini) desde texto, PDF o imagen',
      'Edición de las preguntas generadas antes de guardarlas',
      'Quiz diario con racha y meta diaria',
      'Repaso inteligente: las preguntas que fallás salen más seguido',
      'Modo examen por materia y fecha',
      'Recordatorios de estudio programados',
      'Gráficos y estadísticas para seguir tu progreso',
      'Respaldo y restauración en JSON',
      'Borrado de preguntas con "Deshacer"',
      'Modo claro y oscuro'
    ],
    tech: [
      { group_en: 'Mobile', group_es: 'Mobile', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-google-plain colored', name: 'Google Fonts' },
        { icon: 'devicon-flutter-plain colored', name: 'fl_chart' }
      ]},
      { group_en: 'State & Data', group_es: 'Estado y Datos', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Provider' },
        { icon: 'devicon-flutter-plain colored', name: 'Hive NoSQL' },
        { icon: 'devicon-flutter-plain colored', name: 'File Picker' },
        { icon: 'devicon-flutter-plain colored', name: 'Image Picker' },
        { icon: 'devicon-flutter-plain colored', name: 'Share Plus' }
      ]},
      { group_en: 'AI & Services', group_es: 'IA & Servicios', items: [
        { icon: 'devicon-google-plain colored', name: 'Google Gemini AI' },
        { icon: 'devicon-android-plain colored', name: 'flutter_local_notifications + timezone' }
      ]},
      { group_en: 'Testing', group_es: 'Tests', items: [
        { icon: 'devicon-flutter-plain colored', name: 'flutter_test' }
      ]}
    ],
    // Galería con variante de tema (claro/oscuro). App móvil: sin selector de dispositivo.
    galleryModes: true,
    gallery: {
      mobile: [
        { file: '01-inicio.jpeg',          cap_en: 'Home',              cap_es: 'Inicio' },
        { file: '02-quiz.jpeg',            cap_en: 'Daily quiz',        cap_es: 'Quiz diario' },
        { file: '03-generador-ia.jpeg',    cap_en: 'AI generator',      cap_es: 'Generador con IA' },
        { file: '04-nueva-pregunta.jpeg',  cap_en: 'Create question',   cap_es: 'Crear pregunta' },
        { file: '05-banco.jpeg',           cap_en: 'Question bank',     cap_es: 'Banco de preguntas' },
        { file: '06-progreso.jpeg',        cap_en: 'Progress & stats',  cap_es: 'Progreso y estadísticas' },
        { file: '07-configuracion.jpeg',   cap_en: 'Settings',          cap_es: 'Configuración' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Freelance Developer', role_es: 'Freelance Developer', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pes',
    title: 'PES League Manager V2',
    tagline_en: 'Manage your own multiplayer Master League with friends.',
    tagline_es: 'Gestioná tu propia Master League multijugador con amigos.',
    status: 'Beta',
    year: '2026',
    layout: 'mobile',
    accent: '#e0b64c',
    cover: 'assets/images/projects/pes/celular/01-hub.jpeg',
    links: {
      // El repo está privado por ahora: sin link para no mostrar un 404.
      github: null,
      demo: null
    },
    desc_en: [
      'Management system for PES/FIFA leagues with friends: a comprehensive platform to organize and run your own multiplayer Master League. Manage teams, players, live auctions, transfers, pack opening, sponsors, AI-generated news and league results from your phone, with real-time sync.',
      'V2 evolves the original with a full economy (live auctions, transfer market, mid-season shop, sponsors), an interactive gacha pack-opener, an advanced Squad Builder, and a deeper use of Google Gemini AI acting as the "press", generating personalized news and managing rivalries. All wrapped in a premium dark UI with gold accents.',
      'Honest note: I built this app to use on the spot with my group of friends, with no professional pretensions. It is the roughest of all my projects in terms of visual polish, but it does its job perfectly for what we needed at the time.'
    ],
    desc_es: [
      'Sistema de gestión para ligas de PES/FIFA con amigos: una plataforma integral para organizar y gestionar tu propia Master League multijugador. Administra equipos, jugadores, subastas en vivo, transferencias, apertura de sobres, patrocinadores, noticias generadas por IA y resultados de la liga desde tu móvil, con sincronización en tiempo real.',
      'La V2 evoluciona el original con una economía completa (subastas en vivo, mercado de pases, tienda de mitad de temporada, sponsors), un pack-opener gacha interactivo, un Squad Builder avanzado, y un uso más profundo de Google Gemini AI actuando como "Prensa", generando noticias personalizadas y gestionando rivalidades. Todo con una UI premium en modo oscuro con toques dorados.',
      'Nota honesta: hice esta app para usarla en el momento con mi grupo de amigos, sin pretensiones profesionales. Es la que más errores estéticos tiene de todos mis proyectos, pero cumple perfectamente su función para lo que necesitábamos en ese momento.'
    ],
    features_en: [
      'League & team management: seasons, multiplayer lobbies and waiting rooms',
      'Live auctions: interactive room to bid and sign players in real time',
      'Transfer market and mid-season shop',
      'Pack opening (Gacha): interactive pack-opener and mystery boxes',
      'League dashboard: standings, top scorers, fixtures and live results',
      'Squad Builder: line-ups and team administration',
      'Economy & sponsors: club finances and sponsorship system',
      'AI news & rivalries: personalized feed generated with Google Gemini',
      'Result loading by reading the match screenshot with Gemini'
    ],
    features_es: [
      'Gestión de ligas y equipos: temporadas, lobbies multijugador y salas de espera',
      'Subastas en vivo: sala interactiva para pujar y fichar jugadores en tiempo real',
      'Mercado de pases y tienda de mitad de temporada',
      'Apertura de sobres (Gacha): pack-opener interactivo y cajas misteriosas',
      'Dashboard de la liga: posiciones, goleadores, fixtures y resultados en vivo',
      'Squad Builder: alineaciones y administración de tu equipo',
      'Economía y patrocinios: finanzas del club y sistema de sponsors',
      'Noticias IA y rivalidades: feed personalizado generado con Google Gemini',
      'Carga de resultados leyendo la captura del partido con Gemini'
    ],
    tech: [
      { group_en: 'Frontend', group_es: 'Frontend', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-materialui-plain colored', name: 'Material Design 3' }
      ]},
      { group_en: 'Integrations', group_es: 'Integraciones', items: [
        { icon: 'devicon-google-plain colored', name: 'Google Gemini AI' },
        { icon: 'devicon-javascript-plain colored', name: 'Pollinations AI' },
        { icon: 'devicon-javascript-plain colored', name: 'Cloudinary' },
        { icon: 'devicon-flutter-plain colored', name: 'Image Picker' }
      ]},
      { group_en: 'Backend & Data', group_es: 'Backend & Datos', items: [
        { icon: 'devicon-firebase-plain colored', name: 'Firebase' },
        { icon: 'devicon-firebase-plain colored', name: 'Firestore' },
        { icon: 'devicon-firebase-plain colored', name: 'Firebase Auth' }
      ]}
    ],
    // App sólo en modo oscuro: galería simple (sin selector de tema).
    gallery: [
      { img: 'celular/01-hub.jpeg',            cap_en: 'League hub',              cap_es: 'Hub de ligas' },
      { img: 'celular/02-crear-torneo.jpeg',   cap_en: 'Create tournament',       cap_es: 'Crear torneo' },
      { img: 'celular/03-formatos.jpeg',       cap_en: 'Competition formats',     cap_es: 'Formatos (Liga/Copa/Champions)' },
      { img: 'celular/04-noticias-ia.jpeg',    cap_en: 'AI news feed',            cap_es: 'Noticias con IA' },
      { img: 'celular/05-resultados.jpeg',     cap_en: 'Match results',           cap_es: 'Resultados' },
      { img: 'celular/06-proximos.jpeg',       cap_en: 'Upcoming matches',        cap_es: 'Próximos partidos' },
      { img: 'celular/07-llaves.jpeg',         cap_en: 'Cup bracket',             cap_es: 'Vista de llaves' },
      { img: 'celular/08-tabla.jpeg',          cap_en: 'Standings',               cap_es: 'Tabla de posiciones' },
      { img: 'celular/09-rankings.jpeg',       cap_en: 'Rankings (ELO / Champions)', cap_es: 'Rankings (ELO / Champions)' },
      { img: 'celular/10-goleadores.jpeg',     cap_en: 'Top scorers',             cap_es: 'Goleadores' },
      { img: 'celular/11-stats-equipos.jpeg',  cap_en: 'Team stats',              cap_es: 'Stats de equipos' },
      { img: 'celular/12-tienda.jpeg',         cap_en: 'Pack store (Gacha)',      cap_es: 'Tienda de sobres' },
      { img: 'celular/13-gestion-equipo.jpeg', cap_en: 'Team management',         cap_es: 'Gestión de equipo' },
      { img: 'celular/14-calendario.jpeg',     cap_en: 'Team schedule',           cap_es: 'Calendario del equipo' },
      { img: 'celular/15-mercado.jpeg',        cap_en: 'Transfer market',         cap_es: 'Mercado de pases' },
      { img: 'celular/16-acta-ia.jpeg',        cap_en: 'AI result scan',          cap_es: 'Cargar resultado con IA' }
    ],
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Developer', role_es: 'Desarrollador', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'applocker',
    freelance: true,
    title: 'AppLocker',
    tagline_en: 'Native anti-procrastination app blocker for Android.',
    tagline_es: 'Bloqueador de apps anti-procrastinación nativo para Android.',
    status: 'In use',
    year: '2026',
    layout: 'mobile',
    accent: '#ef4444',
    cover: 'assets/images/projects/applocker/celular/01-inicio.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/AppLocker',
      demo: null
    },
    desc_en: [
      'Anti-procrastination app blocker: it blocks the apps you choose on the days and time ranges you set. Rules can only be changed inside a weekly edit window, so the block can\'t be turned off in a moment of weakness.',
      'Built natively with Kotlin and Jetpack Compose. An Accessibility Service detects which app comes to the foreground, and a pure blocking policy, tested with JUnit, decides whether to cover it with a lock screen. Outside the edit window it also blocks Android Settings, and days off are requested with TOTP codes whose secret is encrypted with the Android Keystore.'
    ],
    desc_es: [
      'Bloqueador de aplicaciones anti-procrastinación: bloquea las apps que elegís en los días y franjas horarias que definís. Las reglas solo se pueden cambiar dentro de una ventana de edición semanal, para que el bloqueo no se pueda desactivar en un momento de debilidad.',
      'Construida de forma nativa con Kotlin y Jetpack Compose. Un Accessibility Service detecta qué app pasa a primer plano y una política de bloqueo pura, testeada con JUnit, decide si cubrirla con una pantalla de bloqueo. Fuera de la ventana de edición también bloquea Ajustes, y los francos se piden con códigos TOTP cuyo secreto queda cifrado con el Android Keystore.'
    ],
    features_en: [
      'Pick apps to block from the installed apps list',
      'Block schedule by days and time ranges, which can cross midnight',
      'Weekly edit window: rules can only be changed on a chosen day and time',
      'Android Settings blocked outside the edit window',
      'Full-screen lock screen (Activity) over the blocked app',
      'Foreground app detection with an Accessibility Service, without reading screen content',
      'Anti-uninstall shield (Device Administrator)',
      'Battery optimization exemption; Android restarts the service after a reboot',
      'Day off: a one-time code from an authenticator app (TOTP) unlocks rule editing for 24 hours',
      'Attempt limit and secret encrypted with the Android Keystore',
      'Warning and shortcut when the accessibility service is off',
      'Blocking and TOTP logic tested with JUnit'
    ],
    features_es: [
      'Selección de aplicaciones a bloquear desde la lista de instaladas',
      'Horario de bloqueo por días y franjas horarias, que pueden cruzar la medianoche',
      'Ventana de edición semanal: las reglas solo se pueden modificar en un día y horario elegido',
      'Ajustes de Android bloqueado fuera de la ventana de edición',
      'Pantalla de bloqueo a pantalla completa (Activity) sobre la app bloqueada',
      'Detección de la app en primer plano con un Accessibility Service, sin leer el contenido de la pantalla',
      'Escudo anti-desinstalación (Device Administrator)',
      'Excepción de optimización de batería; Android vuelve a levantar el servicio al reiniciar',
      'Franco: un código de un solo uso de una app de autenticación (TOTP) habilita la edición de las reglas durante 24 horas',
      'Límite de intentos y secreto cifrado con Android Keystore',
      'Aviso y acceso directo si el servicio de accesibilidad está apagado',
      'Lógica de bloqueo y TOTP testeadas con JUnit'
    ],
    tech: [
      { group_en: 'UI & Presentation', group_es: 'UI y Presentación', items: [
        { icon: 'devicon-kotlin-plain colored', name: 'Kotlin' },
        { icon: 'devicon-jetpackcompose-plain colored', name: 'Jetpack Compose' },
        { icon: 'devicon-materialui-plain colored', name: 'Material 3' },
        { icon: 'devicon-android-plain colored', name: 'Navigation Compose' }
      ]},
      { group_en: 'State & Data', group_es: 'Estado y Datos', items: [
        { icon: 'devicon-android-plain colored', name: 'DataStore' },
        { icon: 'devicon-kotlin-plain colored', name: 'Coroutines + Flow' }
      ]},
      { group_en: 'Core Android & Security', group_es: 'Core Android y Seguridad', items: [
        { icon: 'devicon-android-plain colored', name: 'Accessibility Service' },
        { icon: 'devicon-android-plain colored', name: 'Device Admin' },
        { icon: 'devicon-android-plain colored', name: 'Android Keystore' },
        { icon: 'devicon-kotlin-plain colored', name: 'TOTP (RFC 6238)' }
      ]},
      { group_en: 'Testing', group_es: 'Tests', items: [
        { icon: 'devicon-junit-plain colored', name: 'JUnit' }
      ]}
    ],
    // App nativa sólo en modo oscuro: galería simple (sin selector de tema).
    gallery: [
      { img: 'celular/01-inicio.jpeg',       cap_en: 'Rules in effect',          cap_es: 'Reglas activas' },
      { img: 'celular/02-proteccion.jpeg',   cap_en: 'Protection status',        cap_es: 'Estado de protección' },
      { img: 'celular/03-bloqueo.jpeg',      cap_en: 'Blocked app',              cap_es: 'App bloqueada' },
      { img: 'celular/04-onboarding.jpeg',   cap_en: 'Accessibility onboarding', cap_es: 'Aviso de servicio apagado' },
      { img: 'celular/05-autenticador.jpeg', cap_en: 'Day-off authenticator',    cap_es: 'Autenticador del franco' },
      { img: 'celular/06-franco.jpeg',       cap_en: 'Request a day off',        cap_es: 'Pedir un franco' }
    ],
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Freelance Developer', role_es: 'Freelance Developer', github: 'JuanEspinoza8' }
    ]
  }
];
