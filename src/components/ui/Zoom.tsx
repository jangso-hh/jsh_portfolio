"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ZoomProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

/** 클릭하면 원본 크기로 확대해 보여주는 이미지 (ESC·배경 클릭으로 닫힘) */
export default function Zoom({ src, alt, className, sizes = "(max-width: 1080px) 100vw, 1040px" }: ZoomProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" className={`zoom ${className ?? ""}`} onClick={() => setOpen(true)} aria-label={`${alt} 확대`}>
        <Image src={src} alt={alt} width={0} height={0} sizes={sizes} style={{ width: "100%", height: "auto" }} />
      </button>
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
          <Image src={src} alt={alt} width={0} height={0} sizes="100vw" unoptimized className="lightbox-img" />
          <button type="button" className="lightbox-close" aria-label="닫기" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
      )}
    </>
  );
}
