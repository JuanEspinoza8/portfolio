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
   ========================================================================== */

window.PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'mecanica',
    freelance: true,
    title: 'Mecánica Pistón',
    tagline_en: 'Offline-first management system for a mechanical workshop.',
    tagline_es: 'Sistema de gestión offline-first para taller mecánico.',
    status: 'Production',
    year: '2025',
    layout: 'web',          // 'web' (landscape) | 'mobile' (portrait)
    accent: '#22d3ee',
    cover: 'assets/images/projects/mecanica/oscuro/dashboard.png',
    links: {
      github: 'https://github.com/JuanEspinoza8/mecanica-piston',
      demo: null
    },
    desc_en: [
      'Management system for a mechanical workshop built as an offline-first PWA with real-time synchronization. It lets you manage clients, vehicles, work orders, spare parts, collections and multimedia files from any device — even with no internet connection.',
      'The whole app keeps working offline: changes are stored locally with Dexie.js (IndexedDB) and automatically synced to Supabase the moment the connection is back. Installable as a native app on desktop and mobile.'
    ],
    desc_es: [
      'Sistema de gestión para taller mecánico construido como una PWA offline-first con sincronización en tiempo real. Permite administrar clientes, vehículos, órdenes de trabajo, repuestos, cobranzas y archivos multimedia desde cualquier dispositivo, incluso sin conexión a internet.',
      'Toda la app sigue funcionando sin conexión: los cambios se guardan localmente con Dexie.js (IndexedDB) y se sincronizan automáticamente con Supabase apenas vuelve la conexión. Instalable como app nativa en escritorio y móvil.'
    ],
    features_en: [
      'Client and vehicle management',
      'Work orders with diagnosis, statuses and task checklist',
      'Spare parts loading with automatic cost calculation',
      'Financial module with real-time account statement',
      'Photo and PDF document uploads',
      'Global search by plate, model, name or phone',
      'Installable as a native app (PWA)',
      'Works offline with automatic sync on reconnect'
    ],
    features_es: [
      'Gestión de clientes y vehículos',
      'Órdenes de trabajo con diagnóstico, estados y checklist de tareas',
      'Carga de repuestos con cálculo automático de costos',
      'Módulo financiero con estado de cuenta en tiempo real',
      'Upload de fotos y documentos PDF',
      'Búsqueda global por patente, modelo, nombre o teléfono',
      'Instalable como app nativa (PWA)',
      'Funciona sin conexión con sincronización automática al reconectar'
    ],
    tech: [
      { group_en: 'Frontend', group_es: 'Frontend', items: [
        { icon: 'devicon-react-original colored', name: 'React 19' },
        { icon: 'devicon-vitejs-plain colored', name: 'Vite' },
        { icon: 'devicon-tailwindcss-original colored', name: 'Tailwind CSS 3' },
        { icon: 'devicon-react-original colored', name: 'shadcn/ui' },
        { icon: 'devicon-react-original colored', name: 'React Router v7' }
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
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' }
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
        { file: 'perfil-cliente.png',        cap_en: 'Client profile',       cap_es: 'Perfil de cliente' },
        { file: 'vehiculos.png',             cap_en: 'Vehicles',             cap_es: 'Vehículos' },
        { file: 'nuevo-vehiculo.png',        cap_en: 'New vehicle',          cap_es: 'Nuevo vehículo' },
        { file: 'perfil-vechiculo.png',      cap_en: 'Vehicle profile',      cap_es: 'Perfil de vehículo' },
        { file: 'ordenes-modo-tablero.png',  cap_en: 'Work orders (board)',  cap_es: 'Órdenes (tablero)' },
        { file: 'ordenes-modo-lista.png',    cap_en: 'Work orders (list)',   cap_es: 'Órdenes (lista)' },
        { file: 'nueva-orden.png',           cap_en: 'New work order',       cap_es: 'Nueva orden' },
        { file: 'orden-detalle.png',         cap_en: 'Work order detail',    cap_es: 'Detalle de orden' },
        { file: 'registrar-pago.png',        cap_en: 'Register payment',     cap_es: 'Registrar pago' },
        { file: 'buscador.png',              cap_en: 'Global search',        cap_es: 'Buscador global' }
      ],
      mobile: [
        { file: 'login.jpeg',                cap_en: 'Login',                cap_es: 'Inicio de sesión' },
        { file: 'pantalla-carga.jpeg',       cap_en: 'Loading screen',       cap_es: 'Pantalla de carga' },
        { file: 'dashboard.jpeg',            cap_en: 'Dashboard',            cap_es: 'Panel principal' },
        { file: 'stats.jpeg',                cap_en: 'Statistics',           cap_es: 'Estadísticas' },
        { file: 'clientes.jpeg',             cap_en: 'Clients',              cap_es: 'Clientes' },
        { file: 'nuevo-cliente.jpeg',        cap_en: 'New client',           cap_es: 'Nuevo cliente' },
        { file: 'perfil-cliente.jpeg',       cap_en: 'Client profile',       cap_es: 'Perfil de cliente' },
        { file: 'vehiculos.jpeg',            cap_en: 'Vehicles',             cap_es: 'Vehículos' },
        { file: 'nuevo-vehiculo.jpeg',       cap_en: 'New vehicle',          cap_es: 'Nuevo vehículo' },
        { file: 'perfil-vehiculo-1.jpeg',    cap_en: 'Vehicle profile',      cap_es: 'Perfil de vehículo' },
        { file: 'perfil-vehiculo-2.jpeg',    cap_en: 'Vehicle profile (2)',  cap_es: 'Perfil de vehículo (2)' },
        { file: 'ordenes.jpeg',              cap_en: 'Work orders',          cap_es: 'Órdenes' },
        { file: 'nueva-orden.jpeg',          cap_en: 'New work order',       cap_es: 'Nueva orden' },
        { file: 'orden-detalle-1.jpeg',      cap_en: 'Work order detail',    cap_es: 'Detalle de orden' },
        { file: 'orden-detalle-2.jpeg',      cap_en: 'Work order detail (2)',cap_es: 'Detalle de orden (2)' },
        { file: 'orden-detalle-3.jpeg',      cap_en: 'Work order detail (3)',cap_es: 'Detalle de orden (3)' },
        { file: 'buscador.jpeg',             cap_en: 'Global search',        cap_es: 'Buscador global' }
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
    status: 'Production',
    year: '2025',
    layout: 'web',
    accent: '#c9a227',
    cover: 'assets/images/projects/law/oscuro/dashboard.png',
    links: {
      github: 'https://github.com/JuanEspinoza8/gestion-estudio-juridico',
      demo: null
    },
    desc_en: [
      'Comprehensive system for law firms that digitalizes the daily administration of the office: it centralizes clients, case files, hearing schedules and finances, with a robust blind-payment system and installment plans, accessible from any device.',
      'Built with an MVC architecture on Node.js and Express, with PostgreSQL / Supabase for the data layer. Secured with JWT and Bcrypt, includes user audit logs and is installable as a native app (PWA) with a responsive mobile design.'
    ],
    desc_es: [
      'Sistema integral para estudios de abogados que digitaliza la administración diaria del estudio: centraliza clientes, expedientes, agenda de audiencias y finanzas, con un robusto sistema de pagos ciegos y planes de cuotas, accesible desde cualquier dispositivo.',
      'Construido con arquitectura MVC sobre Node.js y Express, con PostgreSQL / Supabase en la capa de datos. Protegido con JWT y Bcrypt, incluye logs de auditoría de usuarios y es instalable como app nativa (PWA) con diseño responsivo móvil.'
    ],
    features_en: [
      'Analytics dashboard with "money on the street" and debtor ranking',
      'Financial management with fees, blind payments and automatic deduction',
      'Automatic installment plans based on income',
      'Client–case file relation and PDF evidence upload module',
      'Interactive hearings calendar and procedural deadlines',
      'Quick notes system per case file',
      'Secure authentication (JWT, Bcrypt) and user audit logs',
      'Installable as a native app (PWA) with responsive mobile design'
    ],
    features_es: [
      'Dashboard analítico con capital "en la calle" y ranking de deudores',
      'Gestión financiera con honorarios, pagos ciegos y deducción automática',
      'Planes de cuotas automáticos según ingresos',
      'Relación cliente-expediente y módulo de subida de documentos PDF',
      'Agenda interactiva de audiencias y vencimientos procesales',
      'Sistema de notas rápidas por expediente',
      'Autenticación segura (JWT, Bcrypt) y logs de auditoría de usuarios',
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
        { icon: 'devicon-express-original', name: 'Express.js', mono: true },
        { icon: 'devicon-javascript-plain colored', name: 'Multer' },
        { icon: 'devicon-jest-plain colored', name: 'JWT + Bcrypt' }
      ]},
      { group_en: 'Database & Cloud', group_es: 'Base de Datos & Cloud', items: [
        { icon: 'devicon-supabase-plain colored', name: 'Supabase' },
        { icon: 'devicon-postgresql-plain colored', name: 'PostgreSQL' }
      ]}
    ],
    // Galería con variantes reales: tema (claro/oscuro) x dispositivo (escritorio/celular)
    galleryModes: true,
    gallery: {
      desktop: [
        { file: 'login.png',                 cap_en: 'Login',                cap_es: 'Inicio de sesión' },
        { file: 'dashboard.png',             cap_en: 'Analytics dashboard',  cap_es: 'Dashboard analítico' },
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
        { file: 'dashboard.jpeg',            cap_en: 'Analytics dashboard',  cap_es: 'Dashboard analítico' },
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
    slug: 'otto',
    freelance: true,
    title: 'Otto — Gestor Financiero',
    tagline_en: 'Private, offline-first personal finance manager.',
    tagline_es: 'Gestor de finanzas personales privado y offline-first.',
    status: 'Production',
    year: '2025',
    layout: 'mobile',
    accent: '#22c55e',
    cover: 'assets/images/projects/otto/oscuro/celular/01-inicio.jpeg',
    links: {
      github: null,
      demo: null
    },
    desc_en: [
      'Cross-platform personal finance manager with a 100% offline-first, privacy-focused architecture: your data never leaves the device. Track income and expenses by category, set budgets and monthly goals, and understand your money at a glance from the dashboard.',
      'Built with Flutter and Riverpod over a relational SQLite database, with charts (fl_chart), biometric lock (fingerprint / face), a blur privacy screen when the app goes to background, and JSON backup export/import. Its mascot "Otto" makes saving feel friendly.'
    ],
    desc_es: [
      'Gestor de finanzas personales multiplataforma con una arquitectura 100% offline-first y enfocada en la privacidad: tus datos nunca salen del dispositivo. Registra ingresos y gastos por categoría, define presupuestos y metas mensuales, y entiende tu plata de un vistazo desde el panel de control.',
      'Construido con Flutter y Riverpod sobre una base de datos relacional SQLite, con gráficos (fl_chart), bloqueo biométrico (huella / rostro), pantalla de privacidad con desenfoque al pasar a segundo plano, y exportación/importación de backups en JSON. Su mascota "Otto" hace del ahorro algo más amigable.'
    ],
    features_en: [
      'Dashboard with dynamic balance, donut chart and recent history',
      'Income/expense transactions with full CRUD',
      'Categories with icon, color and budget limits',
      'Real-time budget alerts (yellow at 80%, red at 100%)',
      'Recurring transactions module',
      'Savings goals with the "Otto" mascot',
      'Biometric lock + blur privacy screen in background',
      'JSON backup export/import (100% local, no cloud)',
      'Light/Dark theme and local notifications'
    ],
    features_es: [
      'Panel con balance dinámico, gráfico de dona e historial reciente',
      'Movimientos de ingreso/gasto con CRUD completo',
      'Categorías con ícono, color y límites de presupuesto',
      'Alertas de presupuesto en tiempo real (amarillo 80%, rojo 100%)',
      'Módulo de movimientos recurrentes',
      'Metas de ahorro con la mascota "Otto"',
      'Bloqueo biométrico + pantalla de privacidad al minimizar',
      'Exportación/importación de backups en JSON (100% local, sin nube)',
      'Tema Claro/Oscuro y notificaciones locales'
    ],
    tech: [
      { group_en: 'Mobile', group_es: 'Mobile', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-materialui-plain colored', name: 'Material 3' }
      ]},
      { group_en: 'State & Data', group_es: 'Estado y Datos', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Riverpod' },
        { icon: 'devicon-sqlite-plain colored', name: 'SQLite (sqflite)' },
        { icon: 'devicon-flutter-plain colored', name: 'fl_chart' }
      ]},
      { group_en: 'Device & Security', group_es: 'Dispositivo y Seguridad', items: [
        { icon: 'devicon-android-plain colored', name: 'local_auth (Biometría)' },
        { icon: 'devicon-android-plain colored', name: 'Local Notifications' },
        { icon: 'devicon-flutter-plain colored', name: 'share_plus / file_picker' }
      ]}
    ],
    // Galería con variante de tema (claro/oscuro). App móvil: sin selector de dispositivo.
    galleryModes: true,
    gallery: {
      mobile: [
        { file: '01-inicio.jpeg',             cap_en: 'Dashboard',            cap_es: 'Panel de control' },
        { file: '02-metas.jpeg',              cap_en: 'Savings goals',        cap_es: 'Metas de ahorro' },
        { file: '03-graficos.jpeg',           cap_en: 'Charts & AI assistant',cap_es: 'Gráficos y asistente IA' },
        { file: '04-estadisticas.jpeg',       cap_en: 'Statistics',           cap_es: 'Estadísticas' },
        { file: '05-registrar-gasto.jpeg',    cap_en: 'New expense',          cap_es: 'Registrar gasto' },
        { file: '06-registrar-ingreso.jpeg',  cap_en: 'New income',           cap_es: 'Registrar ingreso' },
        { file: '07-registrar-ahorro.jpeg',   cap_en: 'Add to savings',       cap_es: 'Registrar ahorro' },
        { file: '08-fijos.jpeg',              cap_en: 'Fixed expenses',       cap_es: 'Gastos fijos' },
        { file: '09-cuotas.jpeg',             cap_en: 'Installments',         cap_es: 'Cuotas' },
        { file: '10-configuracion.jpeg',      cap_en: 'Settings & security',  cap_es: 'Ajustes y seguridad' }
      ]
    },
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Lead Developer', role_es: 'Lead Developer', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'quiz',
    freelance: true,
    title: 'QuizDaily+',
    tagline_en: 'Daily microlearning app with AI-generated quizzes.',
    tagline_es: 'App de microaprendizaje diario con quizzes generados por IA.',
    status: 'Production',
    year: '2025',
    layout: 'mobile',
    accent: '#7c6df2',
    cover: 'assets/images/projects/quiz/oscuro/celular/01-inicio.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/app_quiz',
      demo: null
    },
    desc_en: [
      'Daily microlearning educational app: study any topic through daily reviews. Create quizzes manually, import them, or generate them automatically using Artificial Intelligence, then track your progress and reach your learning goals.',
      'Built with Flutter and an ultra-fast Hive NoSQL local database (works 100% offline), integrating Google Gemini AI for automatic question generation, local notifications for study reminders, and charts to visualize your progress.'
    ],
    desc_es: [
      'App educativa de microaprendizaje diario: estudia cualquier tema mediante repasos diarios. Crea cuestionarios manualmente, impórtalos o genéralos automáticamente usando Inteligencia Artificial, y haz un seguimiento de tu progreso para alcanzar tus metas de aprendizaje.',
      'Construido con Flutter y una base de datos local Hive NoSQL ultra-rápida (funciona 100% offline), integrando Google Gemini AI para la generación automática de preguntas, notificaciones locales para recordar tus repasos, y gráficos para visualizar tu progreso.'
    ],
    features_en: [
      'Automatic question generation with AI (Google Gemini)',
      'Manual creation and import of question banks',
      'Daily quizzes to keep the study habit',
      'Local notifications to remember your learning sessions',
      'Charts and statistics to track your progress',
      'Daily study goals',
      'Ultra-fast local database (works 100% offline)'
    ],
    features_es: [
      'Generación automática de preguntas con IA (Google Gemini)',
      'Creación manual e importación de bancos de preguntas',
      'Quizzes diarios para mantener el hábito de estudio',
      'Notificaciones locales para recordar tus sesiones de aprendizaje',
      'Gráficos y estadísticas para el seguimiento de tu progreso',
      'Establecimiento de metas de estudio diarias',
      'Base de datos local ultra-rápida (funciona 100% offline)'
    ],
    tech: [
      { group_en: 'Mobile', group_es: 'Mobile', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-google-plain colored', name: 'Google Fonts' },
        { icon: 'devicon-flutter-plain colored', name: 'fl_chart' }
      ]},
      { group_en: 'State & Data', group_es: 'Estado y Datos', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Hive NoSQL' },
        { icon: 'devicon-flutter-plain colored', name: 'File Picker' },
        { icon: 'devicon-flutter-plain colored', name: 'Image Picker' },
        { icon: 'devicon-flutter-plain colored', name: 'Share Plus' }
      ]},
      { group_en: 'AI & Services', group_es: 'IA & Servicios', items: [
        { icon: 'devicon-google-plain colored', name: 'Google Gemini AI' },
        { icon: 'devicon-android-plain colored', name: 'Local Notifications' }
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
      { name: 'Juan Espinoza', role_en: 'Lead Developer', role_es: 'Lead Developer', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'pes',
    title: 'PES League Manager V2',
    tagline_en: 'Manage your own multiplayer Master League with friends.',
    tagline_es: 'Gestioná tu propia Master League multijugador con amigos.',
    status: 'Production',
    year: '2025',
    layout: 'mobile',
    accent: '#e0b64c',
    cover: 'assets/images/projects/pes/celular/01-hub.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/pes_league_manager_v2',
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
      'AI news & rivalries: personalized feed generated with Google Gemini'
    ],
    features_es: [
      'Gestión de ligas y equipos: temporadas, lobbies multijugador y salas de espera',
      'Subastas en vivo: sala interactiva para pujar y fichar jugadores en tiempo real',
      'Mercado de pases y tienda de mitad de temporada',
      'Apertura de sobres (Gacha): pack-opener interactivo y cajas misteriosas',
      'Dashboard de la liga: posiciones, goleadores, fixtures y resultados en vivo',
      'Squad Builder: alineaciones y administración de tu equipo',
      'Economía y patrocinios: finanzas del club y sistema de sponsors',
      'Noticias IA y rivalidades: feed personalizado generado con Google Gemini'
    ],
    tech: [
      { group_en: 'Frontend', group_es: 'Frontend', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Flutter' },
        { icon: 'devicon-dart-plain colored', name: 'Dart' },
        { icon: 'devicon-materialui-plain colored', name: 'Material Design 3' }
      ]},
      { group_en: 'State & Integrations', group_es: 'Estado e Integraciones', items: [
        { icon: 'devicon-flutter-plain colored', name: 'Provider' },
        { icon: 'devicon-flutter-plain colored', name: 'Image Picker' },
        { icon: 'devicon-google-plain colored', name: 'Google Gemini AI' }
      ]},
      { group_en: 'Backend & Data', group_es: 'Backend & Datos', items: [
        { icon: 'devicon-firebase-plain colored', name: 'Firebase' },
        { icon: 'devicon-firebase-plain colored', name: 'Firestore' },
        { icon: 'devicon-firebase-plain colored', name: 'Firebase Auth' },
        { icon: 'devicon-firebase-plain colored', name: 'Firebase Storage' }
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
      { name: 'Juan Espinoza', role_en: 'Lead Developer', role_es: 'Lead Developer', github: 'JuanEspinoza8' }
    ]
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'applocker',
    freelance: true,
    title: 'AppLocker',
    tagline_en: 'Native anti-procrastination app blocker for Android.',
    tagline_es: 'Bloqueador de apps anti-procrastinación nativo para Android.',
    status: 'Production',
    year: '2025',
    layout: 'mobile',
    accent: '#ef4444',
    cover: 'assets/images/projects/applocker/celular/01-inicio.jpeg',
    links: {
      github: 'https://github.com/JuanEspinoza8/AppLocker',
      demo: null
    },
    desc_en: [
      'Anti-procrastination app blocker: it blocks specific applications during the days and time ranges you set to avoid distractions and boost your productivity. Designed with a strict focus to prevent bypasses and keep the block active no matter what.',
      'Built natively for Android with Kotlin and Jetpack Compose, it leverages deep Android APIs — Accessibility Service and Usage Stats for precise detection, an overlay screen, auto-start on boot, and Device Administrator protection against uninstall.'
    ],
    desc_es: [
      'Bloqueador de aplicaciones anti-procrastinación: bloquea aplicaciones específicas en los días y franjas horarias que definís para evitar distracciones y mejorar tu productividad. Diseñada con un enfoque estricto para evitar anulaciones y mantener el bloqueo activo pase lo que pase.',
      'Construido de forma nativa para Android con Kotlin y Jetpack Compose, aprovecha APIs profundas de Android: Accessibility Service y Usage Stats para detección precisa, una pantalla de superposición (overlay), auto-inicio al encender, y protección contra desinstalación con Device Administrator.'
    ],
    features_en: [
      'Pick apps to block from the installed apps list',
      'Strict block schedule by days and time ranges',
      'Weekly edit window: rules can only be changed on a chosen day and time (bypass-proof)',
      'Overlay screen that prevents the use of blocked apps',
      'Precise usage detection via Accessibility Service and Usage Stats',
      'Strict persistence: auto-start on boot and battery-kill protection',
      'Anti-uninstall shield (Device Administrator)',
      '"Day off" mode to lift the block temporarily (vacations)'
    ],
    features_es: [
      'Selección de aplicaciones a bloquear desde la lista de instaladas',
      'Horario estricto de bloqueo por días y franjas horarias',
      'Ventana de edición semanal: las reglas solo se pueden modificar en un día y horario elegido (anti-anulación)',
      'Pantalla de superposición (overlay) que impide el uso de apps bloqueadas',
      'Detección precisa de uso mediante Accessibility Service y Usage Stats',
      'Persistencia estricta: auto-inicio al encender y protección contra cierre por batería',
      'Escudo anti-desinstalación (Device Administrator)',
      'Modo "franco" para levantar el bloqueo puntualmente (vacaciones)'
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
        { icon: 'devicon-kotlin-plain colored', name: 'Coroutines' }
      ]},
      { group_en: 'Core Android', group_es: 'Core Android', items: [
        { icon: 'devicon-android-plain colored', name: 'Accessibility Service' },
        { icon: 'devicon-android-plain colored', name: 'Device Admin' },
        { icon: 'devicon-android-plain colored', name: 'Foreground Services' }
      ]}
    ],
    // App nativa sólo en modo oscuro: galería simple (sin selector de tema).
    gallery: [
      { img: 'celular/01-inicio.jpeg',     cap_en: 'Home & block schedule', cap_es: 'Inicio y horario de bloqueo' },
      { img: 'celular/02-proteccion.jpeg', cap_en: 'Protection & rules',    cap_es: 'Estado de protección' }
    ],
    contributors: [
      { name: 'Juan Espinoza', role_en: 'Freelance Developer', role_es: 'Freelance Developer', github: 'JuanEspinoza8' }
    ]
  }
];
