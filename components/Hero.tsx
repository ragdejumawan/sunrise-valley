"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Hero() {
  const slides = [
    {
      image: "/images/hero1.jpg",
      title: "Welcome to Our Beach Resort",
      subtitle: "Experience luxury and nature in harmony",
    },
    {
      image: "/images/hero2.jpg",
      title: "Relax in Paradise",
      subtitle: "Your beachfront escape awaits",
    },
    {
      image: "/images/hero3.jpg",
      title: "Unwind with Us",
      subtitle: "Where comfort meets serenity",
    },
  ];

  return (
    <section className="relative w-full min-h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="w-full h-full object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
