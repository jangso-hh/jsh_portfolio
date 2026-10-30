"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import { pageData } from "@/data/portfolio";

const NAV_ITEMS = [
  { label: "개발", href: "#projects" },
  { label: "AI", href: "#ai" },
  { label: "PM", href: "#pm" },
  { label: "경력", href: "#career" },
  { label: "스택", href: "#skills" },
  { label: "문서", href: "#documents" },
  { label: "연락", href: "#contact" },
];

/** 노션 상단바처럼 얇은 고정 헤더 — 현재 섹션을 표시한다 */
export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.querySelector<HTMLElement>(n.href)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="n-topbar">
      <a href="#top" className="n-brand">
        {pageData.icon} {pageData.title}
      </a>
      <nav className="n-nav">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className={active === item.href ? "active" : undefined}>
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}
