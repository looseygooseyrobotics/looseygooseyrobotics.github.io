# Loosey Goosey Robotics design system

Loosey Goosey Robotics runs low-stakes robotics competitions for friends, beginners and veterans who want to build robots without the pressure of a real league. The look is bright and blocky: deep navy grounds, a hot orange accent used sparingly, teal for relief, big tight headlines and chunky rounded cards. It should feel like a well-run event put on by people who are clearly having fun.

## How it fits together

| What | Where |
| --- | --- |
| Tokens (color, type, spacing, radius, shadow) | [`public/styles/tokens.css`](../public/styles/tokens.css) |
| Shared component styles | [`public/styles/global.css`](../public/styles/global.css) |
| Page- and section-specific styles | `<style>` blocks in `src/pages/*.astro` and `src/components/*.astro` |
| Component guidelines | [`components/`](components/) |
| Logos and images | `public/styles/images/` |
| Web fonts (Inter, JetBrains Mono) | Google Fonts `<link>` in `src/layouts/BaseLayout.astro` |

`BaseLayout.astro` loads `tokens.css` before `global.css`, so every page and scoped `<style>` block can use the variables.

Rules for changing styles:

- Use a token, never a raw hex, rgba or radius. If nothing fits, add a token to `tokens.css` with a comment saying where it is used, then use it.
- A component used on more than one page belongs in `global.css`, not in a page's `<style>` block.
- The Zippy Manager device mockup keeps a few local literals (the macOS window dots, screenshot backdrops and glow alphas). They imitate hardware, not the brand, so don't promote them to tokens or reuse them elsewhere.

## Voice and copy

- Relaxed, self-deprecating and a little irreverent. The home page jokes about inebriation, poor reffing and bribery, and the game is described as "a fast, friendly robotics... thing". Match that; don't sanitize it.
- Write plain conversational sentences. Avoid short slogan triads ("Score the field. Reach the tower. Hang on.") and repeating a word root in one sentence ("built for the joy of the build").
- Jokes can look like mistakes. "Free99" is a pun meaning actually free; "50% chance of it working as intended" is the point. Ask before "fixing" odd copy.
- Address the reader as "you" and the organizers as "we". Sentence case for headings and buttons ("Start your team", "Read the rules"). Uppercase only in eyebrows and spec labels.
- Use real units with prime marks and a proper times sign: `12″x12″x12″`, `4' × 8'`, `3.5" × 3.5" × 0.5"`, `2:00` for match length.
- No emoji.

Real examples to calibrate against:

> Hexy Hustle is a fast, friendly robotics... thing, where you design a piece of junk, and then are thumped by superior pieces of junk.

> Zippy Manager is a free desktop app that runs the tournament for you (minus choosing a date, providing a venue, coordinating transportation, and finding volunteers).

## Color

- The page ground is `--bg`, a warm off-white. Cards and panels are `--surface` with a 1px `--border`.
- Text is `--text` (navy) for headings and `--text-soft` for every paragraph, list and caption.
- `--navy` and `--navy-deep` are full-bleed section grounds: the hero is `--navy`, the Zippy Manager section and footer are `--navy-deep`. On them use `--on-navy` for headings and the `--on-navy-*` tokens for copy, and add `.ground-dark` to the section (the hero and footer get it automatically) so focus rings and eyebrows switch to their dark-ground colors.
- `--orange` is the one accent: primary buttons, the logo ring, small marks like the field-spec rule and the hero headline's offset shadow. It is never a section ground or a big fill.
- Orange as text: `--orange-text` (a burnt orange) on light grounds, `--orange` on navy. `.eyebrow`, `.section-label` and `.file-format` already do this.
- `--teal` is decorative (the hero disc, hex outlines, focus outlines on dark). For teal text use `--teal-dark` (`--primary`).
- The three fact-card fills are `--teal-tint`, `--orange-tint` and `--navy`, always together. They step down in lightness (pale, mid, dark) so they read apart without relying on hue. Text is `--navy-deep` on the tints.
- The about section sits on `--sand-wash`, a calm warm ground, with `--text` headings, `--text-soft` copy and a `.button-dark`.
- Home page sections alternate grounds: `--navy` hero, `--surface` competition, `--navy-deep` Zippy, `--bg` roadmap, `--sand-wash` about, `--navy-deep` footer. Don't put two sections with the same ground next to each other.
- `--teal-light`, `--orange-light`, `--teal-wash` and `--peach-wash` survive only for the Zippy section. `--yellow`, `--surface-muted`, `--teal-darker` and `--text-on-orange` are defined but unused.

