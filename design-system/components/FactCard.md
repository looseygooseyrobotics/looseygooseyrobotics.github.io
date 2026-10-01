# FactCard

Styles: public/styles/global.css (`.fact-card`)

Solid-color tile with one big figure, a short title and a sentence, used in a row of three for the game's headline numbers.

## Variants
Always use all three, in this order: `.fact-card-teal` (`--teal-light`), `.fact-card-orange` (`--orange-light`), `.fact-card-navy` (`--navy`, white text). Text is `--navy-deep` on the two light fills.

## What you supply
- `.fact-number` — the real figure with its real unit (`2:00`, `12″x12″x12″`), `fact-number` style.
- An `h3` (`fact-title`) and one sentence.

## Layout
Three equal columns, 1rem gap, `--radius-xl`, no border or shadow. Min height 215px on desktop; stacks to one column under 900px.
