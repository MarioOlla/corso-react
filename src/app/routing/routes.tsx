import {Outlet} from "react-router-dom";
import {LoginPage} from "../pages/login/loginPage.tsx";
import {Layout} from "../component/layout/layout.tsx";
import {RegisterPage} from "../pages/register/registerPage.tsx";

export const routes = [
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "users",
                element: <Outlet/>,
                children: [
                    {
                        path:"",
                        element:<div>Lista Utenti</div>
                    },
                    {
                        path:"new",
                        element:<div>Detail user</div>
                    },
                    {
                        path:"user/:id",
                        element:<div>Detail user</div>
                    }
                ]
            },
            {
                path: "courses",
                element: <Outlet/>,
                children: [
                    {
                        path:"",
                        element:<div>Lista Corsi</div>
                    },
                    {
                        path:"new",
                        element:<div>Detail corso</div>
                    },
                    {
                        path:"course/:id",
                        element:<div>Detail corso</div>
                    }
                ]
            },
        ]
    },
    {
        path:"login",
        element: <LoginPage/>
    },
    {
        path:"register",
        element: <RegisterPage/>
    },
]