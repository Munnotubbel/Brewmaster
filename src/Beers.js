import React, { Component } from "react";
import Bottle from "./Bottle";
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
const Beers =({loading, daten}) => {
 if (loading){
   return <Spinner/>
 }
 else{
    return (
      <table className="table table-hover">
        <thead className="thead">
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>ABV</th>
            <th>IBU</th>
          </tr>
        </thead>
        <tbody>
          {daten.map((brand, index) => {
            const { labels } = brand;

            return (
              <Bottle singleBrand={brand}></Bottle>
            );
          })}
        </tbody>
      </table>
    ); /* this.props.brewData.map((beers)=>(
                <Bottle key={brewData.name} brewData={brewData}/>

            ));
        }
      
    } */
    //PropTypes
    /* Beers.PropTypes = {
    brewData: PropTypes.array.isRequired
} */
  
}
Beers.PropTypes = {
  daten: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

}
export default Beers;
