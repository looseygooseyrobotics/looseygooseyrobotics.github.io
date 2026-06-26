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
    slug: "brushless-motor",
    name: "Brushless Motor",
    category: "Motor",
    priceDisplay: "$10.00",
    shortDescription: "Brushed DC Motor",
    description:
      "Brushed DC Motor 620 RPM, 12V, 4mm D shaft, M3 mounting holes.",
    inStock: true,
    quantityAvailable: 18,
    image: "/images/products/brushless-motor.svg",
    stripePaymentLink: "https://buy.stripe.com/test_4gw7sM4placeholder01",
    featured: true
  },
  {
    slug: "servo-kit",
    name: "Servo Kit",
    category: "Actuation",
    priceDisplay: "$34.00",
    shortDescription: "Reliable servo bundle for steering, grippers, and linkages.",
    description:
      "A starter servo bundle with mounting hardware and extension leads for manipulators, turret indexing, and small mechanism control. Intended for teams that need a simple drop-in actuation option without sourcing separate accessories.",
    inStock: true,
    quantityAvailable: 26,
    image: "/images/products/servo-kit.svg",
    stripePaymentLink: "https://buy.stripe.com/test_4gw7sM4placeholder02",
    featured: true
  },
  {
    slug: "robot-brain",
    name: "Robot Brain",
    category: "Control",
    priceDisplay: "$129.00",
    shortDescription: "Central controller board for sensors, motion, and automation.",
    description:
      "A compact robotics controller with enough I/O for sensor integration, drivetrain control, and subsystem coordination. Suitable as the primary brain for classroom and competition robots where quick bring-up is more important than platform complexity.",
    inStock: true,
    quantityAvailable: 7,
    image: "/images/products/robot-brain.svg",
    stripePaymentLink: "https://buy.stripe.com/test_4gw7sM4placeholder03",
    featured: true
  },
  {
    slug: "lipo-battery",
    name: "LiPo Battery",
    category: "Power",
    priceDisplay: "$48.00",
    shortDescription: "High-discharge battery pack sized for small competitive robots.",
    description:
      "A rechargeable LiPo pack sized for compact robots that need steady output during short, high-load match cycles. Good for drive bases, arms, and practice rigs where weight and current delivery both matter.",
    inStock: false,
    quantityAvailable: 0,
    image: "/images/products/lipo-battery.svg",
    stripePaymentLink: "https://buy.stripe.com/test_4gw7sM4placeholder04",
    featured: false
  }
];
