import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  topicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
    };
    
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Label</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserName}
          ></input>
        </div>
        <div>
          <label>comments</label>
          <textarea
            value={this.setState.comments}
            onChange={this.commentChange}
          ></textarea>
        </div>
        <div>
          <label> Topic</label>
          <select value={this.state.topic} onChange={this.topicChange}>
            <option value="react">React</option>
            <option value="angular">Angula</option>
            <option value="typeScript">TypeScript</option>
          </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
      </form>
    );
  }
}

export default Form;
