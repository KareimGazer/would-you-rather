import React from "react";
import { connect } from "react-redux";

function PollResults(props) {
  const { question, authedUser } = props;
  const { votes1 } = question;
  // 0 : first choice
  // 1 : second choice
  const choice = votes1.includes(authedUser) ? 0 : 1;
  return (
    <div className="user-card center">
      <img
        className="user-avatar"
        src={question.authorAvatar}
        alt="user avatar"
        height="200"
      />
      <div className="user-details">
        <h2>Asked By: {question.authorName}</h2>
        <div className={choice === 0 ? "selected" : "option-one"}>
          <p>Would You Rather {question.optionOneText} ?</p>
          <p>{(question.optionOneVotes / question.votes.length) * 100} %</p>
          <p>
            {question.optionOneVotes}
            <span> out of </span>
            {question.votes.length}
          </p>
        </div>
        <div className={choice === 1 ? "selected" : "option-two"}>
          <p>Would You Rather {question.optionTwoText} ?</p>
          <p>{(question.optionTwoVotes / question.votes.length) * 100} %</p>
          <p>
            {question.optionTwoVotes}
            <span>out of</span>
            {question.votes.length}
          </p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(PollResults);
