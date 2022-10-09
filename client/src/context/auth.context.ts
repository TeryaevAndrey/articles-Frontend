import {createContext} from "react";

interface AuthContextTypes {
    token: string | undefined;
    userId: string | undefined;
    isAuth: boolean;
    login: (jwtToken: string, id: string, name: string) => void;
    logout: () => void;
    name: string | undefined;
}

const noop = (): void => {};

export const AuthContext = createContext<AuthContextTypes>({
    token: undefined,
    userId: undefined, 
    isAuth: false,
    login: noop, 
    logout: noop,
    name: undefined
});