import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Link, withRouter } from "react-router-dom"; // with router --> props.history %

class Logout extends Component {
  logout = (e) => {
    e.preventDefault();
    // todo: Redirect to Home Page
    this.props.history.push(`/login`);
    // dispatch logout action
    const { dispatch } = this.props;
    dispatch(setAuthedUser(""));
  };

  render() {
    const { id, name, avatarURL } = this.props;
    if (id === null) return null;
    return (
      <div className="">
        <span>{`Hello, ${name}`}</span>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className="logout-avatar"
        />
        <button className="replying-to" onClick={(e) => this.logout(e)}>
          Logout
        </button>
      </div>
    );
  }
}

// id will not be passed up as props till now
// instead it will be received from  the store
function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser]; // taking the autheduser which may not exist then id is null

  if (user) {
    const { id, name, avatarURL } = user;

    return {
      id,
      name,
      avatarURL,
    };
  }
  return { id: null, name: null, avatarURL: null };
}

export default withRouter(connect(mapStateToProps)(Logout));
