# ZippyStat

Styles: src/components/ZippyShowcase.astro (`.zippy-stat`)

Glassy stat tile for the Zippy Manager section: a big gradient number over a short label, on `--navy-deep` only.

## Rules
- Tile: `--glass-fill`, 1px `--glass-rule`, `--radius-xl`.
- Number: `stat-number` style with a `--teal-light` → `--orange-light` gradient clipped to the text and tabular figures. On the site it counts up from 0 when scrolled into view.
- Label: `--on-navy-deep-soft`.
- The stats are jokes ("Free99", "50% chance of it working as intended"). Keep that tone; don't swap in real-sounding vanity metrics.
