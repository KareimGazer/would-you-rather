import React, { Component } from "react";
import { connect } from "react-redux";
import { handelInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handelInitialData());
  }
  render() {
    return <div>Starter Code</div>;
  }
}

export default connect()(App);
