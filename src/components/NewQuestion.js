import React, { Component } from "react";
import { connect } from "react-redux"; // gives access to dispatch
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleChange1 = (e) => {
    const optionOneText = e.target.value;
    this.setState(() => ({
      optionOneText,
    }));
  };
  handleChange2 = (e) => {
    const optionTwoText = e.target.value;
    this.setState(() => ({
      optionTwoText,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) return <Redirect to="/" />;

    return (
      <div className="center">
        <h2>Create New Question</h2>
        <p>Complete the question: </p>
        <h3>Would You Rather ...</h3>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter option 1 text here"
            value={optionOneText}
            onChange={this.handleChange1}
            className="textarea"
          ></input>
          <h3>OR</h3>
          <input
            placeholder="Enter option 2 text here"
            value={optionTwoText}
            onChange={this.handleChange2}
            className="textarea"
          ></input>

          <button
            className="btn"
            type="submit"
            disabled={optionOneText === "" || optionTwoText === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
