import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  done: boolean;
  delay?: number;
  onDone?: () => void;
}

export default function TypingText({ text, delay = 50, onDone,done }: TypingTextProps) {
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
    if(done === false){
      setDisplayed(''); 
      typeNext();
    }


    return () => {
      cancelled = true;
    };
  }, [text, delay, onDone]);

  return <span>{displayed}</span>;
}
