import React, { Component } from "react";
import { handleAddAnswer } from "../actions/questions";
import { connect } from "react-redux";
import { handelInitialData } from "../actions/shared";

class Question extends Component {
  state = {
    option: "",
  };

  choose(event, option) {
    event.preventDefault();
    this.setState({ option });
    console.log("Question State", option);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { option } = this.state;
    const { dispatch, question, authedUser } = this.props;
    dispatch(handleAddAnswer(question.id, "optionOne"));
    dispatch(handelInitialData(authedUser));

    this.setState(() => ({
      option: "",
    }));
  };

  render() {
    const { question } = this.props;
    return (
      <div className="user-card center">
        <img
          className="user-avatar"
          src={question.authorAvatar}
          alt="user avatar"
          height="200"
        />
        <div className="user-details">
          <h2>{question.authorName} asks:</h2>
          <h3>Would You Rather ... </h3>
          <div>
            <form className="" onSubmit={this.handleSubmit}>
              <label>{question.optionOneText} </label>
              <input
                name="option-one"
                type="radio"
                value="optionOne"
                className=""
                id="choice"
                onSelect={(event) => {
                  this.choose(event, "optionOne");
                }}
              ></input>
              <h3>OR</h3>
              <label>{question.optionTwoText} </label>
              <input
                name="option-two"
                type="radio"
                value="optionTwo"
                className=""
                id="choice"
                onSelect={(event) => {
                  this.choose(event, "optionTwo");
                }}
              ></input>

              <button className="btn" type="submit" disabled={false}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Question);
