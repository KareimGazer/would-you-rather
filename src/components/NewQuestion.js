import React, { Component } from "react";
import { connect } from "react-redux"; // gives access to dispatch
// import { handleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    text1: "",
    text2: "",
  };

  handleChange1 = (e) => {
    const text1 = e.target.value;
    this.setState(() => ({
      text1,
    }));
  };
  handleChange2 = (e) => {
    const text2 = e.target.value;
    this.setState(() => ({
      text2,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { text1, text2 } = this.state;
    const { dispatch } = this.props;

    //dispatch(handleAddTweet(text, id));

    this.setState(() => ({
      text1: "",
      text2: "",
      toHome: true,
    }));
  };

  render() {
    const { text1, text2, toHome } = this.state;

    if (toHome === true) return <Redirect to="/" />;

    return (
      <div className="center">
        <h2>Create New Question</h2>
        <p>Complete the question: </p>
        <h3>Would You Rather ...</h3>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter option 1 text here"
            value={text1}
            onChange={this.handleChange1}
            className="textarea"
          ></input>
          <h3>OR</h3>
          <input
            placeholder="Enter option 2 text here"
            value={text2}
            onChange={this.handleChange2}
            className="textarea"
          ></input>

          <button
            className="btn"
            type="submit"
            disabled={text1 === "" || text2 === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
