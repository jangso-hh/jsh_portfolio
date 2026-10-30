import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Ai from "@/components/sections/Ai";
import Pm from "@/components/sections/Pm";
import Career from "@/components/sections/Career";
import Skills from "@/components/sections/Skills";
import Documents from "@/components/sections/Documents";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

/**
 * 노션 문서형 한 열 레이아웃.
 * 순서: 머리(속성·콜아웃) → 개발한 것들 → AI → PM → 경력 → 스택 → 산출물·사이드 → 연락
 * 모든 데이터는 src/data/portfolio.ts 의 12번 블록.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="n-page">
        <Hero />
        <Projects />
        <Ai />
        <Pm />
        <Career />
        <Skills />
        <Documents />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
