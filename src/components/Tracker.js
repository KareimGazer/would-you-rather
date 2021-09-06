// the window to choose a user
// you can type into a form
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // with router --> props.history %
import { login } from "../actions/shared";
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const imgURL =
  "https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.6/1602247317454/Microsoft.VisualStudio.Services.Icons.Default";

var url = "";
function usePageViews() {
  let location = useLocation();
  url = location;
}

function Login(props) {
  usePageViews();
  const dispatch = useDispatch();
  let history = useHistory();
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
          value=""
          onChange={(event) => {
            event.preventDefault();
            const authedUser = event.target.value;
            // todo: Redirect to Home Page
            history.push(`${url}`);
            // dispatch logout action
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

export default withRouter(connect()(Login));