### Gradients

None on section grounds; every section is one flat token. Avoid them elsewhere too. The Zippy device mockup's bezel is the one exception, because it imitates hardware.

### Contrast

Every text pair on the site meets WCAG AA (4.5:1 for body text). Ratios for the pairs that are easy to get wrong:

| Pair | Ratio | Where |
| --- | --- | --- |
| `--text-soft` on `--bg` / `--surface` / `--sand-wash` | 5.9 / 6.5 / 5.0:1 | Running copy |
| `--text` on `--sand-wash` | 11.4:1 | About heading |
| `--orange-text` on `--bg` / `--surface` / `--sand-wash` | 5.5 / 6.0 / 4.7:1 | Eyebrows, file-format lines |
| `--orange` on `--navy` / `--navy-deep` | 5.3 / 6.3:1 | Orange text on dark grounds |
| `--navy-deep` on `--orange` | 6.3:1 | Primary button label |
| `--navy-deep` on `--teal-tint` / `--orange-tint` | 15.4 / 11.0:1 | Fact cards |
| `--on-navy` on `--navy` | 14.6:1 | Navy fact card, hero |
| `--teal-dark` on `--bg` / `--surface` | 4.6 / 5.0:1 | Step numbers, card links, resource-card titles |
| `--disabled-text` on `--disabled-fill` | 5.3:1 | Disabled buttons |

Focus rings (3:1 needed): `--focus-ring-light` (`--teal-dark`) is 4.6:1 on `--bg`, 5.0:1 on `--surface`, 3.9:1 on `--sand-wash`, 4.4:1 on `--teal-tint` and 3.2:1 on `--orange-tint`; `--focus-ring-dark` (`--teal`) is 5.0:1 on `--navy` and 5.9:1 on `--navy-deep`.

## Type

Two families, both loaded from Google Fonts in `BaseLayout.astro`:

- `--font-sans` is Inter (400, 500, 600, 700) for body copy and headings. `--font-display` points at it; use `--font-display` on headings so the family can change in one place.
- `--font-mono` is JetBrains Mono (500, 600) for eyebrows, step numbers, file formats, fact numbers and spec labels. Numbers in mono get `font-variant-numeric: tabular-nums`.

Weights come from tokens and stop at 700: `--weight-regular` (400) for body, `--weight-medium` (500) for mono meta, `--weight-semibold` (600) for nav, captions and mono labels, `--weight-bold` (700) for headings, buttons, links and panel titles. Nothing heavier.

Sizes come from the `--text-xs` … `--text-4xl` scale; the top three steps are fluid. Body copy never goes below `--text-base` (16px), mobile included.

| Style | Size | Leading | Weight | Tracking | Used for |
| --- | --- | --- | --- | --- | --- |
| hero-display | `--text-4xl` clamp(2.75rem → 4.75rem) | 1.05 | 700 | -.03em | Home hero h1, max 12ch |
| section-display | `--text-3xl` clamp(2.25rem → 3.5rem) | 1.05 | 700 | -.025em | Home section intro h2, about h2 |
| page-title | `--text-3xl` | 1.05 | 700 | -.025em | Inner page h1, max 12ch |
| h2 | `--text-2xl` clamp(1.75rem → 2.5rem) | 1.15 | 700 | -.01em | Section-header h2 |
| fact-number | `--text-2xl`, mono | 1.05 | 600 | | Fact card figure, tabular |
| card-title | `--text-xl` 1.5rem | 1.15 | 700 | -.01em | Roadmap card h3 |
| fact-title | `--text-lg` 1.25rem | 1.15 | 700 | -.01em | Fact card h3, footer title |
| panel-title | `--text-md` 1.125rem | 1.15 | 700 | -.01em | Resource card and info note titles |
| lead | `--text-md` | 1.6 | 400 | | Hero paragraph, max 54ch |
| body | `--text-base` 1rem | 1.6 | 400 | | Running copy in `--text-soft` |
| nav | `--text-base` | | 600 | | Nav pills, all widths |
| button | `--text-base` | 1.25 | 700 | | Button labels |
| meta | `--text-sm` .875rem, mono | | 500 | | File format and size |
| eyebrow | `--text-xs` .8125rem, mono | | 600 | .08em, uppercase | Label above headings, `--orange-text` (`--orange` on dark) |
| step-number | `--text-sm`, mono | | 600 | .08em | Roadmap steps (`--teal-dark`) |
| spec-label | `--text-sm`, mono | | 500 | .08em, uppercase | Field spec labels |

