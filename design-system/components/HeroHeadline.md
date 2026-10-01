# HeroHeadline

Styles: public/styles/global.css (`.hero-headline`)

The home page's signature: each line of the h1 set in its own `--bg`-colored block with a hard `--shadow-offset` orange drop, stacked on `--navy`.

## Rules
- Only on `--navy`. The blocks are `--bg`, the text `--navy-deep`, so on a light ground the effect disappears.
- One `<span>` per line, three lines at most. Lines are allowed to differ in length; the ragged right edge is the point.
- Size is `hero-display`: clamp(2.8rem, 6vw, 5.25rem), 0.98 leading, -0.06em tracking, max 12ch.
- Put an `eyebrow` above it (orange reads at 5.3:1 on navy).
- Once per page, on the home hero. Inner pages use a plain `page-title` h1.

## What you supply
Short lines of copy in the site's voice. Write them as one running joke, not a slogan triad.
