'use client';
import { useEffect, useState } from "react";
import TypingText from "./typing-text";
import { useTerminalOutputStore } from "../../store/useTerminalOutputStore";

interface comando {
  input: string;
  output?: string;
}

interface TerminalLineProps {
  user: string;
  machine: string;
  comando: comando;
  index: number; 
  onDone?: () => void;
}

export default function TerminalLine({
  user,
  machine,
  comando,
  index,
  onDone,
}: TerminalLineProps) {
  const { showOutputMap, setOutputVisible } = useTerminalOutputStore();
  const mostrarOutput = showOutputMap[index] ?? false;

  const [done, setDone] = useState(false);

  useEffect(() => {
    if (mostrarOutput && onDone) {
      const timer = setTimeout(() => onDone(), 200);
      return () => clearTimeout(timer);
    }
  }, [mostrarOutput, onDone]);

  return (
    <div className="vt220-text" style={{ fontWeight: "normal" }}>
      <span>
        {user}@{machine}:~${" "}
        <TypingText
          text={comando.input}
          done={done}
          onDone={() => {
            if (comando.output !== undefined) {
              setOutputVisible(index, true);
            } else if (onDone) {
              onDone();
            }
            setDone(true);
          }}
        />
      </span>
      {mostrarOutput && comando.output && <div>{comando.output}</div>}
    </div>
  );
}
