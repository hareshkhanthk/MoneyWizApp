import { create } from 'zustand';

type User = {
  id: string;
  email: string;
  family_id: string;
};

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
