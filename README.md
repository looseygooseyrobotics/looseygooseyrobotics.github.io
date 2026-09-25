# Loosey Goosey Robotics

The public website for Loosey Goosey Robotics, a friendly, hands-on robotics competition community. The site introduces the current game, **Hexy Hustle**, gives teams build resources, and publishes competition information.

Built with [Astro](https://astro.build/) and deployed as a static site through GitHub Pages.

## Pages

- `/` — Competition overview, Hexy Hustle game highlights, team-starting steps, and founder information.
- `/get-started/` — Kitbot build resources, CAD, source repository, Discord, and video walkthroughs.
- `/competitions/` — Official rulebook link, game reveal video, and event schedule.

## Develop locally

Prerequisite: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Astro prints the local address when the development server starts (normally `http://localhost:4321`).

Other useful commands:

```bash
npm run build    # Create the production site in dist/
npm run preview  # Preview the most recent production build
```

## Update site content

Central, site-wide details live in [`src/config/site.ts`](src/config/site.ts), including the site name and tagline, navigation, game-reveal video, rulebook, Discord invite, and founder profile.

Page content is kept close to its route:

- `src/pages/index.astro`
- `src/pages/get-started.astro`
- `src/pages/competitions.astro`

Shared header, footer, and document metadata are in `src/components/` and `src/layouts/BaseLayout.astro`. Global styling and image assets are under `public/styles/`.

## Project structure

```text
.
├── public/
│   └── styles/
│       ├── global.css
│       └── images/
├── src/
│   ├── components/       # Shared header and footer
│   ├── config/site.ts    # Site-wide content and links
│   ├── layouts/          # Shared HTML layout
│   └── pages/            # Astro routes
├── .github/workflows/    # GitHub Pages deployment
├── astro.config.mjs
└── package.json
```

## Deployment

Pushing to `main` triggers [the GitHub Actions workflow](.github/workflows/astro.yml). It installs dependencies with `npm ci`, builds Astro with the GitHub Pages site URL and base path, and deploys the resulting `dist/` directory.

For a repository fork or a first-time deployment, enable **GitHub Pages** and select **GitHub Actions** as the source in the repository's Pages settings.
