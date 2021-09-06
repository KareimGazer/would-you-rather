// it contains both answered and (unanswered questions by default)
// with a nav bar of its own
// when the user selects answered the url changes and the answered componets appear
// when unaswered quetion is clicked redirects to question componenet
// when aswered quetion is clicked redirects to question result componenet
import React, { Component } from "react";
import { connect } from "react-redux";
import PollNav from "./PollsNav";
import QuestionSummary from "./QuestionSummary";
import { Nav } from "react-bootstrap";

class PollsContainer extends Component {
  state = {
    list: "unAnswered",
  };
  unAnswered = (event) => {
    event.preventDefault();
    this.setState({ list: "unAnswered" });
    console.log(this.state.list);
  };
  answered = (event) => {
    event.preventDefault();
    this.setState({ list: "answered" });
    console.log(this.state.list);
  };

  render() {
    const { answeredQuetions, unAnsweredQuetions } = this.props;
    return (
      <div className="">
        <Nav justify variant="tabs" defaultActiveKey="unAnswered">
          <Nav.Link eventKey="unAnswered" onClick={this.unAnswered}>
            Unanswered questions
          </Nav.Link>
          <Nav.Link eventKey="answered" onClick={this.answered}>
            Answered questions
          </Nav.Link>
        </Nav>
        {this.state.list === "unAnswered" &&
          unAnsweredQuetions.map((question) => (
            <li key={question.id}>
              <QuestionSummary question={question} />
            </li>
          ))}
        {this.state.list === "answered" &&
          answeredQuetions.map((question) => (
            <li key={question.id}>
              <QuestionSummary question={question} />
            </li>
          ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const questionsKeys = Object.keys(questions);
  var questionsList = questionsKeys.map((questionKey) => {
    const question = questions[questionKey];
    return {
      id: question.id,
      optionOneText: question.optionOne.text,
      optionTwoText: question.optionTwo.text,
      optionOneVotes: question.optionOne.votes.length,
      optionTwoVotes: question.optionTwo.votes.length,
      timestamp: question.timestamp,
      votes: [...question.optionOne.votes, ...question.optionTwo.votes],
      authorId: question.author,
      authorAvatar: users[question.author].avatarURL,
      authorName: users[question.author].name,
    };
  });
  // console.log("pollsContainer questionsList: ", questionsList);
  questionsList.sort((q1, q2) => q2.timestamp - q1.timestamp);
  const answeredQuetions = questionsList.filter((question) =>
    question.votes.includes(authedUser)
  );
  const unAnsweredQuetions = questionsList.filter(
    (question) => !question.votes.includes(authedUser)
  );
  return { questionsList, answeredQuetions, unAnsweredQuetions };
}

export default connect(mapStateToProps)(PollsContainer);
