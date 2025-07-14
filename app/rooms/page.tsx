"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Sections() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />

      <section id="rooms" className="py-24 px-6 bg-gray-100">
        <h2
          className="text-4xl md:text-5xl text-center font-serif text-primary mb-16"
          data-aos="fade-up"
        >
          Luxurious Rooms
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((room) => (
            <div
              key={room}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300"
              data-aos="fade-up"
            >
              <Image
                src={`/images/room${room}.jpg`}
                alt={`Room ${room}`}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3 text-primary">
                  Deluxe Room {room}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Relax in our Deluxe Room {room}, complete with a stunning view
                  and cozy ambiance.
                </p>
                <Link
                  href={`/room/${room}`}
                  className="btn btn-book text-center block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-primary text-white">
        <div
          className="max-w-2xl mx-auto bg-white rounded-xl p-10 shadow-lg text-black"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-center text-primary mb-10">
            Get in Touch
          </h2>
          <form
            action="https://formsubmit.co/YOUR_EMAIL"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-book w-full text-center">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
