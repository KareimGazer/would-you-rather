import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PollNav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/unAnswered" exact activeClassName="active">
              <div onClick={console.log("clicked1")}>Unanswerd Questions</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/answered" exact activeClassName="active">
              <div onClick={console.log("clicked2")}>Answerd Questions</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
