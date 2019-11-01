import React, { Component } from "react";


export class Pagebutton extends Component {
    shouldComponentUpdate(){return false}
  render() {
    return (    
        <div>
        <button onClick={this.hexhex(-1)}> Zurück
          </button> 
          {/* <button onClick={this.hexhex(1)}> Vor
          </button>  */}
          </div>
     ) }
}
export default Pagebutton;
