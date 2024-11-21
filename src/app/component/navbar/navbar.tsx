import {useNavigate} from "react-router-dom";

export function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("login")}>Login</button>
        </>
    );
}