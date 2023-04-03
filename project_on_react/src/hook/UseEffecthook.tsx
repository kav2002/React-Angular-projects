import { useEffect } from "react"

export const UseEffecthook:React.FC=()=>{
    useEffect(()=>{
        Blist.map((a)=>{
            a.dob=='14/02/1997'?console.log(  a.name):<></>
        })
    })
    
    
    
    return <>
   my birthday----- </>
}

let Blist=[
    {name:'kavya', dob:'30/09/2022' },
    {name:'praveen', dob:'14/02/1997'},
    {name:'teju', dob:'11/07/2000'}
]
