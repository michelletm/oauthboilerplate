import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { incrementCounter, decrementCounter} from "./actions";


class App extends Component {
  render() {
    return (
      //<Router>
        <div>
          <h1>Hello World{this.props.counter} </h1>
          <button onClick={this.props.incrementCounter} >Increment</button>
          <button onClick={this.props.decrementCounter}>Decrement</button>
        </div>
      //</Router>
    );
  }
}

function mapStateToProps({counter}){
  return {counter};
}


export default connect(mapStateToProps, {incrementCounter, decrementCounter})(App);
