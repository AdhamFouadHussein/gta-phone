import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import { fetchNui } from "../utils/fetchNui";
import { InstaUserData } from "../config/inventory";

interface AuthContextType {
    isLoggedIn: boolean;
    user: InstaUserData | null;
    login: (credentials: { Username: string; Password: string }) => void;
    register: (credentials: {
        Username: string;
        Password: string;
        Email: string;
        FullName: string;
        Bio: {
            body: string;
            website: string;
        };
        ProfilePicURL: string;
    }) => void;
    logout: () => void;
    fetchUser: (
        id: number,
        callback: (user: InstaUserData | null) => void
    ) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    user: null,
    login: () => {},
    register: () => {},
    logout: () => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetchUser: () => {},
});

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<InstaUserData | null>(null);

    useEffect(() => {
        // Check if user data exists in local storage
        // const userData = localStorage.getItem("user");
        // if (userData) {
        //     setUser(JSON.parse(userData)); // Parse the JSON string to object
        //     setIsLoggedIn(true);
        //     fetchNui("showFrame");
        // }
        window.addEventListener("message", handleNuiMessage);
        return () => {
            window.removeEventListener("message", handleNuiMessage);
        };
    }, []);

    const handleNuiMessage = (event: MessageEvent) => {
        const { data } = event;
        if (data.type === "USER") {
            setUser(data.payload);
            setIsLoggedIn(true);
            localStorage.setItem("user", JSON.stringify(data.payload));
        }
    };
    const fetchUser = (
        id: number,
        callback: (user: InstaUserData | null) => void
    ): void => {
        const handler = (event: MessageEvent) => {
            const { data } = event;
            if (data.type === "FETCH_USER") {
                window.removeEventListener("message", handler);
                callback(data.payload);
            }
        };

        window.addEventListener("message", handler);
        fetchNui("getUser", { UserID: id });
    };
    const login = (credentials: {
        Username: string;
        Password: string;
    }): void => {
        fetchNui("loginUser", credentials);
    };

    const register = (credentials: {
        Username: string;
        Password: string;
        Email: string;
        FullName: string;
        Bio: {
            body: string;
            website: string;
        };
        ProfilePicURL: string;
    }): void => {
        fetchNui("registerUser", credentials);
    };

    const logout = (): void => {
        localStorage.removeItem("user");
        setUser(null);
        setIsLoggedIn(false);
        fetchNui("showFrame");
    };

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, user, login, logout, register, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
};
