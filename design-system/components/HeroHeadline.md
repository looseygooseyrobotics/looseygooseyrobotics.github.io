# HeroHeadline

Styles: public/styles/global.css (`.hero-headline`)

The home page's signature: each line of the h1 set in its own `--bg`-colored block with a hard `--shadow-offset` orange drop, stacked on `--navy`.

## Rules
- Only on `--navy`. The blocks are `--bg`, the text `--navy-deep`, so on a light ground the effect disappears.
- One `<span>` per line, three lines at most. Lines are allowed to differ in length; the ragged right edge is the point.
- Size is `hero-display`: `--text-4xl` (clamp 2.75rem → 4.75rem), Inter 700, `--leading-tight` (1.05), `--tracking-hero` (-0.03em), max 12ch.
- Put an `eyebrow` above it. In the hero it is `--on-navy`; elsewhere on dark grounds `--orange` reads at 5.3:1.
- Once per page, on the home hero. Inner pages use a plain `page-title` h1.

## What you supply
Short lines of copy in the site's voice. Write them as one running joke, not a slogan triad.
