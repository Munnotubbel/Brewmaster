import React, { Component } from "react";

/* buttonFired = e =>  {
  this.props.action(-1)
} */
export class Pagebutton extends Component {
    shouldComponentUpdate(){return false}
  render() {
    return (    
         <div className="d-flex justify-space-between">
          <button onClick={()=> this.props.action(-1)}> Zurück
          </button>
          <p>Seite {/* {this.probs.pageAtm} */}</p>
          <button onClick={()=> this.props.action(1)}> Vor
          </button>
        </div>
     ) }
}
export default Pagebutton;
