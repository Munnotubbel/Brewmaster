import React, { Component } from "react";
import Popup from "reactjs-popup";

const Bottle =({singleBrand}) => {
  
    return (
      <Popup trigger={<button className="button"    	> {singleBrand.name}</button>} modal>
        {close => (
      <div>
                <div className="d-flex justify-content-between">
                
                <div className="header"><h3>{singleBrand.nameDisplay}</h3>
                                        {singleBrand.style.category.name ? <h5>{singleBrand.style.category.name}</h5>: ""}</div>
                <a className="close " onClick={close}>
                &times;
                </a>
                </div>

        <div className="content">
          {" "}
          {singleBrand.style && singleBrand.style.description}
        </div><div> 
        <ul>
            <div>{singleBrand.abv ? <li>APV {singleBrand.abv}</li> :"" }</div>
            <div>{singleBrand.ibu ? <li>IBU {singleBrand.ibu}</li> : "" }</div>
            <div>{singleBrand.isOrganic ? <li>organic {singleBrand.isOrganic}</li> : ""}</div>
            <li>year: {singleBrand && singleBrand.updateDate}</li>
            <li>status: {singleBrand && singleBrand.status}</li>
        </ul>
       
       


       </div>    
      </div>
    )}
        {/* <div className="modal">
          {singleBrand.style &&
            singleBrand.style.description}
        </div> */}
      </Popup>





    );
  
}

export default Bottle;
