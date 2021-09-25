//class components
import React, { Component } from "react"

class Welcome extends Component {
    render() {
        return <h1>{this.props.name} is my {this.props.typename}</h1>
    }
    
}

export default Welcome