Line-heights are `--leading-tight` (1.05) for display, `--leading-snug` (1.15) for h2/h3 and titles, `--leading-body` (1.6) for copy. Put an eyebrow above each section heading.

## Layout and spacing

- Content sits in `.container`: min(`--container`, 100% − 2rem). Inner page heroes use `.narrow` (`--measure`). The hero widens to 1280px and Zippy to 1240px.
- Inner page sections pad `--section-pad` top and bottom; home sections use clamp(4rem, 8vw, 6.5rem). Both drop to 3.5rem under 640px.
- Grids use `--space-5` gaps; rows of three fact cards use `--space-3`. Two- and three-column grids collapse to one column at 900px.
- Buttons stretch to full width under 640px.

### Touch targets

- Every link and button is at least 44 × 44px (`--tap-min`), with at least 8px (`--space-1`) between neighbours. Nav pills, buttons, `.card-links a` and `.footer-links a` all set `min-height: var(--tap-min)`.
- Inline links inside a sentence are exempt from the height rule, but keep them underlined.

## Shape, depth and motion

- Cards use one radius and one shadow: `--radius-card` (= `--radius-xl`, 1rem) and `--shadow-card` (= `--shadow-soft`). That covers resource cards, roadmap cards, fact cards (radius only, no shadow), info notes and the hero panel.
- Other radii: buttons and video frames `--radius-md`, embedded iframes `--radius-sm`, images inside panels `--radius-xs`, nav pills `--radius-pill`, the logo and about photo `--radius-round`.
- `--shadow` is the bigger drop, for the about photo and the resource-card hover state. `--shadow-offset` is the hard orange drop under hero headline blocks and is used nowhere else.
- The hero has one quiet `--teal` disc (18rem, 18% opacity) bleeding off its top-left corner. The Zippy section has static hex outlines in `--teal` and `--orange`.

### Interactive vs static

- Links in copy are underlined. Whole-card links (`.resource-card`) have an underlined `--primary` title with an arrow, and on hover or focus the border turns `--primary` and the shadow deepens.
- Every link and button gets the same focus ring: a 3px `--focus-ring` outline, 3px offset. It is `--teal-dark` on light grounds and `--teal` inside `.ground-dark`.
- Static cards (fact cards, roadmap cards, info notes) have no hover state, no pointer cursor and no lift. If it doesn't do anything, it shouldn't look like it does.

### Motion

- Nothing moves on its own: no autoplaying, looping, or scroll-triggered animation.
- Animate only in response to input (hover, focus, click), and only color, border and shadow, over about .18s. Nothing lifts or slides.
- Honor `prefers-reduced-motion`: transitions collapse to nothing, and smooth scrolling only turns on under `prefers-reduced-motion: no-preference`.

## Imagery and iconography

- The logo (`public/styles/images/logo.png`) is a line-drawn origami goose, black on white. Always show it in a circle with a 3px `--orange` ring (see [Header](components/Header.md)). `favicon.png` is a circular crop of the goose's head for tiny sizes. Don't recolor or redraw the goose, and keep the white circle behind it on navy.
- Field renders (`public/styles/images/field/`) are clean CAD renders on white. Show them on `--surface` inside an [InfoNote](components/InfoNote.md) with `object-fit: contain` and `--radius-xs`.
- There is no icon library. The only icons are the inline download arrow on the Zippy button (24 × 24, stroke 2.6, round caps, `currentColor`) and the game-piece hex outline used as a background motif (stroke 2.5). Don't add an icon library; draw any new icon at the same stroke weight.
- Zippy Manager screenshots (`public/styles/images/zippy/`) sit in device mockups (`--device-bezel`, `--device-tablet`) on `--navy-deep`.

## Components

- [Button](components/Button.md)
- [Header](components/Header.md)
- [HeroHeadline](components/HeroHeadline.md)
- [FactCard](components/FactCard.md)
- [RoadmapCard](components/RoadmapCard.md)
- [ResourceCard](components/ResourceCard.md)
- [InfoNote](components/InfoNote.md)
- [FieldSpec](components/FieldSpec.md)
- [ZippyStat](components/ZippyStat.md)
