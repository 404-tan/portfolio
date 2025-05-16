import TypingText from "./typing-text";
interface comando {
  input: string;
  output?: string;
}


export default function TerminalLine({ user, machine, comando }: { user: string; machine: string; comando: comando }) {
  return (
    <div  className="vt220-text">
      <span>{user}@{machine}:~$ <TypingText text={comando.input} /></span>
      {comando.output != undefined && (
        <div>{ comando.output}</div>
      )}
    </div>
  );
}