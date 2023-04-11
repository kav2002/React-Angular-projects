import { Container, Grid } from "@mui/material"
import { Appbar } from "../../components/navbar/Appbar"
import { NewCarousel } from "../../components/sliders/Carousle"

import { CardsApi } from "./CardsApi"


export const Responsivehomepage:React.FC=()=>{

    return <>
     <div className="container-fluid">
     <Appbar/>
     <br />
     <NewCarousel/>
     </div>
     
    <Container>

<CardsApi/>
       
    </Container>
    </>
}