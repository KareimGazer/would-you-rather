// it has 2 components question - question results
// it has a state proerty answered if true question results are shown
// else question is shown
// calculated from question before rendering similar to toHome property in newTweet
import React, { Component } from "react";
import { connect } from "react-redux";
import NotFound from "./NotFound";
import Question from "./Question";
import PollResults from "./PollResults";

class Poll extends Component {
  render() {
    const { urlId, question, authedUser } = this.props;
    return (
      <div>
        {urlId !== "notFound" && question.votes.includes(authedUser) && (
          <PollResults question={question} />
        )}
        {urlId !== "notFound" && !question.votes.includes(authedUser) && (
          <Question question={question} />
        )}
        {urlId === "notFound" && <NotFound />}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { urlId } = props.match.params;
  //   console.log("id", urlId);
  //   console.log("QQ", questions);
  const question = questions[urlId.substr(1)];
  //   console.log("Q", question);
  if (typeof question === "undefined") return { urlId: "notFound" };
  return {
    urlId: "done",
    authedUser,
    question: {
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
    },
  };
}

export default connect(mapStateToProps)(Poll);
