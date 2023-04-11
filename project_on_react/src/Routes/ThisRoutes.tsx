import { Outlet } from "react-router-dom";

import { UseStatehook } from "../hook/UseStatehook";
import { CountUseState } from "../hook/CountUseState";
import { UseEffecthook } from "../hook/UseEffecthook";
import { UseLayouthook } from "../hook/UseLayouthook";
import { UseCallbackhook } from "../hook/UseCallbackhook";





 
 export const ThisRoutes={
    path:'/pro',
    element:(<><Outlet/></>),
    children:[
        
        
        
        {
            path:'hookes',
            element:(<><CountUseState/> <div>--------------------------------------------</div><UseStatehook/> <div>--------------------------------------</div> <UseEffecthook/> <div>------------------------------------------</div><UseLayouthook/> <div>-------------------------------------------</div><UseCallbackhook/></>)
        }
        
        
        
    ]
    
 }