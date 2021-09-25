import React from "react";

const Hey = (props) => {
    const {name, typename} = props
    return (
      <div>
        <h1>
          Hello {props.name} = {props.typename}
        </h1>
        <h1>
          Hello {name} = {typename}
        </h1>
        {props.children}
      </div>
    );
}
export default Hey
