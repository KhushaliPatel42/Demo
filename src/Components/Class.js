
import './Style.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      Name:"Ram",
      roll:123,
      sub:"javascript"
    };
  }
  UpdateState(){
    this.setState({
      Name:"shyam",
      roll:this.state.roll+1,
      sub:"es7"
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.Name}</h1> 
        <h1>Hello {this.state.roll}</h1> 
        <h1>Hello {this.state.sub}</h1> 
        <button onClick={()=>this.UpdateState()}>Update</button> 
      </div>
    )
  }
}


