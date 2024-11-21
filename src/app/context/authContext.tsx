import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {IAuthContextType} from "../../lib/types.tsx";
import {User} from "../../lib/model.tsx";
import {AuthService} from "../service/authService.tsx";
import {jwtDecode} from "jwt-decode";


const AuthContext = createContext< IAuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const svc = AuthService;

    const login = (credentials:{email:string; password:string}) => {
        svc.login(credentials).then(res => {
            localStorage.setItem("authToken", res.token);
            const userFromToken:User = jwtDecode(res.token);
            setUser(userFromToken)
        }).catch(err => {
            console.error(err)})
        // setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};