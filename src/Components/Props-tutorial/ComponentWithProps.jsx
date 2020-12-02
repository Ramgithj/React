import React from 'react';

const ComponentWithProps = (props) => {

    return (
        <>
        <h1> The header is {props.header}</h1>
        <p> The content is {props.content}</p>
        <p> The number that comes from the prop is {props.number}</p>

        </>

    );
}

export default ComponentWithProps;