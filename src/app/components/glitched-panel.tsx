'use client'
import { ReactNode, useEffect, useRef, useState } from "react";

type GlitchLine = {
  top: number;
  left: number;
  width: number;
};

interface GlitchedPanelProps {
  children: ReactNode;
  repeatDelay?: number;
  duration?: number;
}

export default function GlitchedPanel({ children }: GlitchedPanelProps) {
  const [glitchLines, setGlitchLines] = useState<GlitchLine[]>([]);
  const containerRef = useRef<HTMLDivElement>(null); // ref no container

  useEffect(() => {
    const interval = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const lines: GlitchLine[] = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => ({
        top: Math.floor(Math.random() * rect.height),
        left: Math.floor(Math.random() * rect.width),
        width: 10 + Math.floor(Math.random() * 30),
      }));

      setGlitchLines(lines);
      setTimeout(() => setGlitchLines([]), 50);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="crt-container"
    >
      {children}
      {glitchLines.map((line, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${line.top}px`,
            left: `${line.left}px`,
            width: `${line.width}px`,
            height: "2px",
            background: "lime",
            opacity: 0.9,
            boxShadow: "0 0 6px lime",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
