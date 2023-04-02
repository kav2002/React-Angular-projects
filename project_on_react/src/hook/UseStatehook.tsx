import { useState } from "react"

export const UseStatehook:React.FC=()=>{
    
    let name1="kavya"
    let [name,setName]=useState("kavya")
    let[show,setShow]=useState(false)
    console.log(name)
     
    let Uchange=(data:any)=>{
        
        setName(data.target.value)
    }
    
 return <>
    <p>hello user give me ur name</p>
    <input type="text" name="" onChange={Uchange}/> <br />
    <button onClick={()=>{
    setShow(true) }}>click me</button>
    {show?<h2>hello my name is ---{name}</h2>:<></>
    }
    </>
}
const useMyhook=()=>{
    return []
}