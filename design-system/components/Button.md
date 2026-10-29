# Button

Styles: public/styles/global.css (`.button`, `.button-dark`, `.button-secondary`, `.button-disabled`)

Chunky, bold call to action with a 0.65rem radius. Hover and focus change the fill; nothing moves.

## Variants
- `.button` — orange fill, `--navy-deep` label (6.3:1). The default and the one people should click. Works on any ground.
- `.button.button-dark` — `--navy` fill for light grounds where orange would fight the surroundings, such as the `--sand-wash` about section.
- `.button.button-secondary` — transparent with a 72% white outline. Only on `--navy` or `--navy-deep`; it is invisible on light grounds.
- `.button-disabled` — `--disabled-fill` and `--disabled-text` (5.3:1), `cursor: not-allowed`.
- Inline SVG icons inherit the label color (`stroke: currentColor`, 1.2rem, stroke width 2.6). The download arrow is the only one the site uses.

## Behaviour
- Inter 700 at `--text-base`, at least 44px tall (`--tap-min`).
- Hover and focus swap the fill over .18s (`--orange-hover`, `--navy-hover`, or white for secondary). No lift.
- Focus also shows the shared 3px `--focus-ring` outline: `--teal-dark` on light grounds, `--teal` inside `.ground-dark`.

## What you supply
An `<a>` or `<button>` with the classes and a short verb-first label ("Start your team", "Read the rules"). Group buttons in `.button-row` (0.75rem gap, wraps). Under 640px the site stretches every button to full width.

## Don't
- Put two orange buttons side by side; pair orange with secondary or dark.
- Use secondary on `--bg` or `--surface`.
