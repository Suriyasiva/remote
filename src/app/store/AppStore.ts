import { create } from 'zustand';

interface AppState {
  storeCount: number;
  updateStoreCount: () => void;
}

// Create the store
export const useAppStore = create<AppState>((set) => ({
  storeCount: 0,
  updateStoreCount: () =>
    set((state) => ({ storeCount: state.storeCount + 1 })),
}));
