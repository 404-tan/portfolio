import TypingText from "./typing-text";

export default function TerminalLine({ user, machine, comando }: { user: string; machine: string; comando: Comando }) {
  return (
    <div>
      <span>{user}@{machine}:~$ <TypingText text={comando.input} /></span>
      {comando.output && (
        <div><TypingText text={comando.output} /></div>
      )}
    </div>
  );
}