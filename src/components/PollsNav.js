import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PollNav extends Component {
  render() {
    return (
      <nav className="">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <div>Unanswerd Questions</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact activeClassName="active">
              <div>Answerd Questions</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
