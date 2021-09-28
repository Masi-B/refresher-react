//class components
import React, { Component } from "react"
import "./myStyles.css";


class Welcome extends Component {

render(props) {
        let className = this.props.secondary ? 'secondary' : ''

        const { name, typename } = this.props
        return <h1 className={className}>{name} is my {typename}</h1>
    }
    
}

export default Welcome