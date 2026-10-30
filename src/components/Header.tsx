"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import { profileData } from "@/data/portfolio";

const NAV_ITEMS = [
  { label: "역량", href: "#capabilities" },
  { label: "프로젝트", href: "#projects" },
  { label: "ERP 제품군", href: "#impact" },
  { label: "경력", href: "#experience" },
  { label: "스킬", href: "#skills" },
  { label: "문서", href: "#documents" },
  { label: "연락", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 현재 보고 있는 섹션을 네비게이션에 표시
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.querySelector<HTMLElement>(n.href)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-row">
        <a href="#top" className="brand">
          {profileData.name}
        </a>

        <nav className="nav-desktop">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-tools">
          <ThemeToggle />
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label="메뉴" className="nav-burger">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav-mobile">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={active === item.href ? "active" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
