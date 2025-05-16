'use client';
import { useEffect, useRef, useState } from 'react';

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

  // array de comandos que será atualizado e exibido
  const [linhasTerminal,setLinhasTerminal] = useState<string[]>([]);
  
  // Controle dos comandos que serão executados
  const [indexComando, setIndexComando] = useState(0);

  // ✅ Flag para impedir duplicação de execução no mesmo índice
  const jaExecutou = useRef<Set<number>>(new Set());

  useEffect(() => {
    const bash = `${user}@${machine}:~$`;
    if (indexComando >= comandos.length) return;

    if (!jaExecutou.current.has(indexComando)) {
      const linha = `${bash} ${comandos[indexComando].input}`;
      setLinhasTerminal((prev) => [...prev, linha]);
      jaExecutou.current.add(indexComando);
    }

    // Avança para o próximo comando após mostrar o resultado
    const timeout = setTimeout(() => {
      const inputIsClear = comandos[indexComando].input === 'clear';
      if(inputIsClear) setLinhasTerminal(()=> []);
      if(comandos[indexComando].output) setLinhasTerminal((prev) => [...prev, comandos[indexComando].output!]);

      setIndexComando((prev) => prev + 1);
    }, repeatDelay);
    return () => clearTimeout(timeout); 
  },[indexComando]);

  return (
    <pre>
      {linhasTerminal.join('\n')}
    </pre> 
  );
}
