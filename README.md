# Pint-Sized Robotics Storefront

Static robotics parts storefront starter built with Astro and Stripe Payment Links. The site is intended for low-volume sales, free static hosting, and hand-edited product data.

## Stack

- Astro static site
- Local product data in `src/data/products.ts`
- Stripe Payment Links for checkout
- Static assets in `public/`

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
│   ├── data/products.ts
│   ├── layouts/
│   ├── lib/products.ts
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

## Edit or add products

All product content lives in `src/data/products.ts`.

Each product entry uses this shape:

```ts
{
  slug: "brushless-motor",
  name: "Brushless Motor",
  category: "Motor",
  priceDisplay: "$10.00",
  shortDescription: "Standard brushless motor for drivetrains, intakes, and more.",
  description: "Full product description here.",
  inStock: true,
  quantityAvailable: 18,
  image: "/images/products/brushless-motor.svg",
  stripePaymentLink: "https://buy.stripe.com/...",
  featured: true
}
```

Notes:

- `slug` controls the product detail page URL at `/products/[slug]/`
- `image` should point to a file in `public/`
- `featured: true` makes a product appear on the home page

## Add Stripe Payment Links

1. Create a Payment Link in Stripe for a product.
2. Copy the Stripe-hosted URL.
3. Replace the placeholder `stripePaymentLink` value for that product in `src/data/products.ts`.

## Mark a product out of stock

Update the product entry in `src/data/products.ts`:

- set `inStock` to `false`
- set `quantityAvailable` to `0`

## Replace product images

Sample placeholder images live in `public/images/products/`.

To replace one:

1. Add a new image file under `public/images/products/`
2. Update the product's `image` path in `src/data/products.ts`

PNG, JPG, WebP, or SVG all work.

## Deploy

This project builds to static files.

Build command:

```bash
npm run build
```

Astro outputs the deployable static site to `dist/`.