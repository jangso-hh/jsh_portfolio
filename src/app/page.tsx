import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Capabilities from "@/components/sections/Capabilities";
import Projects from "@/components/sections/Projects";
import Impact from "@/components/sections/Impact";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Documents from "@/components/sections/Documents";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

/**
 * 섹션 순서: Hero → 핵심 역량 → 대표 프로젝트 → ERP 제품군 → 경력 → 기술 스택 → 산출물 → 연락
 * 각 섹션은 src/data/portfolio.ts 의 12번 블록 데이터를 그린다.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Projects />
        <Impact />
        <Experience />
        <Skills />
        <Documents />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
