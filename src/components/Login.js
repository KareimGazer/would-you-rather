// the window to choose a user
// you can type into a form
// should have no route and appears if user is ""
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // with router --> props.history %
import { login } from "../actions/shared";

const imgURL =
  "https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.6/1602247317454/Microsoft.VisualStudio.Services.Icons.Default";

class Login extends Component {
  login = (event) => {
    event.preventDefault();
    const authedUser = event.target.value;
    // todo: Redirect to Home Page
    this.props.history.push(`/`);
    // dispatch logout action
    const { dispatch } = this.props;
    dispatch(login(authedUser));
    console.log("User loged in");
  };

  render() {
    return (
      <div className="center login">
        <div>
          <h3>Welcome to Would You Rather App!</h3>
          <span>Please, select a user to continue</span>
        </div>

        <img src={imgURL} alt="React-Redux" height="200" />
        <h2>Sign In</h2>
        <div>
          <select
            value={this.props.shelf}
            onChange={(event) => {
              event.preventDefault();
              const authedUser = event.target.value;
              // todo: Redirect to Home Page
              this.props.history.push(`/`);
              // dispatch logout action
              const { dispatch } = this.props;
              dispatch(login(authedUser));
              console.log("User loged in");
            }}
          >
            <option value="">Select User</option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler Mcginnis</option>
            <option value="johndoe">johndoe</option>
          </select>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
