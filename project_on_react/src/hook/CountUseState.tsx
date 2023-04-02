import { useState } from "react"

export const CountUseState:React.FC=()=>{
      const [count, setcount]=useState(0)

      function decrementCount(){
        setcount(prevCount => prevCount - 1)
      }   
      function incrementCount(){
        setcount(prevCount => prevCount + 1)
      }       

   return <>
   
   <button onClick={decrementCount}>-</button>
   <span>{count}</span>
   <button onClick={incrementCount}>+</button>
   </>
   
}