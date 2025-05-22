'use client';
import { useEffect, useState } from 'react';
import TerminalLine from './terminal-line';

interface comando {
  input: string;
  output?: string;
}

interface GlitchedTermProps {
  user: string;
  machine: string;
  comandos: comando[];
  fontSize?: string;
  repeatDelay?: number;
  duration?: number;
}

export default function GlitchedTerm({
  user,
  machine,
  comandos,
  fontSize = '1.2rem',
  repeatDelay = 700,
}: GlitchedTermProps) {
  const [comandosExecutados, setComandosExecutados] = useState<comando[]>([]);

  // Começa com o primeiro comando
  useEffect(() => {
    if (comandos.length > 0) {
      setComandosExecutados([comandos[0]]);
    }
  }, [comandos]);

  const handleDone = () => {
    setTimeout(() => {
      setComandosExecutados((prev) => {

        const nextIndex = prev.length;
        if (nextIndex < comandos.length) {
          if(comandos[nextIndex-1].input.trim().toLowerCase() === 'clear') return [comandos[nextIndex]]
          return [...prev, comandos[nextIndex]]; 
        }
        return prev;
      });
    }, repeatDelay);
  };

  return (
    <div>
      {comandosExecutados.map((comando, index) => (
        <div key={index}>
          <TerminalLine
            comando={comando}
            user={user}
            machine={machine}
            onDone={handleDone}
          />
        </div>
      ))}
    </div>
  );
}