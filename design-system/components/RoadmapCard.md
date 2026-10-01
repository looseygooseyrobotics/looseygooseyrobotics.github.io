# RoadmapCard

Styles: public/styles/global.css (`.roadmap-card`)

Numbered step card for a real sequence, with links pinned to the bottom.

## Rules
- Only for steps that happen in order. The `step-number` (01, 02, 03) in `--teal-dark` is information, not decoration.
- `--surface` card, `--border`, `--radius-xl`, `--shadow-soft`. It sits on the roadmap gradient (`--teal-wash` → `--bg` → `--peach-wash` at 135°).
- `.card-links` uses `margin-top: auto` so the links line up across cards of different lengths. Links are `--teal-dark`, 800 weight, underlined at 2px.

## What you supply
Step number, `h3` (`card-title`), a sentence or two in `--text-soft`, and one or two links.
