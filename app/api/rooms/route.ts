// app/api/rooms/route.ts (App Router)
import { NextResponse } from "next/server";

export async function GET() {
  const rooms = [
    {
      id: 1,
      title: "Oceanfront Deluxe",
      description: "Relax with a sea breeze and a panoramic view of the ocean.",
      image: "/images/room1.jpg",
    },
    {
      id: 2,
      title: "Garden Suite",
      description: "Surrounded by lush greenery, perfect for a peaceful stay.",
      image: "/images/room2.jpg",
    },
    {
      id: 3,
      title: "Sunset Villa",
      description: "Enjoy breathtaking sunsets from your private deck.",
      image: "/images/room3.jpg",
    },
    {
      id: 4,
      title: "Family Room",
      description: "Spacious and cozy for a perfect family getaway.",
      image: "/images/room4.jpg",
    },
    {
      id: 5,
      title: "Mountain View Loft",
      description: "Wake up to majestic mountain views every morning.",
      image: "/images/room5.jpg",
    },
    {
      id: 6,
      title: "Private Pool Villa",
      description: "Indulge in your own private pool and luxurious setting.",
      image: "/images/room6.jpg",
    },
  ];

  return NextResponse.json(rooms);
}
