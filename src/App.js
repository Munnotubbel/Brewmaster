import React, { Component } from "react";
import Beers from "./Beers";
import { StickyContainer, Sticky } from 'react-sticky';
import Pagebuttonforward from "./Pagebuttonforward"
import Pagebuttonbackward from "./Pagebuttonbackward"
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
const styleHead = {backgroundColor:'#BDBDBD', height:'6vw', minheight:'30px ', marginLeft:'3vw',marginRight:'3vw'}
const styleTitle = {fontSize:'4vw'}
    return (
      <StickyContainer>
      <Sticky>{({ style }) =>
      <div className="" style={style}>
        <div style={styleHead}>
        <div className="row d-flex justify-content-center">
        <div className="mr-auto"><Pagebuttonbackward page={this.state.page} action={this.changePage} ></Pagebuttonbackward></div>
        <div style={styleTitle}>Brewmaster</div>
        <img src=""></img>
        <div className="ml-auto"><Pagebuttonforward page={this.state.page} action={this.changePage} ></Pagebuttonforward></div>
        </div>
        
    </div>
        </div>
         
         }</Sticky>
      
        
        <div className="d-flex flex-column" style={{marginTop:'2vw'}}>
          <div className="d-flex justify-content-center "><p>Page {this.state.page}</p></div>
          <div className="d-flex justify-content-center ">
        <div className="d-flex w-75 table-responsive">
          {this.state.brewData && <Beers loading={this.state.loading} daten={this.state.brewData}></Beers>}
          
        </div></div>
        </div>
      </StickyContainer>
    );
  }
}

export default App;
