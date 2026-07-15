# Loosey Goosey Robotics

Static homepage built with Astro.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the local URL Astro prints, usually `http://localhost:4321`.

## Project structure

```text
.
├── public/
│   ├── images/products/
│   └── styles/global.css
├── src/
│   ├── components/
│   ├── config/site.ts
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
└── package.json
```

## Customize branding and key links

Edit `src/config/site.ts` to change:

- site name
- tagline
- promo video URL
- competition rules URL (currently the official Google Doc rulebook)
- Discord invite URL
- header navigation labels


## Deploy

This project builds to static files.

Build command:

```bash
npm run build
```

Astro outputs the deployable static site to `dist/`.