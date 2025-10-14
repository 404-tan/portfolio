import { create } from "zustand";

interface TerminalOutputState {
  showOutputMap: Record<number, boolean>;
  toggleOutput: (index: number) => void;
  setOutputVisible: (index: number, visible: boolean, delay?: number) => void;
  reset: () => void;
}

export const useTerminalOutputStore = create<TerminalOutputState>((set) => ({
  showOutputMap: {},

  toggleOutput: (index) =>
    set((state) => ({
      showOutputMap: {
        ...state.showOutputMap,
        [index]: !state.showOutputMap[index],
      },
    })),

  setOutputVisible: (index, visible, delay = 50) => {
    setTimeout(() => {
      set((state) => ({
        showOutputMap: {
          ...state.showOutputMap,
          [index]: visible,
        },
      }));
    }, delay);
  },

  reset: () => set({ showOutputMap: {} }),
}));
