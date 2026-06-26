# CONTEXT_PRODUCT_STRATEGY.md

## Business context

This store currently operates primarily in person and takes cash/Venmo. The purpose of this project is to create the simplest possible web presence that allows customers to place orders online and pay electronically without committing to a heavy platform or paid hosting.

## Current priorities

1. Get something live quickly
2. Keep ownership/control of the website
3. Avoid ecosystem lock-in
4. Avoid monthly hosting costs for now
5. Avoid wasting time building systems that are unnecessary at current scale

## Traffic and scale assumptions

* Less than 100 visitors per month
* Very low order volume
* Manual inventory management is acceptable for now
* Manual fulfillment is acceptable for now

## Why this approach

We are intentionally not building a full custom commerce backend yet because:

* there is not enough traffic/sales to justify the complexity
* static hosting is free and simple
* Stripe Payment Links provide a low-friction way to accept online payments
* this approach keeps the site portable and easy to evolve later

## Lock-in concerns

Avoid tightly coupling the store to a platform ecosystem. The site content and product data should remain easy to migrate later.

## Operational assumptions

* Inventory can be updated manually in the product data file
* Stripe will handle checkout and payment collection
* Stripe-hosted receipts are sufficient for the MVP
* It is okay if stock is not decremented automatically after each sale in this first version

## Success criteria

The MVP is successful if:

* products can be browsed cleanly
* each product can link to a Stripe-hosted checkout
* the site is easy to edit by hand
* deployment is free or nearly free
* the codebase is clean enough to extend later
