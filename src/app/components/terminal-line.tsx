import { useEffect, useState } from "react";
import TypingText from "./typing-text";

interface comando {
  input: string;
  output?: string;
}

export default function TerminalLine({
  user,
  machine,
  comando,
  onDone,
}: {
  user: string;
  machine: string;
  comando: comando;
  onDone?: () => void;
}) {
  const [mostrarOutput, setMostrarOutput] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (mostrarOutput && onDone) {
      // chama o onDone só depois de mostrar o output
      const timer = setTimeout(() => onDone(), 200); // pequeno delay opcional
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
              setMostrarOutput(true);
            } else {
              if (onDone) onDone(); // se não tiver output, pode chamar direto
            }
            setDone(true)
          }}
        />
      </span>
      {mostrarOutput && comando.output && <div>{comando.output}</div>}
    </div>
  );
}
