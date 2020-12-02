import React from 'react';
import ComponentWithProps from './Props-tutorial/ComponentWithProps';

const MyComponent = () => {
    return (
        <>
        <ComponentWithProps
            header = 'Exercise'
            content = "This is a content."
            number = '9'

        />
        </>
    )
}

export default MyComponent