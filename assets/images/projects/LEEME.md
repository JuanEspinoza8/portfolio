# 📸 Capturas de los proyectos

Cada proyecto tiene su propia carpeta dentro de `assets/images/projects/`.
Para que una captura aparezca en la página de detalle, sólo tenés que dejar el
archivo con el **nombre exacto** indicado en el `_LEEME.txt` de cada carpeta.

> Mientras un archivo no exista, la web muestra automáticamente un **placeholder**
> con el título de la captura, así que la página siempre se ve armada.
> Vos vas reemplazando los placeholders por capturas reales, sin tocar código.

## Cómo agregar / cambiar capturas

1. Entrá a la carpeta del proyecto (ej: `assets/images/projects/mecanica/`).
2. Guardá la captura con el nombre que dice el `_LEEME.txt` (ej: `01-dashboard.png`).
3. Recargá `project-details.html?project=<proyecto>` en el navegador. Listo.

## Formato recomendado

- **Apps web** (Mecánica, Estudio Jurídico): capturas **apaisadas** (horizontal),
  idealmente relación 16:10. Ej: 1600×1000 px.
- **Apps móviles** (Otto, QuizDaily+, PES, AppLocker): capturas **verticales**
  (pantalla del celular), relación 9:19.5. Ej: 1080×2340 px.
- Formato `.png` o `.jpg`. Peso recomendado < 500 KB por imagen (optimizalas).

## ¿Querés agregar MÁS capturas de las previstas?

Editá `data/projects.js`, buscá el proyecto y agregá un ítem al array `gallery`:

```js
{ img: '09-nueva.png', cap_en: 'New screen', cap_es: 'Pantalla nueva' }
```

Después dejá el archivo `09-nueva.png` en la carpeta del proyecto.

## Portadas de las tarjetas (home)

Las imágenes de portada de cada tarjeta están en `assets/images/`:
`mecanica.png`, `law.png`, `otto.png`, `quiz.png`, `pes.png`, `applocker.png`.
Podés reemplazarlas por una captura real manteniendo el mismo nombre.
