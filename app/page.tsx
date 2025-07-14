import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Camping from "@/components/Camping"


export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <Gallery />
      <Camping />
    </main>
    </>
  );
}
