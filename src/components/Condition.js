import React, { Component } from 'react'

class Condition extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: false
         }
     }
     
    render() {
   /*     if (this.state.isLoggedIn) {
            return <button>Condition One</button>;
        } else {
           return   <button>Condition Two</button>;
        } */
        
        return  this.state.isLoggedIn ? (
            <button>Condition One</button>
        ) : (
            <button>Condition Two</button> 
            )
                   
      
        
        return (

          <div>
            <button>Condition One</button>
            <button>Condition Two</button>
          </div>
        );
    }
}

export default Condition
