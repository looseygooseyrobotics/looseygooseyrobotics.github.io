# Header

Styles: src/components/Header.astro and public/styles/global.css (`.brand`, `.nav-link`)

The sticky site header: the goose logo in an orange ring, the name and tagline, and pill-shaped nav links.

## Anatomy
- `.brand` — logo at 3.4rem in a 3px `--orange` ring, `--radius-round`; name in bold at -0.03em tracking; tagline in `--text-soft` (hidden under 640px).
- `.nav-link` — `--text-soft` at rest, 650 weight, `--radius-pill`. Active, hover and focus all flip to a `--navy` pill with white text.
- The header itself is `--header-glass` with a 16px backdrop blur and a `--header-rule` hairline, sticky at the top.

## What you supply
The nav items (label + href) and which one is current; add `.active` to that link. Under 900px the list collapses behind a three-bar toggle (see `src/components/Header.astro`), stacked one per row.
