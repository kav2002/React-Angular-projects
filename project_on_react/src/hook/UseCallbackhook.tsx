import { useCallback, useState } from "react"
let fun_count=new Set()
export const UseCallbackhook:React.FC=()=>{
   let [count, setCount]= useState(0)
   let [number, setNumber]= useState(0)
   
   let increment=useCallback(()=>{
    setCount(count++)},[count])
   let decrement=useCallback(()=>{
    setCount(count--)},[count])
   
   let numberCount=()=>{setNumber(number++)}

   fun_count.add(increment)
   fun_count.add(decrement)
   fun_count.add(numberCount)
   console.log(fun_count)

    return <>
    count:{count}
<button onClick={increment}> click me</button>
<button onClick={decrement}>click me</button>
<br />
number:{number}
<button onClick={numberCount}>click me</button>
</>

   }

