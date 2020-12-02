import React, {useState, useEffect} from 'react'

function Name() {
    const[fullName, setFullName] = useState("");
    useEffect(()=>{
        document.getElementsByClassName = `name : ${fullName}`
        return ( ()=> console.log(`name: ${fullName}`));

    })

    return (
        <div>
            <form>
         <input type="text" placeholder="Enter your name"></input>  
         <button type="submit" onSubmit={() =>setFullName(fullName)}>Enter</button> 
        </form>
        <p className="name">NAME:</p>
        </div>
    )
}

export default Name
