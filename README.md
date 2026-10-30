# Portfolio — Juan Espinoza

Personal portfolio: https://juanespinoza8.github.io/portfolio/

Static site in plain HTML, CSS and JavaScript, published with GitHub Pages. It is bilingual (English / Spanish) and has a light and a dark theme.

## Structure

| Path | Content |
|---|---|
| `index.html` | Home: about, project cards and skills |
| `project-details.html` | Project detail page (`?project=<slug>`) |
| `data/projects.js` | Single source of truth for every project |
| `scripts/main.js` | Renders cards, detail pages, gallery and lightbox |
| `styles.css` | Styles and theme tokens |
| `assets/images/projects/<slug>/` | Screenshots for each project |

## Adding or editing a project

1. Add or edit an entry in `window.PROJECTS` inside `data/projects.js`.
2. Put the screenshots in `assets/images/projects/<slug>/` and list them in the entry's `gallery`.
   - Projects with `galleryModes: true` use `claro/` and `oscuro/` folders, with a `celular/` subfolder for mobile screenshots.
   - If an image is missing, the page shows a placeholder with the caption.
3. `status` accepts `'In use'`, `'Beta'`, `'In Development'` or `'Production'`. The labels are translated in `statusLabel` (`scripts/main.js`).

## Running locally

Any static server works, for example:

```bash
python -m http.server 8080
```

Then open http://localhost:8080.
