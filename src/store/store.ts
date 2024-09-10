import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IStore {
  cottonData: null | any;
  setCottonData: (payload: any) => void;
}

export const useCottonData = create(
  persist<IStore>(
    (set) => ({
      cottonData: null,
      setCottonData: <T>(payload: T) =>
        set((state: any) => ({
          cottonData: { ...state.cottonData, ...payload },
        })),
    }),
    {
      name: "applyData",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
