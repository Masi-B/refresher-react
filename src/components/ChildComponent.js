import React from 'react'

function ChildComponent(props) {
    return (
      <div>
        <button onClick={props.greetHandler}>Greet parent</button> <span/>
        <button onClick={() =>props.greetHandler1('child')}>Greet method</button>
      </div>
    );
}

export default ChildComponent
