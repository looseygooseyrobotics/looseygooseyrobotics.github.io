import { products } from "../data/products";

export function getAllProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(category: string, slug: string, limit = 3) {
  return products
    .filter((product) => product.category === category && product.slug !== slug)
    .slice(0, limit);
}
