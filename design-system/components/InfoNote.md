# InfoNote

Styles: public/styles/global.css (`.info-note`)

General-purpose white panel for a titled block of copy, a video, or a figure. Static: no hover state.

## Rules
- `--surface`, 1px `--border`, `--radius-card`, `--shadow-card`, 1.5rem padding (1rem when it frames a video or image).
- Starts with a `.panel-title` (Inter 700, `--text-md`). Copy is `--text-soft` at 1.6 leading.
- Images inside sit on a white backdrop with `--radius-xs` and `object-fit: contain`. Videos go in a 16:9 `.video-frame` with `--radius-md`, with a `.frame-loading` span ("Loading video…") behind the iframe.
- The hero video uses the same shell as `.hero-panel` with 0.75rem padding.

## What you supply
A title and the content. Keep one idea per note.
