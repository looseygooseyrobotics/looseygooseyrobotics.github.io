# ResourceCard

Styles: public/styles/global.css (`.resource-card`)

The whole card is one link to a file, repo or outside resource; the border turns `--primary` teal on hover.

## Anatomy
- `.panel-title` — what it is.
- `.file-format` (optional) — format and size in `--orange`, `meta` style, for downloads only (`STEP · 1.5 MB`). Orange on `--surface` is 2.3:1, below AA (kept as in the source).
- One sentence in `--text-soft`.

## Rules
- `--surface`, `--border`, `--radius-sm` (tighter than other cards), `--shadow`, 1.25rem padding.
- Grid of three at 1.5rem gap; one column under 900px.
- Use the `download` attribute for files the site hosts; `target="_blank"` for outside links.
