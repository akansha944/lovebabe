import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Menu } from "@/components/Menu";
import { Nav } from "@/components/Nav";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
