import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Packages from "@/components/Packages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
