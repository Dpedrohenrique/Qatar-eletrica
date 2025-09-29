import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Products from "@/components/Products";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Differentials />
      <Products />
      <Partners />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}
