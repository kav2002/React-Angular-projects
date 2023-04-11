const Myh1=()=>{
    return <h1> hello im h1 </h1>
}

const Myh2=()=>{
    return <h2> hii im h2 </h2>

}
const Mypar=()=>{
    return <p> this is paragraph </p>
}

 const TestComponent=()=>{
    return <>
    <h1>Hello creating my first component</h1>
    {Mypar()}
    {Myh2()}
    {Myh1()}
    </>
 }

 export default TestComponent