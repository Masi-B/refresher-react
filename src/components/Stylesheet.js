import React from 'react'
import  './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'tetiary'
    let class1 = props.secondary ? 'secondary' : 'fifth'
    return (
      <div>
        <h1 className={className}>{className}</h1>
            <h1 className={`${class1} secondary`}>{class1}</h1>
      </div>
    );
}

export default Stylesheet
