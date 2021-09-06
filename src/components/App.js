import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handelInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import Login from "./Login";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    //this.props.dispatch(handelInitialData());
  }
  render() {
    // if (this.props.authedUser === null) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <Router>
        <div className="container">
          <LoadingBar />
          <Nav />
          <Route path="/login" component={Login} />
          {this.props.loading === true ? (
            <h1 className="center">Loading ...</h1>
          ) : (
            <NewQuestion></NewQuestion>
          )}
        </div>
      </Router>
    );
  }
}

// this my case the app to stuck in loading
// as there will be no way to login until login component done
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
