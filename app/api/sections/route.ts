import { NextResponse } from "next/server";

const sections = [
  {
    id: 1,
    title: "Wake up to Stunning Ocean Views",
    description:
      "Experience the beauty of sunrise over the sea right from your balcony. Our rooms are designed to make your mornings unforgettable, giving you the peace and relaxation you deserve.",
    images: [
      "/images/ocean1.jpg",
      "/images/ocean2.jpg",
      "/images/ocean3.jpg",
    ],
  },
  {
    id: 2,
    title: "Relax in Modern Luxury Interiors",
    description:
      "Each room is carefully styled with modern aesthetics and comfort-focused furniture to make your stay luxurious and rejuvenating.",
    images: [
      "/images/room1.jpg",
      "/images/room2.jpg",
      "/images/room3.jpg",
    ],
  },
  {
    id: 3,
    title: "Immerse in Nature & Garden Views",
    description:
      "Feel refreshed as you stay surrounded by lush greenery. Our garden suites offer a peaceful retreat with nature at your doorstep.",
    images: [
      "/images/garden1.jpg",
      "/images/garden2.jpg",
      "/images/garden3.jpg",
    ],
  },
];

export async function GET() {
  return NextResponse.json(sections);
}
