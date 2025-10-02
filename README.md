# Pancho Pinto — Perfil Convocatorias (Modern Repo)

Repositorio moderno con:
- **PDF auto-generado** del One‑Pager via **GitHub Actions + Pandoc**.
- **Formulario de contacto serverless** (Netlify Forms, sin backend).
- **Badges de métricas** cargadas desde `docs/metrics.json` y **gráfico** en la landing.
- **Plantilla de carta Gantt** (`docs/plan_gantt.xlsx`) + versión `.md`.
- **Catálogo modular** `/kits` para SIAMP, acuaponía y órtesis 3D (checklists, BOM y guías docentes).

## Contacto
- 📞 Tel/WhatsApp: [+56 9 200 279 92](tel:+56920027992)
- ✉️ Email: [franciscoandresp@gmail.com](mailto:franciscoandresp@gmail.com)

## Cómo usar
1. **Clona** y sube este repo a GitHub.
2. Activa **Pages** (Settings → Pages → deploy from `/root/site`).
3. El workflow `pdf.yml` generará `docs/executive_summary.pdf` en cada *push* a `main`.
4. Edita `docs/metrics.json` para actualizar los indicadores visibles en la landing.
5. Publica el formulario (`site/contact.html`) y prueba el envío (Netlify Forms).

## Notas sobre PDF
- El workflow instala `pandoc` y un subset de LaTeX para `xelatex`. Si necesitas soportes extra, amplía los paquetes de TeX Live.

## Estructura
```text
.
├─ .github/workflows/pdf.yml
├─ docs/
│  ├─ executive_summary.md
│  ├─ executive_summary.pdf   (se genera automáticamente)
│  ├─ metrics.json
│  ├─ plan_gantt.xlsx
│  └─ plan_gantt.md
├─ kits/
│  ├─ siamp/
│  ├─ acuaponia/
│  └─ ortesis3d/
└─ site/
   ├─ index.html
   └─ contact.html
```
