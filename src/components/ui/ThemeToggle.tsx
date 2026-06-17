"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 하이드레이션 불일치 방지용 마운트 가드 (next-themes 권장 패턴)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="테마 전환"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-lg transition-colors hover:bg-foreground/5"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
