import React from 'react';
const Child = (props) => {
    
    const {name, valueProp, objectProp, arrayProp} = props;

    const number = arrayProp.map(seq => <li key={seq}>Number is {seq}</li>)
    return(  
        <>
            <p>Hello, {name}</p>
            <p>The value of the value prop is {valueProp}</p>
            <p>The value of the array prop is {arrayProp}</p>
            <ol>
                {number}
            </ol>
            </>

    );
}
export default Child; 