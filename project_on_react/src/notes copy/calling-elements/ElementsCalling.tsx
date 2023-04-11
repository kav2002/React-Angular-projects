import { Myh3 } from "./Myh3"

export const ElementCalling=()=>{
    return <div>
        <p> normal way of calling elements are</p>
        <h1> hello im h1</h1>
        <h2> hii im h2</h2>
        <p> Another way of calling elements</p>

        <Myh1/>
        <Myh2></Myh2>

        <p>Third way of Calling elements external </p>
        <Myh3/>
        
    </div>
}

const Myh1=()=>{

    return <h1> hello this is another way of calling elements</h1>

   
}

const Myh2=()=>{
    return <h2> this is Second way</h2>
}