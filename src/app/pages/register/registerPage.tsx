import {useState} from "react";
import {Register} from "../../../lib/types.tsx";
import {z} from "zod";
import {AuthService} from "../../service/authService.tsx";

export function RegisterPage(){

    const [form, setForm] = useState<Register>({
        firstName: "",
        lastName:"",
        email: "",
        password: ""
    });

    const validation = z.object({
        firstName: z.string().min(2).max(20),
        lastName: z.string().min(2).max(20),
        email: z.string().min(6).email(),
        password: z.string().min(12).max(18)
    }).required();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const validationResult = validation.safeParse(form);
        if (validationResult.success) {
            AuthService.register(validationResult.data)
                .then( res => console.log(res) )
                .catch(err => console.error(err))
        } else
            console.error("ci sono errori di validazione", validationResult.error);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"firstName"}>Nome</label>
            <input id={"firstName"} name={"firstName"} value={form.firstName} onChange={handleChange}/>
            <label htmlFor={"lastName"}>Cognome</label>
            <input id={"lastName"} name={"lastName"} value={form.lastName} onChange={handleChange}/>
            <label htmlFor={"email"}>Email</label>
            <input id={"email"} name={"email"} value={form.email} onChange={handleChange}/>
            <label htmlFor={"password"}>Password</label>
            <input id={"password"} name={"password"} value={form.password} onChange={handleChange}/>
            <button type={"submit"}>Register</button>
        </form>
    )
}