/* ==========================================================================
   LÓGICA COMPARTIDA DEL PORTFOLIO
   - Tema (claro/oscuro) e idioma (EN/ES) con persistencia en localStorage
   - Render dinámico de las tarjetas de proyectos (index)
   - Render de la página de detalle + galería con lightbox
   Depende de: data/projects.js  (window.PROJECTS)
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------- Tema e idioma --------------------------- */

  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  // Estado inicial desde localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedLang = localStorage.getItem('lang') || 'en';
  htmlEl.setAttribute('data-theme', savedTheme);
  bodyEl.classList.remove('lang-en', 'lang-es');
  bodyEl.classList.add('lang-' + savedLang);

  function refreshLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function setupToggles() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const langToggle = document.getElementById('lang-toggle');

    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', savedTheme === 'dark' ? 'moon' : 'sun');
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', function () {
        const current = htmlEl.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        if (themeIcon) themeIcon.setAttribute('data-lucide', next === 'dark' ? 'moon' : 'sun');
        refreshLucide();
      });
    }

    if (langToggle) {
      langToggle.addEventListener('click', function () {
        const isEn = bodyEl.classList.contains('lang-en');
        const next = isEn ? 'es' : 'en';
        bodyEl.classList.remove('lang-en', 'lang-es');
        bodyEl.classList.add('lang-' + next);
        localStorage.setItem('lang', next);
      });
    }
  }

  /* --------------------------- Utilidades ------------------------------ */

  function statusLabel(status) {
    const map = {
      'Production': { en: 'Production', es: 'Producción' },
      'Freelance': { en: 'Freelance', es: 'Freelance' },
      'In Development': { en: 'In Development', es: 'En desarrollo' }
    };
    return map[status] || { en: status, es: status };
  }

  function layoutLabel(layout) {
    return layout === 'mobile'
      ? { en: 'Mobile App', es: 'App Móvil' }
      : { en: 'Web App', es: 'App Web' };
  }

  // Placeholder SVG (data URI) para capturas que todavía no existen
  function buildPlaceholder(caption, accent, layout) {
    const w = layout === 'mobile' ? 600 : 1000;
    const h = layout === 'mobile' ? 1180 : 620;
    const safe = String(caption || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + accent + '" stop-opacity="0.16"/>' +
      '<stop offset="1" stop-color="' + accent + '" stop-opacity="0.03"/>' +
      '</linearGradient></defs>' +
      '<rect width="100%" height="100%" fill="#15151a"/>' +
      '<rect width="100%" height="100%" fill="url(#g)"/>' +
      '<rect x="1" y="1" width="' + (w - 2) + '" height="' + (h - 2) + '" fill="none" stroke="' + accent + '" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="10 8" rx="18"/>' +
      '<g transform="translate(' + (w / 2) + ',' + (h / 2 - 34) + ')" fill="none" stroke="' + accent + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.85">' +
      '<rect x="-34" y="-26" width="68" height="52" rx="8"/>' +
      '<circle cx="0" cy="2" r="13"/>' +
      '<path d="M-20 -26 l7 -10 h26 l7 10"/>' +
      '</g>' +
      '<text x="50%" y="' + (h / 2 + 44) + '" fill="#e8e8ea" font-family="Inter,Segoe UI,sans-serif" font-size="30" font-weight="600" text-anchor="middle">' + safe + '</text>' +
      '<text x="50%" y="' + (h / 2 + 82) + '" fill="#8a8a90" font-family="Inter,Segoe UI,sans-serif" font-size="20" text-anchor="middle">Captura pendiente</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  // Fallback global usado por el atributo onerror de las imágenes
  window.__imgFallback = function (img) {
    img.onerror = null;
    img.src = buildPlaceholder(img.dataset.cap, img.dataset.accent || '#888888', img.dataset.layout || 'web');
    img.classList.add('is-placeholder');
  };

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* --------------------- Render: tarjetas del index -------------------- */

  function renderProjectCards(container) {
    const projects = window.PROJECTS || [];
    container.innerHTML = projects.map(function (p) {
      const techIcons = p.tech.reduce(function (acc, g) { return acc.concat(g.items); }, [])
        .slice(0, 6)
        .map(function (t) {
          return '<i class="' + t.icon + '"' + (t.mono ? ' style="color: var(--text-primary)"' : '') + ' title="' + t.name + '"></i>';
        }).join('');

      const stt = statusLabel(p.status);
      const lyt = layoutLabel(p.layout);

      return '' +
        '<a href="project-details.html?project=' + p.slug + '" class="project-card" style="--accent:' + p.accent + '">' +
        '  <div class="project-info">' +
        '    <div class="project-header">' +
        '      <h4>' + p.title + '</h4>' +
        '      <i data-lucide="arrow-up-right" class="icon-link"></i>' +
        '    </div>' +
        '    <div class="project-badges">' +
        '      <span class="badge badge-type"><span class="en">' + lyt.en + '</span><span class="es">' + lyt.es + '</span></span>' +
        '      <span class="badge badge-status"><span class="en">' + stt.en + '</span><span class="es">' + stt.es + '</span></span>' +
        (p.freelance ? '      <span class="badge badge-freelance">Freelance</span>' : '') +
        '    </div>' +
        '    <p class="en">' + p.tagline_en + '</p>' +
        '    <p class="es">' + p.tagline_es + '</p>' +
        '    <div class="tech-stack-icons">' + techIcons + '</div>' +
        '  </div>' +
        '  <div class="project-image">' +
        '    <img src="' + p.cover + '" alt="' + p.title + '" loading="lazy" ' +
        '         data-cap="' + p.title + '" data-accent="' + p.accent + '" data-layout="' + p.layout + '" onerror="__imgFallback(this)">' +
        '  </div>' +
        '</a>';
    }).join('');

    refreshLucide();
  }

  /* --------------------- Render: página de detalle --------------------- */

  function getProject(slug) {
    return (window.PROJECTS || []).find(function (p) { return p.slug === slug; });
  }

  function renderDetail(root) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project');
    const p = getProject(slug);

    if (!p) {
      root.innerHTML = '<div class="not-found"><h1>404</h1>' +
        '<p class="en">Project not found.</p><p class="es">Proyecto no encontrado.</p>' +
        '<a class="back-link" href="index.html"><i data-lucide="arrow-left"></i>' +
        '<span class="en">Back to Home</span><span class="es">Volver al inicio</span></a></div>';
      refreshLucide();
      return;
    }

    document.title = p.title + ' | Juan Espinoza';
    root.style.setProperty('--accent', p.accent);

    const stt = statusLabel(p.status);
    const lyt = layoutLabel(p.layout);

    // --- Encabezado ---
    // El botón "Código Fuente" solo aparece si el proyecto tiene repo en GitHub.
    const githubMeta = p.links.github
      ? '<div class="meta-item"><i data-lucide="github"></i>' +
        '<a href="' + p.links.github + '" target="_blank" rel="noopener">' +
        '<span class="en">Source Code</span><span class="es">Código Fuente</span></a></div>'
      : '';
    const demoMeta = p.links.demo
      ? '<div class="meta-item"><i data-lucide="external-link"></i>' +
        '<a href="' + p.links.demo + '" target="_blank" rel="noopener">' +
        '<span class="en">Live Demo</span><span class="es">Ver Demo</span></a></div>'
      : '';
    const metaLinks = githubMeta + demoMeta;
    const metaBlock = metaLinks ? '  <div class="project-detail-meta">' + metaLinks + '</div>' : '';

    const header =
      '<div class="detail-hero">' +
      '  <div class="detail-hero-badges">' +
      '    <span class="badge badge-type"><span class="en">' + lyt.en + '</span><span class="es">' + lyt.es + '</span></span>' +
      '    <span class="badge badge-status"><span class="en">' + stt.en + '</span><span class="es">' + stt.es + '</span></span>' +
      (p.freelance ? '    <span class="badge badge-freelance">Freelance</span>' : '') +
      '    <span class="badge badge-year">' + p.year + '</span>' +
      '  </div>' +
      '  <h1>' + p.title + '</h1>' +
      '  <p class="detail-tagline en">' + p.tagline_en + '</p>' +
      '  <p class="detail-tagline es">' + p.tagline_es + '</p>' +
      metaBlock +
      '</div>';

    // --- Descripción ---
    const descEn = p.desc_en.map(function (t) { return '<p>' + t + '</p>'; }).join('');
    const descEs = p.desc_es.map(function (t) { return '<p>' + t + '</p>'; }).join('');
    const overview =
      '<section class="detail-section">' +
      '  <h3><span class="en">Overview</span><span class="es">Descripción</span></h3>' +
      '  <div class="project-full-description"><div class="en">' + descEn + '</div><div class="es">' + descEs + '</div></div>' +
      '</section>';

    // --- Funcionalidades ---
    function featList(arr) {
      return '<ul class="features-list">' + arr.map(function (f) {
        return '<li><i data-lucide="check"></i><span>' + f + '</span></li>';
      }).join('') + '</ul>';
    }
    const features =
      '<section class="detail-section">' +
      '  <h3><span class="en">Key Features</span><span class="es">Funcionalidades</span></h3>' +
      '  <div class="en">' + featList(p.features_en) + '</div>' +
      '  <div class="es">' + featList(p.features_es) + '</div>' +
      '</section>';

    // --- Galería (la grilla se rellena en initGallery) ---
    let controlsHtml = '';
    if (p.galleryModes) {
      const devices = Object.keys(p.gallery); // ['desktop','mobile'] o sólo ['mobile']
      const themeSeg =
        '<div class="seg" data-group="theme">' +
        '  <button type="button" class="seg-btn" data-val="claro"><i data-lucide="sun"></i><span class="en">Light</span><span class="es">Claro</span></button>' +
        '  <button type="button" class="seg-btn" data-val="oscuro"><i data-lucide="moon"></i><span class="en">Dark</span><span class="es">Oscuro</span></button>' +
        '</div>';
      const deviceSeg = devices.length > 1
        ? '<div class="seg" data-group="device">' +
          '  <button type="button" class="seg-btn" data-val="desktop"><i data-lucide="monitor"></i><span class="en">Desktop</span><span class="es">PC</span></button>' +
          '  <button type="button" class="seg-btn" data-val="mobile"><i data-lucide="smartphone"></i><span class="en">Phone</span><span class="es">Celular</span></button>' +
          '</div>'
        : '';
      controlsHtml = '<div class="gallery-controls">' + themeSeg + deviceSeg + '</div>';
    }

    const gallery =
      '<section class="detail-section">' +
      '  <div class="gallery-head">' +
      '    <h3><span class="en">Screenshots</span><span class="es">Capturas</span></h3>' +
      controlsHtml +
      '  </div>' +
      '  <div class="project-gallery" id="gallery-grid"></div>' +
      '</section>';

    // --- Stack tecnológico ---
    const techGroups = p.tech.map(function (grp) {
      const items = grp.items.map(function (t) {
        return '<div class="tech-chip"><i class="' + t.icon + '"' + (t.mono ? ' style="color: var(--text-primary)"' : '') + '></i><span>' + t.name + '</span></div>';
      }).join('');
      return '<div class="tech-group">' +
        '<h4><span class="en">' + grp.group_en + '</span><span class="es">' + grp.group_es + '</span></h4>' +
        '<div class="tech-chips">' + items + '</div></div>';
    }).join('');

    const tech =
      '<section class="detail-section project-detail-tech">' +
      '  <h3><span class="en">Tech Stack</span><span class="es">Stack Tecnológico</span></h3>' +
      '  <div class="tech-groups">' + techGroups + '</div>' +
      '</section>';

    // --- Equipo ---
    let team = '';
    if (p.contributors && p.contributors.length) {
      const people = p.contributors.map(function (c) {
        return '<a class="contributor" href="https://github.com/' + c.github + '" target="_blank" rel="noopener">' +
          '<img src="https://github.com/' + c.github + '.png" alt="' + c.name + '" loading="lazy">' +
          '<div><strong>' + c.name + '</strong>' +
          '<span class="en">' + c.role_en + '</span><span class="es">' + c.role_es + '</span></div></a>';
      }).join('');
      team =
        '<section class="detail-section">' +
        '  <h3><span class="en">Team</span><span class="es">Equipo</span></h3>' +
        '  <div class="contributors">' + people + '</div>' +
        '</section>';
    }

    root.innerHTML = header + overview + features + gallery + tech + team;
    refreshLucide();

    initGallery(root, p);
  }

  /* --------------------- Galería dinámica + Lightbox ------------------- */

  function initGallery(root, p) {
    const container = root.querySelector('#gallery-grid');
    if (!container) return;

    // Estado inicial: tema del sitio + primer dispositivo disponible
    const devices = p.galleryModes ? Object.keys(p.gallery) : [];
    const state = {
      theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'claro' : 'oscuro',
      device: devices.length ? devices[0] : 'desktop'
    };

    let shots = [];

    function computeShots() {
      if (p.galleryModes) {
        const list = p.gallery[state.device] || [];
        return list.map(function (g) {
          return {
            src: 'assets/images/projects/' + p.slug + '/' + state.theme + '/' +
                 (state.device === 'mobile' ? 'celular/' : '') + g.file,
            cap_en: g.cap_en, cap_es: g.cap_es,
            layout: state.device === 'mobile' ? 'mobile' : 'web'
          };
        });
      }
      return p.gallery.map(function (g) {
        return {
          src: 'assets/images/projects/' + p.slug + '/' + g.img,
          cap_en: g.cap_en, cap_es: g.cap_es,
          layout: p.layout
        };
      });
    }

    function bindFigures() {
      container.querySelectorAll('.gallery-item').forEach(function (fig, i) {
        fig.addEventListener('click', function () { open(i); });
      });
    }

    function renderGrid() {
      shots = computeShots();
      const layout = shots.length ? shots[0].layout : 'web';
      container.className = 'project-gallery ' + (layout === 'mobile' ? 'gallery-mobile' : 'gallery-web');
      container.innerHTML = shots.map(function (s, i) {
        return '<figure class="gallery-item" data-index="' + i + '">' +
          '<div class="gallery-frame">' +
          '<img src="' + s.src + '" alt="' + s.cap_en + '" loading="lazy" ' +
          'data-cap="' + s.cap_en + '" data-accent="' + p.accent + '" data-layout="' + s.layout + '" onerror="__imgFallback(this)">' +
          '<span class="gallery-zoom"><i data-lucide="maximize-2"></i></span>' +
          '</div>' +
          '<figcaption><span class="en">' + s.cap_en + '</span><span class="es">' + s.cap_es + '</span></figcaption>' +
          '</figure>';
      }).join('');
      refreshLucide();
      bindFigures();
    }

    // Controles segmentados (sólo si el proyecto tiene variantes)
    if (p.galleryModes) {
      root.querySelectorAll('.gallery-controls .seg').forEach(function (seg) {
        const group = seg.getAttribute('data-group'); // 'theme' | 'device'
        const current = group === 'theme' ? state.theme : state.device;
        seg.querySelectorAll('.seg-btn').forEach(function (btn) {
          if (btn.getAttribute('data-val') === current) btn.classList.add('is-active');
          btn.addEventListener('click', function () {
            const val = btn.getAttribute('data-val');
            if (group === 'theme') state.theme = val; else state.device = val;
            seg.querySelectorAll('.seg-btn').forEach(function (b) { b.classList.remove('is-active'); });
            btn.classList.add('is-active');
            renderGrid();
          });
        });
      });
    }

    // --- Lightbox ---
    const overlay = el('div', 'lightbox');
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close"><i data-lucide="x"></i></button>' +
      '<button class="lb-nav lb-prev" aria-label="Previous"><i data-lucide="chevron-left"></i></button>' +
      '<figure class="lb-figure"><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lb-nav lb-next" aria-label="Next"><i data-lucide="chevron-right"></i></button>';
    document.body.appendChild(overlay);
    refreshLucide();

    const lbFigure = overlay.querySelector('.lb-figure');
    const lbImg = overlay.querySelector('.lb-figure img');
    const lbCap = overlay.querySelector('.lb-figure figcaption');
    let current = 0;

    function currentLang() {
      return document.body.classList.contains('lang-es') ? 'es' : 'en';
    }

    function show(i) {
      if (!shots.length) return;
      current = (i + shots.length) % shots.length;
      const s = shots[current];
      const thumb = container.querySelectorAll('.gallery-item img')[current];
      lbImg.src = thumb ? thumb.src : s.src; // reutiliza la imagen ya resuelta
      lbCap.textContent = currentLang() === 'es' ? s.cap_es : s.cap_en;
      lbFigure.className = 'lb-figure ' + (s.layout === 'mobile' ? 'lb-mobile' : 'lb-web');
    }

    function open(i) { show(i); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function close() { overlay.classList.remove('open'); document.body.style.overflow = ''; }

    overlay.querySelector('.lb-close').addEventListener('click', close);
    overlay.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
    overlay.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
    });

    renderGrid();
  }

  /* ------------------------------ Arranque ----------------------------- */

  document.addEventListener('DOMContentLoaded', function () {
    setupToggles();

    const cardsContainer = document.getElementById('projects-list');
    if (cardsContainer) renderProjectCards(cardsContainer);

    const detailRoot = document.getElementById('project-content');
    if (detailRoot) renderDetail(detailRoot);

    refreshLucide();
  });
})();
