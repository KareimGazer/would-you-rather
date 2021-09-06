// in the home list before the full details are shown
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class QuestionSummary extends Component {
  toQuestion = (e, id) => {
    e.preventDefault();
    // todo: Redirect to parent Tweet.
    this.props.history.push(`/questions/:${id}`);
  };
  render() {
    const { question } = this.props;
    return (
      <div className="user-card">
        <img
          className="user-avatar"
          src={question.authorAvatar}
          alt="user avatar"
          height="200"
        />
        <div className="user-details">
          <h2>{question.authorName} asks:</h2>
          <h3>Would You Rather ... </h3>
          <p>... {question.optionOneText.substr(0, 20)}...</p>
          <button
            className="replying-to"
            onClick={(e) => this.toQuestion(e, question.id)}
          >
            <h3>View Poll</h3>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(QuestionSummary));
