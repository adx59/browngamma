# Brown GAMMA — browngamma.org

Static site for Brown University Grappling & Mixed Martial Arts, hosted on GitHub Pages.
Push to `main` and the site updates.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000
(a local server is needed for the team pages, which load `eboard-data.json`).

## Editing the site

### Hero slideshow — just drop photos in `images/banner/`
Any `.jpg / .png / .webp` in `images/banner/` becomes a slide. On push, the GitHub Action
(`.github/workflows/banner-manifest.yml`) rewrites `images/banner/manifest.json` and the
slideshow picks it up. Order is by filename (natural sort), so `01-comp.jpg`, `02-practice.jpg`
or `slide1.jpg`, `slide2.jpg` both work.

Tips: landscape photos ~1600–2000px wide, under ~400KB each (compress before adding;
`slide9.png` is currently 5.6MB and should be converted to JPG).

### Team pages — edit `eboard-data.json`
`eboard.html` and `past-leadership.html` render entirely from this file, and the home page
shows the Coaches + Captains groups. Groups render in order; each member is:

```json
{ "name": "First Last", "classYear": "'28", "role": "Treasurer",
  "image": "images/leadership/thumbnails/first.jpg", "color": "blue", "colorLabel": "BJJ Blue" }
```
- `color`: `white | blue | purple | brown | black | red` (red = striking). `colorLabel` is the text shown.
- Members with an `image` render as photo cards; members without one render in a compact list.
- Headshots: square crop, ~600×600px, JPG. Put them in `images/leadership/thumbnails/`.

### Club updates
Edit the `<article class="update">` blocks in `index.html` (`#updates`). Newest first.

### Fonts / colors
Set in `styles.css` under `:root`. One family, Archivo (Google Fonts), 400–900. Paper/ink/red palette; halftone + grain textures are CSS-only (hero, About figure, discipline cards, Join band).

## Editors
Adam Xu — Fall 2025
Kevin Zhu — Spring 2026
Drakeson Hu — Fall 2026
