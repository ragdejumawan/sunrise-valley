"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoVideo() {
  return (
    <motion.section
      className="relative bg-gray-50 py-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/camping-sub-background.jpg')", // 🔧 replace with your actual image path
      }}
      initial={{ opacity: 0, y: 50 }} // start hidden and slightly down
      animate={{ opacity: 1, y: 0 }} // animate to visible and original position
      exit={{ opacity: 0, y: 50 }} // exit animation if needed
      transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Video on the left */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <video
            src="/videos/camping-play.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-[300px] xl:h-[800px] md:w-[600px] h-[700px] md:h-[550px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Description on the right, moved up */}
        <motion.div
          className="mt-0 md:-mt-10 text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-4xl font-serif mb-6">Camping Experience</h2>

          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            Discover our unique camping experience on top of the mountain. Our resort
            offers well-equipped camping areas with comfortable tents, bonfire nights,
            and activities that bring you closer to nature.
          </p>

          <p className="mb-6 text-lg md:text-xl leading-relaxed">
            Join our community of campers and create unforgettable memories
            under the stars while enjoying the amenities of a premium resort.
          </p>

          {/* Icons with features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400" size={24} />
              <span className="text-white text-base">Mountain View Tents</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400" size={24} />
              <span className="text-white text-base">Bonfire Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400" size={24} />
              <span className="text-white text-base">Guided Activities</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 text-white px-8 py-4 rounded-full shadow hover:bg-green-700 transition text-lg font-semibold">
            Book Your Camping Experience
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
