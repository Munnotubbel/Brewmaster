import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

export class Bottle extends Component {
  render() {
    return (
      <Popup trigger={<button className="button"    	> {this.props.singleBrand.name}</button>} modal>
        {close => (
      <div>
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"><h3>{this.props.singleBrand.name}</h3></div>
        <div className="content">
          {" "}
          {this.props.singleBrand.style && this.props.singleBrand.style.description}
        </div>
       
      </div>
    )}
        {/* <div className="modal">
          {this.props.singleBrand.style &&
            this.props.singleBrand.style.description}
        </div> */}
      </Popup>





    );
  }
}

export default Bottle;
