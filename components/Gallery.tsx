import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/gallery1.jpg", alt: "Beachfront view" },
    { src: "/images/gallery2.jpg", alt: "Infinity pool sunset" },
    { src: "/images/gallery3.jpg", alt: "Garden villa exterior" },
    { src: "/images/gallery4.jpg", alt: "Resort restaurant" },
    { src: "/images/gallery5.jpg", alt: "Spa and wellness" },
    { src: "/images/gallery6.jpg", alt: "Private balcony view" },
  ];

  return (
    <section id="gallery" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif mb-4 text-center">Gallery</h2>
      <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
        Explore breathtaking views, luxurious amenities, and the relaxing environment our resort offers.
      </p>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            className="w-full rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
            style={{ objectFit: "cover" }}
          />
        ))}
    </section>
  );
}
