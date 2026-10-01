# Button

Styles: public/styles/global.css (`.button`, `.button-dark`, `.button-secondary`, `.button-disabled`)

Chunky, heavy-weight call to action with a 0.65rem radius that lifts 2px on hover.

## Variants
- `.button` — orange fill, `--navy-deep` label. The default and the one people should click. Works on any ground.
- `.button.button-dark` — `--navy` fill for use on the orange about section or light grounds where orange would fight the surroundings.
- `.button.button-secondary` — transparent with a 72% white outline. Only on `--navy` or `--navy-deep`; it is invisible on light grounds.
- `.button-disabled` — `--disabled-fill` and `--disabled-text`, `cursor: not-allowed`. The label pair is 3.0:1, below AA.
- Inline SVG icons inherit the label color (`stroke: currentColor`, 1.2rem, stroke width 2.6). The download arrow is the only one the site uses.

## What you supply
An `<a>` or `<button>` with the classes and a short verb-first label ("Start your team", "Read the rules"). Group buttons in `.button-row` (0.75rem gap, wraps). Under 640px the site stretches every button to full width.

## Don't
- Put two orange buttons side by side; pair orange with secondary or dark.
- Use secondary on `--bg` or `--surface`.
