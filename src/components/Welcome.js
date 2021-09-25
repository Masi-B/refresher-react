//class components
import React, { Component } from "react"

class Welcome extends Component {
    
    render() {
        const { name, typename } = this.props
        return <h1>{name} is my {typename}</h1>
    }
    
}

export default Welcome