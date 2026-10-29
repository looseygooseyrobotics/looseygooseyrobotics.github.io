# ResourceCard

Styles: public/styles/global.css (`.resource-card`)

The whole card is one link to a file, repo or outside resource, and it is styled to look like one.

## Anatomy
- `.panel-title` — what it is, in `--primary` (`--teal-dark`), underlined, with a trailing arrow (hidden from screen readers).
- `.file-format` (optional) — format and size for downloads only (`STEP · 1.5 MB`), JetBrains Mono 500 at `--text-sm` in `--orange-text` (6.0:1 on `--surface`).
- One sentence in `--text-soft`.

## Behaviour
- Hover and focus turn the border `--primary`, deepen the shadow from `--shadow-card` to `--shadow` and thicken the title underline. No lift.
- Focus also shows the shared 3px `--focus-ring` outline.

## Rules
- `--surface`, `--border`, `--radius-card`, `--shadow-card`, 1.25rem padding.
- Grid of three at 1.5rem gap; one column under 900px.
- Use the `download` attribute for files the site hosts; `target="_blank"` for outside links, with a `.visually-hidden` " (opens in new tab)".
