import {Outlet} from "react-router-dom";
import {Navbar} from "../navbar/navbar.tsx";

export function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
