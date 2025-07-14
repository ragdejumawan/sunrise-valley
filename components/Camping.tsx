import { CheckCircle } from "lucide-react";

export default function PromoVideo() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Video on the left */}
        <div className="flex justify-center">
          <video
            src="/videos/camping-play.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-[300px] xl:h-[700px] md:w-[400px] h-[400px] md:h-[550px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Description on the right, moved up */}
        <div className="mt-0 md:-mt-10">
          <h2 className="text-3xl font-serif mb-4">Camping Experience</h2>
          <p className="text-gray-600 mb-4">
            Discover our unique camping experience by the beach. Our resort
            offers well-equipped camping areas with comfortable tents,
            bonfire nights, and activities that bring you closer to nature.
          </p>
          <p className="text-gray-600 mb-4">
            Join our community of campers and create unforgettable memories
            under the stars while enjoying the amenities of a premium resort.
          </p>

          {/* Icons with features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="text-gray-700 text-sm">Beachfront Tents</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="text-gray-700 text-sm">Bonfire Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20} />
              <span className="text-gray-700 text-sm">Guided Activities</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition">
            Book Your Camping Experience
          </button>
        </div>
      </div>
    </section>
  );
}
