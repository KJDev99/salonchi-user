import { create } from "zustand";

const useToken = create((set) => ({
  token: null,
  setToken: <T>(payload: T) => set(() => ({ token: payload })),
}));

export default useToken;
