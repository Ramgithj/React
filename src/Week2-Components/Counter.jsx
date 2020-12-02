import React, {useState, useEffect} from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = `Clicked ${count} times`
        return ( ()=> console.log(`Final: ${count}`));
    });

    return (
        <>
        <p>The value of count is 2{count}</p>
        <button onClick={()=>setCount(count => count + 1)}>INCREMENT</button>
    
        </>

    )


}

export default Counter
