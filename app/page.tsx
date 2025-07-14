// import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Camping from "@/components/Camping"
import About from "@/components/About";


export default function Home() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <About />
      {/* <Gallery /> */}
      <Camping />
    </main>
    </>
  );
}
