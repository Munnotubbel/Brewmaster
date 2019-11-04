import React, { Component } from "react";

/* buttonFired = e =>  {
  this.props.action(-1)
} */
export class Pagebuttonforward extends Component {
    shouldComponentUpdate(){return false}
  render() {

    return (    
                
          
          <button onClick={()=> this.props.action(1)}> next Page
          </button>
       
     ) }
}
export default Pagebuttonforward;
