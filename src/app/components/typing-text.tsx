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
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay, onDone]);

  return <span>{displayed}</span>;
}