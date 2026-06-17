import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Career from "@/components/sections/Career";
import Achievements from "@/components/sections/Achievements";
import Archiving from "@/components/sections/Archiving";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Achievements />
        <Archiving />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
