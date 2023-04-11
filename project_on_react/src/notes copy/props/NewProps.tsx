let Ish1=(a:any)=>{
    return <h1>{a}</h1>
}
let Ish2:React.FC<{kavya:string}>=(props)=>{
    return <h1>{props.kavya}</h1>
}
export const NewProps=()=>{
return <div>
<center><h1> properties or props or gifts</h1></center>
<h2>normal way of passing arguments</h2>
{ Ish1('hello im not repeated')}
{ Ish1('hello im not repeated1')}
{ Ish1('hello im not repeated2')}
{ Ish1('hello im not repeated3')}
{ Ish1('hello im not repeated4')}
<h2>tsx way of passing the props</h2>
<Ish2 kavya={"hello im not repeated1"}/>
<Ish2 kavya={"hello im not repeated2"}/>
<Ish2 kavya={"hello im not repeate3"}/>
<Ish2 kavya={"hello im not repeated4"}/>
</div>

}