import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Career from "@/components/sections/Career";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

/**
 * design-reference/original.html 과 동일한 문서형 레이아웃.
 * 순서: hero → vstrip → 이유/두 축/성장 → 대표 프로젝트 ①② → PM·사업 → 산출물 → footer
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 pb-10">
        <div className="page">
          <Hero />
          <About />
          <Projects />
          <Career />
          <Achievements />
          <Footer />
        </div>
      </main>
      <ScrollToTop />
    </>
  );
}
