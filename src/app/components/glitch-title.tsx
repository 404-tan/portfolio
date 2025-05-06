'use client';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type GlitchLine = {
  top: number; // agora é em pixels reais
  left: number;
  width: number;
};

interface GlitchTitleProps {
  text: string;
  fontSize?: string;
}

export default function GlitchTitle({ text, fontSize = "4rem" }: GlitchTitleProps) {
  const [glitchLines, setGlitchLines] = useState<GlitchLine[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const titleEl = titleRef.current;
      if (!titleEl) return;

      const rect = titleEl.getBoundingClientRect();
      const lines: GlitchLine[] = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => ({
        top: Math.floor(Math.random() * rect.height),
        left: Math.floor(Math.random() * rect.width),
        width: 10 + Math.floor(Math.random() * 30),
      }));

      setGlitchLines(lines);
      setTimeout(() => setGlitchLines([]), 50);
    }, 51);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "inline-block", // <- aqui tá o segredo
        position: "relative",
      }}
    >
      <motion.h1
        ref={titleRef}
        className="vt220-text"
        style={{
          color: "lime",
          fontSize,
          fontWeight: "bold",
          fontFamily: "VT323, monospace",
          padding: "20px",
          zIndex: 1,
          position: "relative",
        }}
        animate={{
          textShadow: [
            "6px 4px 1px lime",
            "-6px 4px 1px green",
            "-6px -4px 1px lime",
            "-6px 4px 1px lime",
            "6px -4px 1px green",
            "-6px 6px 1px green",
            "6px -4px 1px lime",
            "-6px -4px 1px green",
            "-6px 4px 1px lime",
            "6px 4px 1px lime",
            "0 0 transparent"
          ],
          zIndex: [0, 2]
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.h1>

      {glitchLines.map((line, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${line.top}px`,
            left: `${line.left}px`,
            width: `${line.width}px`,
            height: '2px',
            background: 'lime',
            opacity: 0.9,
            boxShadow: '0 0 6px lime',
            zIndex: 2,
          }}
        />
      ))}
    </div>
  );
}
