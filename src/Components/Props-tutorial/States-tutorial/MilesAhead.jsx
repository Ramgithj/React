import React, {useState} from 'react';

const MilesAhead = () => {

const [steps, setSteps] = useState(0);

function increment(){
    setSteps(steps +1);
}

    return(
        <>
        <p>Today you have taken {steps} steps!</p>
        <br/>
        <button onClick={increment}> I took another step</button>
        </>

    );

}

export default MilesAhead;