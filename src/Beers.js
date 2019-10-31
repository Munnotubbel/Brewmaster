import React, { Component } from "react";
import Bottle from "./Bottle";

export class Beers extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>ABV</th>
            <th>IBU</th>
          </tr>
        </thead>
        <tbody>
          {this.props.daten.map((brand, index) => {
            const { labels } = brand;

            return (
              <tr key={brand.id}>
                <td>{labels ? <img src={labels.icon}></img> : <p></p>}</td>
                <td>{brand && <Bottle singleBrand={brand}></Bottle>}</td>
                <td>{brand.abv}</td>
                <td>{brand.ibu}</td>
              </tr>
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
}
export default Beers;
