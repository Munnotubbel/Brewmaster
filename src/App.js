import React, { Component } from "react";
import Beers from "./Beers";

class App extends React.Component {
  state = {
    brewdata: []
  };
  componentDidMount() {
    fetch(
      "https://ubiqum-cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=c5ffa63996669f1f864c7edab6f2e457"
    )
      .then(response => response.json())
      .then(response => this.setState({ brewData: response.data }));
  }

  render() {
    if (this.state.brewData)
      console.log(this.state.brewData.map(brand => <li>{brand}</li>));
    if (this.state.brewData) console.log(this.state.brewData);

    return (
      <div>
        <h1>Brewmaster</h1>
        <div className="d-flex w-75 justify-content-center">
          {this.state.brewData && <Beers daten={this.state.brewData}></Beers>}
        </div>
      </div>
    );
  }
}

export default App;
