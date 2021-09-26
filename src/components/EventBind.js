import React, { Component } from 'react'

class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "wasup"
         }

      //   this.messageBye = this.messageBye.bind(this)
    }
    
    messageBye = () => {
        this.setState({
            message: "see ya"
        }
        )
    }
     
    render() {
        return (
          <div>
            <div>{this.state.message}</div>
            {/*  <button onClick={this.messageBye.bind(this)}>Event Button</button> */}
            <button onClick={ this.messageBye}>Event Button</button>
          </div>
        );
    }
}

export default EventBind
