import { Outlet } from "react-router-dom";
import { Myfragment } from "../notes/fragment/Myfragment";
import { UseStatehook } from "../hook/UseStatehook";
import { CountUseState } from "../hook/CountUseState";




 
 export const ThisRoutes={
    path:'/pro',
    element:(<><Outlet/></>),
    children:[
        
        
        {
            path:'fragments',
            element:(<Myfragment/>)
        },
        {
            path:'hookes',
            element:(<><CountUseState/> <div>--------------------------------------------</div><UseStatehook/></>)
        }
        
        
    ]
    
 }