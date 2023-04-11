import { Grid } from "@mui/material";
import { NewCards } from "../../components/cards/NewCards";
import { useEffect, useState } from "react";
import { ProductApi } from "../../api/ProductApi";

export const CardsApi:React.FC=()=>{
    let [pro,setPro]=useState<any>()
useEffect(()=>{

    (async()=>{
        let data=await ProductApi()
        setPro(data)
    })()
},[]);

return <>
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
    {
    
        pro?.map((s:any)=>{
            return <NewCards imge={s.image}/>


        })
        }
    
    </Grid>
</>
}
