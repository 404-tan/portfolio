'use client';
import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";

interface GlitchedCardProps {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
}

type GlitchLine = {
  top: number;
  left: number;
  width: number;
};

export default function GlitchedCard({
  image,
  title,
  description,
  tags = [],
  githubUrl,
}: GlitchedCardProps) {
  const [glitchLines, setGlitchLines] = useState<GlitchLine[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
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
      className="relative border border-lime-400 rounded-xl p-4 text-lime-400 font-mono overflow-hidden bg-transparent shadow-[0_0_8px_rgba(0,255,0,0.3)] hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all duration-200"
    >
      {/* imagem */}
      <div className="w-full h-40 overflow-hidden rounded-md mb-3 border border-lime-400">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-200"
        />
      </div>

      {/* título */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {/* descrição */}
      <p className="text-l text-lime-300/90 mb-3 leading-relaxed">
        {description}
      </p>

      {/* tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-sm border border-lime-400 rounded-sm bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* link GitHub */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-200 transition-colors"
        >
          <Github size={32} />
          <span>Ver no GitHub</span>
        </a>
      )}

      {/* glitch lines */}
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
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
