'use client';
import { useEffect, useRef, useState } from 'react';
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
  repeatDelay = 1500,
}: GlitchedTermProps) {

  

  return (
    <div>
      {comandos.map((comando, index) => (
        <div key={index}>
          <TerminalLine comando={comando} user={user} machine={machine} />
        </div>
      ))}
    </div>
  );
}
