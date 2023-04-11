export const Paranthises=()=>{
    let hello= "im a variable"

    let test=()=>{
        return <h3> testing normal func in {}</h3>
    }

    let Test=()=>{

        return <h3> testing TSX functions  hear u have first letter caps</h3>
    }
    return <div>
        <center>
            <h2> im topic of paranthises in tsx</h2>
        </center>

       
        <h2> it displays the value of variable---{hello}</h2>
        <br />
        {test()}

        <Test></Test>
        { <h1>multiple</h1>
        }
    </div>
}
