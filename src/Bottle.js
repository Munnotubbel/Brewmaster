import React, { Component } from "react";
import Popup from "reactjs-popup";

export class Bottle extends Component {
  render() {
    return (
      <Popup trigger={<button className="button"    	> {this.props.singleBrand.name}</button>} modal>
        {close => (
      <div>
                <div className="d-flex justify-content-between">
                
                <div className="header"><h3>{this.props.singleBrand.nameDisplay}</h3></div>
                <a className="close " onClick={close}>
                &times;
                </a>
                </div>

        <div className="content">
          {" "}
          {this.props.singleBrand.style && this.props.singleBrand.style.description}
        </div><div> 
        <ul>
            <div>{this.props.singleBrand.abv ? <li>APV {this.props.singleBrand.abv}</li> :"" }</div>
            <div>{this.props.singleBrand.ibu ? <li>IBU {this.props.singleBrand.ibu}</li> : "" }</div>
            <div>{this.props.singleBrand.isOrganic ? <li>organic {this.props.singleBrand.isOrganic}</li> : ""}</div>
            <li>year: {this.props.singleBrand && this.props.singleBrand.updateDate}</li>
            <li>status: {this.props.singleBrand && this.props.singleBrand.status}</li>
        </ul>
       
       


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
