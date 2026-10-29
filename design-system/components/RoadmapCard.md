# RoadmapCard

Styles: public/styles/global.css (`.roadmap-card`)

Numbered step card for a real sequence, with links pinned to the bottom. The card itself is static; only its links are interactive.

## Rules
- Only for steps that happen in order. The `step-number` (01, 02, 03) in JetBrains Mono 600, `--teal-dark`, tabular figures, is information, not decoration.
- `--surface` card, `--border`, `--radius-card`, `--shadow-card`, no hover state. It sits on the flat `--bg` roadmap section.
- `h3` is `card-title`: Inter 700 at `--text-xl`.
- `.card-links` uses `margin-top: auto` so the links line up across cards of different lengths. Links are `--teal-dark`, 700 weight, underlined, at least 44px tall, with 0.75rem / 1.5rem gaps.

## What you supply
Step number, `h3`, a sentence or two in `--text-soft`, and one or two links.
