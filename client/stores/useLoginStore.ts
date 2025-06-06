import { create } from 'zustand';

interface LoginFormState {
  isLoginFormOpen: boolean;
  openLoginForm: () => void;
  closeLoginForm: () => void;
}

export const useLoginFormStore = create<LoginFormState>((set) => ({
  isLoginFormOpen: false,
  openLoginForm: () => set({ isLoginFormOpen: true }),
  closeLoginForm: () => set({ isLoginFormOpen: false }),
}));