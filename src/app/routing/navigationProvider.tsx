import {RouterProvider} from "react-router-dom";
import {router} from "./router.ts";

export function NavigationProvider(){
    return(
      <RouterProvider router={router}/>
    );
}