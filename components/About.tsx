import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/hero1.jpg" // 🔧 replace with your actual image path
            alt="About our resort"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-serif mb-8">About Our Resort</h2>

          <p className="text-gray-700 mb-6 text-lg md:text-xl leading-relaxed">
            Nestled atop the scenic mountains, our resort offers a unique escape
            from the bustling city. Experience fresh air, panoramic views, and
            tranquility while enjoying modern amenities designed for your
            ultimate comfort and relaxation.
          </p>

          <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
            We take pride in delivering personalized services and curated
            experiences – whether you’re camping under the stars, enjoying our
            local cuisine, or spending quality time with loved ones in nature.
          </p>

          <button className="bg-green-600 text-white px-8 py-4 rounded-full shadow hover:bg-green-700 transition text-lg font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
