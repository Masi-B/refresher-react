//class components
import React, { Component } from "react";

class Message extends Component {

  //constructor
  constructor() {
    super()
    this.state = {
      message: "Welcome visitor"
    }
  }
  
  changeMessage() {
    this.setState ( {
      message: "You are now subscribed"
    }
    )
  }


  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
