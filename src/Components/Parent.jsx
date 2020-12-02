import React from 'react';
import Child from './Child';

const Parent = () => {

    const someValue = 30;

    const someDataObject = {
        key1: 'value1',
        key2: 2,
        key3: ['array', 'of', 'strings']
    };

    const someDataArray = [0,1,2,3,4,5,6];


    return(  
        <>
            <Child 
                name="Ramgith Jagajith"
                valueProp= {someValue}
                objectProp= {someDataObject}
                arrayProp= {someDataArray}
                />
        </>

    );
}
export default Parent; 