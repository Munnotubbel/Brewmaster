import React, { Component } from "react";
import Beers from "./Beers";
import Pagebutton from "./Pagebutton"

class App extends Component {
  state = {
    page: 1,
    brewdata: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({loading: true})
    fetch(
      `https://ubiqum-cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=c5ffa63996669f1f864c7edab6f2e457&p=1`
    )
      .then(response => response.json())
      .then(response => this.setState({ brewData: response.data, loading:false }));
     
  }
  changePage = (e) => {
    this.setState({loading: true})
    let newPage = (this.state.page)+(e);
    if (this.state.page===1 && e<0){newPage=1}
   
    this.setState({loading: true})
    fetch(
      `https://ubiqum-cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=c5ffa63996669f1f864c7edab6f2e457&p=${newPage}`
    )
      .then(response => response.json())
      .then(response => this.setState({ brewData: response.data,
       page: newPage,loading: false}));
       
        console.log("Changed state brewData")
 }

  render() {

    return (
      <div>
        <h1>Brewmaster</h1>
        <Pagebutton pageAtm={this.state.page} action={this.changePage} ></Pagebutton>
        <div className="d-flex w-75 justify-content-center">
          {this.state.brewData && <Beers loading={this.state.loading} daten={this.state.brewData}></Beers>}
        </div>
      </div>
    );
  }
}

export default App;
