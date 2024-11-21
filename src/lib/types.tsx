import {User} from "./model.tsx";

export interface IAuthContextType {
    user: User | null;
    login: (credentials: {email:string; password:string}) => void;
    logout: () => void;
}

export interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}