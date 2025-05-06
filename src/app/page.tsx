'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type GlitchLine = {
  top: string;
  left: string;
  width: string;
};

export default function Home() {
  const [glitchLines, setGlitchLines] = useState<GlitchLine[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const lines: GlitchLine[] = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => ({
        top: `${22 + Math.floor(Math.random() * 60)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        width: `${10 + Math.floor(Math.random() * 30)}px`,
      }));

      setGlitchLines(lines);
      setTimeout(() => setGlitchLines([]),50);
    }, 51);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="crt-container"
      style={{
        background: '#000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <motion.h1 className="vt220-text"
          style={{
            color: "lime",
            fontSize: "4rem",
            fontWeight: "bold",
            fontFamily: "VT323, monospace",
            textAlign: "center",
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
            zIndex:[0,2]
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 2,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          MARTAN MARTINS 
        </motion.h1>
       
        {/* Linhas glitch sobre o texto */}
        {glitchLines.map((line, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: line.top,
              left: line.left,
              width: line.width,
              height: '2px',
              background: 'lime',
              opacity: 0.9,
              boxShadow: '0 0 6px lime',
              zIndex: 2,
            }}
          />
        ))}
      </div>
      <div
        className="scanlines-layer"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          pointerEvents: 'none',
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            rgba(0, 255, 0, 0.05) 0px,
            rgba(0, 255, 0, 0.05) 1px,
            transparent 1px,
            transparent 4px
          )`,
          mixBlendMode: 'screen',
          animation: 'flicker 0.4s infinite'
        }}
      />
    </div>

  );
}
