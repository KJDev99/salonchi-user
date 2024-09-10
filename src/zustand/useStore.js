import { create } from "zustand";

const useSidebarStore = create((set) => ({
  isOpen: true,
  setIsOpenStore: (payload) => set(() => ({ isOpen: payload })),
}));
export default useSidebarStore;

export const useToggleStore = create((set) => ({
  isOpenLoginModal: false,
  setIsOpenLoginModalStore: (payload) =>
    set(() => ({ isOpenLoginModal: payload })),
}));
