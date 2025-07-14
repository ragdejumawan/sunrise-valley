"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import SkeletonRoom from "@/components/SkeletonRoom";

interface Room {
  title: string;
  description: string;
  gallery?: string[];
  included: string[];
  price: number;
  bookingLinks: {
    bookingCom?: string;
    expedia?: string;
    agoda?: string;
  };
}

export default function RoomDetailPage() {
  const { id } = useParams();
  const [room, setRoom] = useState<Room | null>(null);
  const [error, setError] = useState("");
  const [review, setReview] = useState<{
    averageRating: number;
    reviewCount: number;
  } | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

 useEffect(() => {
  const fetchReview = async () => {
    try {
      const res = await fetch(`/api/reviews/${id}`);
      if (!res.ok) throw new Error("No review data");
      const data = await res.json();
      setReview(data);
    } catch (err) {
      console.error("Review fetch error:", err);
    }
  };

  fetchReview();
}, [id]);



  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await fetch(`/api/rooms/${id}`);
        if (!res.ok) throw new Error("Room not found");
        const data = await res.json();
        setRoom(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      }
    };

    fetchRoom();
  }, [id]);

  if (error)
    return (
      <div className="p-6 text-center text-red-600 font-medium">
        ❌ Error: {error}
      </div>
    );

  if (!room) return <SkeletonRoom />;

  return (
    <>
      <Navbar />
      <section className="py-20 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/#rooms" className="hover:underline">
              Rooms
            </Link>{" "}
            / <span className="text-primary font-medium">{room.title}</span>
          </nav>

          {/* Title & Description */}
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            {room.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {room.description}
          </p>

          {/* Static Review */}
          {review && (
            <div className="flex items-center gap-2 mb-10" data-aos="fade">
              <div className="text-yellow-500 text-xl">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.round(review.averageRating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({review.averageRating.toFixed(1)} / 5 from {review.reviewCount}{" "}
                reviews)
              </span>
            </div>
          )}

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {room.gallery?.map((src: string, index: number) => (
              <Image
                key={index}
                src={src}
                alt={`${room.title} image ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md shadow"
                data-aos="zoom-in"
              />
            ))}
          </div>

          {/* What's Included */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What’s Included
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 list-disc list-inside text-gray-700">
              {room.included.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="text-xl font-bold text-primary mb-10">
            Price per night: ${room.price}
          </div>

          {/* Booking Buttons */}
          <div data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Book Through:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {room.bookingLinks.bookingCom && (
                <Link
                  href={room.bookingLinks.bookingCom}
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-center"
                >
                  Booking.com
                </Link>
              )}
              {room.bookingLinks.expedia && (
                <Link
                  href={room.bookingLinks.expedia}
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-center"
                >
                  Expedia
                </Link>
              )}
              {room.bookingLinks.agoda && (
                <Link
                  href={room.bookingLinks.agoda}
                  target="_blank"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded text-center"
                >
                  Agoda
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
