import React, { Component } from "react";
import { handleAddAnswer } from "../actions/questions";
import { connect } from "react-redux";
import { handelInitialData } from "../actions/shared";

class Question extends Component {
  state = {
    selectedOption: "",
  };

  onValueChange(option) {
    this.setState({ selectedOption: option });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedOption } = this.state;
    const { dispatch, question, authedUser } = this.props;
    dispatch(handleAddAnswer(question.id, selectedOption));
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
              <label>
                <input
                  name="option-one"
                  type="radio"
                  value="optionOne"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={() => this.onValueChange("optionOne")}
                ></input>
                {question.optionOneText}{" "}
              </label>

              <label>
                <input
                  name="option-two"
                  type="radio"
                  value="optionTwo"
                  checked={this.state.selectedOption === "optionTwo"}
                  onChange={() => this.onValueChange("optionTwo")}
                ></input>
                {question.optionTwoText}{" "}
              </label>

              <button
                className="btn"
                type="submit"
                disabled={this.state.selectedOption === ""}
              >
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
