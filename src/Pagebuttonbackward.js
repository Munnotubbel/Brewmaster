import React, { Component } from "react";

/* buttonFired = e =>  {
  this.props.action(-1)
} */
export class Pagebuttonbackward extends Component {
    shouldComponentUpdate(){return false}
  render() {
const buttonPosition ={marginRight:'10vw'}
return (    
                
          
    <button onClick={()=> this.props.action(-1)}> previous Page
    </button>
 
) }
}
export default Pagebuttonbackward;
