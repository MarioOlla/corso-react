import axios from 'axios';
import {User} from "../../lib/model.tsx";

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Cambia con l'URL del tuo backend
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const AuthService ={
    register: async  (newUser:User) => {
        const response = await api.post("/register", newUser);
        return response.data;
    },

    login: async (credentials:{email:string; password:string}) => {
        const response = await api.post("/login", credentials);
        return response.data;
    },
    logout : () => {
        console.log("logout")
    }
}

