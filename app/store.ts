import { create } from "zustand";

type Store = {
  theme: number;
  setTheme: (e: number) => void;
  language: number;
  setLanguage: (e: number) => void;
  click: string;
  setClick: (e: string) => void;
  isOpen: boolean;
  setIsOpen: () => void;
  loader: boolean;
  setLoader: () => void;
};

const Master = create<Store>()((set) => ({
  theme: 0,
  setTheme: (e) => set(() => ({ theme: e })),
  language: 0,
  setLanguage: (e) => set(() => ({ language: e })),
  click: "Home",
  setClick: (e) => set(() => ({ click: e })),
  isOpen: false,
  setIsOpen: () => set((e) => ({ isOpen: !e.isOpen })),
  loader: true,
  setLoader: () => set((e) => ({ loader: !e.loader })),
}));

export { Master };
