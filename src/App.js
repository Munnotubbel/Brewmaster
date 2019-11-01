import React, { Component } from "react";
import Beers from "./Beers";

class App extends React.Component {
  state = {
    page: 1,
    brewdata: []
  };
  componentDidMount() {
    fetch(
      `https://ubiqum-cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=c5ffa63996669f1f864c7edab6f2e457&p=1`
    )
      .then(response => response.json())
      .then(response => this.setState({ brewData: response.data }));
     
  }
  changePage = (e) => {

    let newPage = (this.state.page)+(e);
    if (this.state.page===1 && e<0){newPage=1}
   

    fetch(
      `https://ubiqum-cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=c5ffa63996669f1f864c7edab6f2e457&p=${newPage}`
    )
      .then(response => response.json())
      .then(response => this.setState({ brewData: response.data,
       page: newPage}));

 }
  render() {
    if (this.state.brewData)
      console.log(this.state.brewData.map(brand => <li>{brand}</li>));
    if (this.state.brewData) console.log(this.state.brewData);

    return (
      <div>
        <h1>Brewmaster</h1>
        <div className="d-flex justify-space-between">
          <button onClick={()=>this.changePage(-1)}> Zurück
          </button>
          <button onClick={()=>this.changePage(1)}> Vor
          </button>
        </div>
        <div className="d-flex w-75 justify-content-center">
          {this.state.brewData && <Beers daten={this.state.brewData}></Beers>}
        </div>
      </div>
    );
  }
}

export default App;
