# Loosey Goosey Robotics design system

Loosey Goosey Robotics runs low-stakes robotics competitions for friends, beginners and veterans who want to build robots without the pressure of a real league. The look is bright and blocky: deep navy grounds, a hot orange accent, teal for relief, big tight headlines and chunky rounded cards. It should feel like a well-run event put on by people who are clearly having fun.

## How it fits together

| What | Where |
| --- | --- |
| Tokens (color, type, spacing, radius, shadow) | [`public/styles/tokens.css`](../public/styles/tokens.css) |
| Shared component styles | [`public/styles/global.css`](../public/styles/global.css) |
| Page- and section-specific styles | `<style>` blocks in `src/pages/*.astro` and `src/components/*.astro` |
| Component guidelines | [`components/`](components/) |
| Logos and images | `public/styles/images/` |

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
- `--navy` and `--navy-deep` are full-bleed section grounds: the hero is `--navy`, the Zippy Manager section and footer are `--navy-deep`. On them use `--on-navy` for headings and the `--on-navy-*` tokens for copy.
- `--orange` is the one accent: primary buttons, eyebrows, the logo ring, and the about section, which is a solid orange band. Use `--text-on-orange` or `--navy` for copy there and `.button-dark` for its button.
- `--teal` is decorative (the hero disc, hex outlines, focus outlines on dark). For teal text use `--teal-dark` (`--primary`).
- The three fact-card fills are `--teal-light`, `--orange-light` and `--navy`, always together.
- Home page sections alternate grounds: navy hero, `--surface`, `--navy-deep` (Zippy), the roadmap gradient (`--teal-wash` → `--bg` → `--peach-wash`), `--orange`, `--navy-deep` footer. Don't put two sections with the same ground next to each other.
- `--yellow`, `--surface-muted` and `--teal-darker` are defined but unused.

Known contrast misses, kept as the site has them:

| Pair | Ratio | Where |
| --- | --- | --- |
| `--orange` on `--bg` / `--surface` | 2.5:1 / 2.3:1 | Eyebrows on light sections, file-format lines |
| `--text-on-orange` on `--orange` | 4.0:1 | About section copy (`--navy-deep` would be 6.3:1) |
| `--disabled-text` on `--disabled-fill` | 3.0:1 | Disabled buttons |

Orange text passes on navy grounds (5.3:1 on `--navy`, 6.3:1 on `--navy-deep`), so prefer it there.

## Type

One family, `--font-sans` (Inter, falling back to the system UI stack). The site doesn't load Inter, so most visitors see their system font. Load it from Google Fonts if you want it consistent.

Headlines are big, bold and tight. Weight does the hierarchy work: 650 for nav, 700 for headings and links, 800 for buttons, panel titles and eyebrows, 900 for step numbers and stats.

| Style | Size | Leading | Weight | Tracking | Used for |
| --- | --- | --- | --- | --- | --- |
| hero-display | clamp(2.8rem, 6vw, 5.25rem) | .98 | 700 | -.06em | Home hero h1, max 12ch |
| section-display | clamp(2rem, 4.4vw, 3.75rem) | 1.03 | 700 | -.045em | Home section intro h2 |
| page-title | clamp(2.2rem, 4vw, 3.4rem) | .98 | 700 | -.06em | Inner page h1 |
| stat-number | clamp(2.4rem, 4vw, 3.2rem) | 1 | 900 | -.04em | Zippy stats, tabular figures |
| fact-number | 2.6rem | 1 | 700 | | Fact card figure |
| h2 | clamp(1.7rem, 3vw, 2.4rem) | 1.2 | 700 | | Section-header h2 |
| h3-feature | clamp(1.65rem, 3vw, 2.35rem) | 1.1 | 700 | | Competition detail h3 |
| card-title | 1.5rem | 1.2 | 700 | | Roadmap card h3 |
| fact-title | 1.2rem | 1.2 | 700 | | Fact card h3 |
| panel-title | 1rem | | 800 | | Resource card and info note titles |
| lead | 1.13rem | 1.6 | 400 | | Hero paragraph, max 54ch |
| body | 1rem | 1.6 | 400 | | Running copy in `--text-soft` (1.65 in cards) |
| nav | 1rem | | 650 | | Nav pills (.9rem under 640px) |
| button | 1rem | | 800 | | Button labels |
| meta | .85rem | | 700 | | File format and size |
| eyebrow | .78rem | | 800 | .08em, uppercase | Section label above headings, in `--orange` |
| step-number | .85rem | | 900 | .08em | Roadmap steps (`--teal-dark`), Zippy features (`--orange`) |
| spec-label | .85rem | | 700 | .06em, uppercase | Field spec labels |

Put an eyebrow above each section heading.

## Layout and spacing

- Content sits in `.container`: min(`--container`, 100% − 2rem). Inner page heroes use `.narrow` (`--measure`). The hero widens to 1280px and Zippy to 1240px.
- Inner page sections pad `--section-pad` top and bottom; home sections use clamp(4rem, 8vw, 6.5rem). Both drop to 3.5rem under 640px.
- Grids use `--space-5` gaps; rows of three fact cards use `--space-3`. Two- and three-column grids collapse to one column at 900px.
- Buttons stretch to full width under 640px.

## Shape, depth and motion

- Radii run from `--radius-xs` (images inside panels) to `--radius-xl` (every card and panel). Buttons and video frames are `--radius-md`, resource cards `--radius-sm`, nav pills `--radius-pill`, the logo and about photo `--radius-round`.
- `--shadow` is the one soft navy-tinted drop for panels and resource cards; roadmap cards use `--shadow-soft`. `--shadow-offset` is the hard orange drop under hero headline blocks and is used nowhere else.
- The hero has two big flat circles bleeding off its corners: a `--teal` disc top-left (30rem) and an `--orange` disc bottom-right (23rem). The Zippy section uses drifting hex outlines in `--teal` and `--orange` at 35% opacity.
- Motion is small and springy: buttons lift 2px over .18s; content fades and rises 2rem on scroll; hexes drift and rotate 60° over about 20s; the download button pulses an orange ring. Respect `prefers-reduced-motion`.
- Focus: buttons and nav links reuse their hover style for `:focus-visible`; Zippy feature rows get a 2px `--teal` outline.

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
