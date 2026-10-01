# FieldSpec

Styles: src/pages/event-resources.astro (`.field-spec`)

A definition list of field dimensions: uppercase label over a bold value, each marked with a 3px `--orange` rule on the left.

## Rules
- `dt` in `spec-label` (uppercase, 0.06em tracking, `--text-soft`); `dd` in bold `--text`.
- Four columns at 1rem gap; two under 900px.
- Values use real units with prime marks (`4' × 8'`, `3.5"`) and `×`, never a letter x.
- For specs only. Don't borrow the orange rule for callouts or cards.
