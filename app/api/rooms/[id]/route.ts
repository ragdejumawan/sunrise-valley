import { NextResponse } from "next/server";

const rooms = [
  {
    id: 1,
    title: "Oceanfront Deluxe",
    description: "Relax in our Oceanfront Deluxe Room, complete with a stunning sea view and cozy ambiance.",
    image: "/images/room1.jpg",
    gallery: [
      "/images/room-detailed/room1.jpg",
      "/images/room-detailed/room1a.jpg",
      "/images/room-detailed/room1b.jpg",
      "/images/room-detailed/room1c.jpg",
    ],
    included: [
      "King-size bed",
      "Private balcony",
      "Breakfast included",
      "Free Wi-Fi",
    ],
    price: 199,
    bookingLinks: {
      bookingCom: "https://www.booking.com/hotel/ph/oceanfront-deluxe.html",
      expedia: "https://www.expedia.com/Oceanfront-Deluxe-Hotel.d123456",
      agoda: "https://www.agoda.com/oceanfront-deluxe/hotel/ph.html",
    },
  },
  {
    id: 2,
    title: "Garden Suite",
    description: "Stay surrounded by lush greenery in our peaceful Garden Suite.",
    image: "/images/room2.jpg",
    gallery: [
      "/images/room-detailed/room2.jpg",
      "/images/room-detailed/room2a.jpg",
      "/images/room-detailed/room2b.jpg",
      "/images/room-detailed/room2c.jpg",
    ],
    included: [
      "Queen-size bed",
      "Garden view",
      "Free breakfast",
      "Complimentary drinks",
    ],
    price: 179,
    bookingLinks: {
      bookingCom: "https://www.booking.com/hotel/ph/garden-suite.html",
      expedia: "https://www.expedia.com/Garden-Suite-Hotel.d654321",
      agoda: "https://www.agoda.com/garden-suite/hotel/ph.html",
    },
  },
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // 👈 Promise type
) {
  const { id } = await params; // 👈 await here
  const roomId = parseInt(id);
  const room = rooms.find((room) => room.id === roomId);

  if (!room) {
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  }

  return NextResponse.json(room);
}
