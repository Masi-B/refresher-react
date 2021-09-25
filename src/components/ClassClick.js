import React, { Component } from 'react'

class ClassClick extends Component {
      classClick() {
          console.log("Class clicked");
     }
    render() {
        return (
            <div>
                <button onClick={this.classClick}>Class Click</button>
            </div>
        )
    }
}

export default ClassClick
