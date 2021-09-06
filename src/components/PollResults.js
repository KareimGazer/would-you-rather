import React from "react";

export default function PollResults(props) {
  const { question } = props;
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
        <div className="option-one">
          <p>Would You Rather {question.optionOneText} ?</p>
          <p>{(question.optionOneVotes / question.votes.length) * 100} %</p>
          <p>
            {question.optionOneVotes}
            <span> out of </span>
            {question.votes.length}
          </p>
        </div>
        <div className="option-two">
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
