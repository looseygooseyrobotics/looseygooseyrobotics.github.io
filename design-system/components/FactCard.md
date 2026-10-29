# FactCard

Styles: public/styles/global.css (`.fact-card`)

Tinted tile with one big figure, a short title and a sentence, used in a row of three for the game's headline numbers. It is information, not a link.

## Variants
Always use all three, in this order: `.fact-card-teal` (`--teal-tint`, with a 1px `--border` so it holds its edge on `--surface`), `.fact-card-orange` (`--orange-tint`), `.fact-card-navy` (`--navy`, white text). They step from pale to mid to dark, so they read apart by lightness, not just hue. Text is `--navy-deep` on the two tints (15.4:1 and 11.0:1).

## What you supply
- `.fact-number` — the real figure with its real unit (`2:00`, `12″x12″x12″`), in JetBrains Mono 600 at `--text-2xl` with tabular figures.
- An `h3` (`fact-title`, `--text-lg`) and one sentence.

## Layout
Three equal columns, 1rem gap, `--radius-card`, no shadow. Stacks to one column under 900px.

## Don't
Give it a hover state, a pointer cursor or a shadow. It isn't clickable and shouldn't look it.
