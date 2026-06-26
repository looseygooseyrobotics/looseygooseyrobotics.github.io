export type Product = {
  slug: string;
  name: string;
  category: string;
  priceDisplay: string;
  shortDescription: string;
  description: string;
  inStock: boolean;
  quantityAvailable: number;
  image: string;
  stripePaymentLink: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    slug: "hexyhustle-kitbot-assembled",
    name: "Hexy Hustle Bot (Fully Assembled)",
    category: "Kit",
    priceDisplay: "$385.00",
    shortDescription: "Competition ready robot",
    description:
      "Fully assembled Kitbot, ready to compete. Just pair a controller, and you are ready to go!",
    inStock: true,
    quantityAvailable: 10,
    image: "/images/products/brushless-motor.svg",
    stripePaymentLink: "https://buy.stripe.com/test_7sY7sN1OG53RfdS2dJ8Ra00",
    featured: true
  },
  {
    slug: "hexyhustle-kitbot",
    name: "Hexy Hustle Bot (Kit)",
    category: "Kit",
    priceDisplay: "$325.00",
    shortDescription: "Competition robot, some assembly required",
    description:
        "Hexy Hustle Kitbot with all prints, components, and hardware you need to assemble a competitino ready robot.",
    inStock: true,
    quantityAvailable: 10,
    image: "/images/products/brushless-motor.svg",
    stripePaymentLink: "https://buy.stripe.com/test_00w7sN50SfIv9Ty3hN8Ra01",
    featured: true
  },
  {
    slug: "electronics-kit",
    name: "Electronics Kit",
    category: "Kit",
    priceDisplay: "195.00",
    shortDescription: "Robot brain and Motors",
    description:
        "The essentials for designing your own robot. A brain, battery, battery charger, and motors.",
    inStock: true,
    quantityAvailable: 10,
    image: "/images/products/brushless-motor.svg",
    stripePaymentLink: "https://buy.stripe.com/test_14A4gBgJA9k7aXCf0v8Ra02",
    featured: true
  },
];
