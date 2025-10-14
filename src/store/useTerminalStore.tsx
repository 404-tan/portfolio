import { create } from 'zustand';

interface Comando {
  input: string;
  output?: string;
}

interface TerminalState {
  comandos: Comando[];
  comandosExecutados: Comando[];
  currentIndex: number;
  setComandos: (comandos: Comando[]) => void;
  executarProximo: (repeatDelay?: number) => void;
  clearComandos: () => void;
  doneCalled: boolean;
  setDoneCalled: (doneCalled: boolean) => void;
}

export const useTerminalStore = create<TerminalState>((set, get) => ({
  comandos: [],
  comandosExecutados: [],
  currentIndex: 0,

  setComandos: (comandos) =>
    set({
      comandos,
      comandosExecutados: comandos.length ? [comandos[0]] : [],
      currentIndex: comandos.length ? 1 : 0,
    }),

  executarProximo: (repeatDelay = 700) => {
    const { comandos, comandosExecutados, currentIndex } = get();
    if (currentIndex >= comandos.length) return;

    const nextComando = comandos[currentIndex];
    const lastComando = comandosExecutados[comandosExecutados.length - 1];

    setTimeout(() => {
      if (!nextComando) return;


      if (lastComando?.input.trim().toLowerCase() === 'clear') {
        set({
          comandosExecutados: [nextComando],
          currentIndex: currentIndex + 1,
        });
      } else {
        set({
          comandosExecutados: [...comandosExecutados, nextComando],
          currentIndex: currentIndex + 1,
        });
      }
    }, repeatDelay);
  },

  clearComandos: () => set({ comandosExecutados: [], currentIndex: 0 }),
  doneCalled: false,
  setDoneCalled: (value) => set({ doneCalled: value }),
}));
