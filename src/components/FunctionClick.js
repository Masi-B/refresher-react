import React from 'react'

function FunctionClick() {

   function clickMeFunction() {
        console.log("Button clicked");
    }

    return (
        <div>
            <button onClick = {clickMeFunction}>Click Me</button>
        </div>
    )
}

export default FunctionClick
