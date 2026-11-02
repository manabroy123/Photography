import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-neutral-100 selection:bg-[#fef08a] selection:text-[#080808]">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
