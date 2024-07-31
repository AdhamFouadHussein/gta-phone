// src/store/useSignupStore.ts
import create from 'zustand';
import { persist } from 'zustand/middleware';

// Define the state interface
interface SignupState {
    email: string;
    password: string;
    nickname: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setNickname: (nickname: string) => void;
    reset: () => void;
}

// Create the Zustand store
const useSignupStore = create<SignupState>()(
    persist(
        (set) => ({
            email: '',
            password: '',
            nickname: '',
            setEmail: (email: string) => set({ email }),
            setPassword: (password: string) => set({ password }),
            setNickname: (nickname: string) => set({ nickname }),
            reset: () => set({ email: '', password: '', nickname: '' }),
        }),
        {
            name: 'tiktok-signup-storage', // name of the item in the storage (localStorage in this case)
        }
    )
);

export default useSignupStore;
