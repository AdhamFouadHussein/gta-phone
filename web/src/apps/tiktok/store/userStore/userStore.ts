import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { fetchNui } from "../../../../utils/fetchNui";

interface AuthUser {
  id: string;
  userName: string;
  email: string;
}

interface StoreAuth {
  user: AuthUser | null;
  login: (user: AuthUser) => any;
  logout: () => any;
}

export const useAuthStore = create(
  persist<StoreAuth>(
    (set) => ({
      user: null,
      login: (user: AuthUser) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "tiktok-auth-user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
