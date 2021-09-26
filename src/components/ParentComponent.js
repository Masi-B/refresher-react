import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };

      this.greetParent = this.greetParent.bind(this);
      this.greetParent1 = this.greetParent1.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  greetParent1(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} greetHandler1={this.greetParent1} />
      
      </div>
    );
  }
}

export default ParentComponent
