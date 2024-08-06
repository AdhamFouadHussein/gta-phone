import create from 'zustand';

interface DrawerState {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
}

const useDrawerStore = create<DrawerState>((set) => ({
    isOpen: false,
    openDrawer: () => set({ isOpen: true }),
    closeDrawer: () => set({ isOpen: false }),
    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useDrawerStore;
