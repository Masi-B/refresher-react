import React from "react";

const Hey = (props) => {
    return (
        <div>
        <h1>Hello {props.name} = {props.typename}</h1>
        {props.children}
        </div>
    )
}
export default Hey
