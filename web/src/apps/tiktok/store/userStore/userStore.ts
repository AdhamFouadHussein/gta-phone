import {create} from 'zustand'
import {createJSONStorage, persist} from "zustand/middleware";
import {fetchNui} from "../../../../utils/fetchNui";

interface AuthUser {
    Username: string;
    Password: string;
    Email: string;
    FullName: string;
    Bio: {
        body: string;
        website: string;
    };
    ProfilePicURL: string;
}

interface StoreAuth {
    user: AuthUser | null,
    login: (user: AuthUser) => any,
    signup:(user: AuthUser)=>any,
    logout: () => any
}


export const useAuthStore = create(persist<StoreAuth>((set) => ({
    user: null,
    login: (user: AuthUser) => set({user}),
    logout: () => set({user: null}),
    signup: async (user: AuthUser) => {
        try {
            const response:any = await fetchNui("registerUser", user);
            if (response.success) {
                set({ user: response.user });
            } else {
                console.error('Registration failed', response.message);
            }
        } catch (error) {
            console.error('An error occurred during registration', error);
        }
    },
}), {
    name: 'tiktok-auth-user',
    storage: createJSONStorage(() => localStorage),
}))



