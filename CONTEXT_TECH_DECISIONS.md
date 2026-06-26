# CONTEXT_TECH_DECISIONS.md

## Preferred architecture

Use a static site architecture.

## Hosting preference

The site should be deployable on a free static host such as GitHub Pages, Cloudflare Pages, or Netlify static hosting.

## Payment approach

Use Stripe Payment Links only.
Do not use:

* Stripe Checkout Sessions via backend
* webhooks
* server-side payment flows
* custom order storage

Each product should have a field for a Stripe Payment Link URL.

## Data storage

Use a local editable file for product data. Good options:

* src/data/products.json
* src/data/products.ts
* content collection / markdown files if using Astro

Prefer the option that is easiest to maintain manually.

## Design preference

* clean and simple
* lightweight
* easy to rebrand
* functional over flashy

## Maintainability requirements

* minimal dependencies
* easy for one developer to understand
* easy to edit without a CMS
* avoid architectural choices that assume scale before it exists

## Future-proofing

Structure the project so it can later be upgraded to:

* dynamic inventory
* cart support
* database-backed products
* server-side Stripe integration
* admin dashboard

But do not build those now.

## Notes for code organization

Aim for:

* reusable product card component
* centralized site config for branding
* centralized product data source
* obvious place to swap placeholder Stripe links for real ones
* obvious place to replace sample images

## Preferred deliverable quality

This should feel like a polished starter repo, not a throwaway prototype.
