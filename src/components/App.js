import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import PollNav from "./PollsNav";
import PollsContainer from "./PollsContainer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(setAuthedUser(""));
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
          {this.props.authedUser === "" && <Route path="/" component={Login} />}
          {this.props.loading === true ? (
            <h1 className="center">Loading ...</h1>
          ) : (
            <div className="loaded-components">
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              {this.props.authedUser !== "" && (
                <Route path="/" exact component={PollsContainer} />
              )}
            </div>
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
