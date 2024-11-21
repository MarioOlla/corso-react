import {useAuth} from "../../context/authContext.tsx";
import {useState} from "react";

export function LoginPage (){

    const [credentials, setCredentials] = useState<{email:string; password:string }>({
        email:"",
        password:""
    })

    const { login } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(credentials);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor={"email"}>Email</label>
                <input id={"email"} name={"email"} value={credentials.email} onChange={handleChange}/>
                <label htmlFor={"password"}>Password</label>
                <input id={"password"} name={"password"} value={credentials.password} onChange={handleChange}/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
}