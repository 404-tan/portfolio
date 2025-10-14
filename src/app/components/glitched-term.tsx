'use client';
import { useEffect, useState } from 'react';
import TerminalLine from './terminal-line';
import { useTerminalStore } from '../../store/useTerminalStore';


interface comando {
  input: string;
  output?: string;
}

interface GlitchedTermProps {
  user: string;
  machine: string;
  comandos: comando[];
  onDone?: () => void;
  fontSize?: string;
  repeatDelay?: number;
}

export default function GlitchedTerm({
  user,
  machine,
  comandos,
  onDone,
  fontSize = '1.2rem',
  repeatDelay = 300
}: GlitchedTermProps) {
  const { comandosExecutados, setComandos, executarProximo, currentIndex, doneCalled, setDoneCalled } = useTerminalStore();
  const numeroComandos =comandos.length;

  useEffect(() => {
    setComandos(comandos);
    setDoneCalled(false);
  }, [comandos]);

  useEffect(() => {
    if (
      numeroComandos === currentIndex &&
      !doneCalled &&
      currentIndex !== 0
    ) {
      setDoneCalled(true);
      onDone?.();
    }
  }, [currentIndex, comandos.length, onDone, doneCalled, setDoneCalled]);

  return (
    <div style={{ fontSize }}>
      {comandosExecutados.map((comando, index) => (
        <div key={index}>
          <TerminalLine
            comando={comando}
            user={user}
            machine={machine}
            index={index}
            onDone={() => executarProximo(repeatDelay)}
          />
        </div>
      ))}
    </div>
  );
}
