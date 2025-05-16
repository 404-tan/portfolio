import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  onDone?: () => void;
}

export default function TypingText({ text, delay = 50, onDone }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled || i >= text.length) {
        if (!cancelled) onDone?.();
        return;
      }

      const nextChar = text.charAt(i);
      setDisplayed((prev) => prev + nextChar);
      i++;

      setTimeout(typeNext, delay);
    };

    setDisplayed(''); // Reset ao iniciar
    typeNext();

    return () => {
      cancelled = true;
    };
  }, [text, delay, onDone]);

  return <span>{displayed}</span>;
}
