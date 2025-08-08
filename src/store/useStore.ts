// src/store/useStore.ts: Zustand global store (user, family, UI state)
import create from 'zustand';

export interface User {
  id: string;
  email: string;
  family_id: string;
}

type State = {
  user: User | null;
  setUser: (u: User | null) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
};

export const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
