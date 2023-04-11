import { Outlet } from "react-router-dom";
import { RegisterPage } from "../e-commerce-site/registration-page/RegisterPage";

import { Loginpage } from "../e-commerce-site/Login-page/Loginpage";
import { Responsivehomepage } from "../e-commerce-site/Home-page/Responsivehomepage";
import { BestSeller } from "../e-commerce-site/Seller-page/BestSeller";


export const ProjectRoute={
    path:'/notes',
    element:(<><Outlet/></>),
    children:[
        
        {
            path:'register',
            element: <><RegisterPage/></>
        },
        
        {
            path:'login',
            element: <><Loginpage/></>
        },
        {
            path:'home',
            element: <><Responsivehomepage/></>
        },
        {
            path:'seller',
            element: <><BestSeller/></>
        }
        
        
    ]
    }