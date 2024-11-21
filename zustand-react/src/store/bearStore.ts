import {create} from "zustand";

type State = {
  bears: number
}

type Action = {
  increaseBears: (num: State["bears"]) => void
  removeAllBears: () => void
}

const useBearStore = create<State & Action>((set) => ({
  bears: 0,
  increaseBears: (num: number) => set((state) => ({
    ...state,
    bears: state.bears + num
  })),
  removeAllBears: () => set((state) => ({
    ...state,
    bears: 0
  }))
}));

export default useBearStore;