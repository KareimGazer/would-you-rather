import React from "react";

export default function UserCard(props) {
  const { user } = props;
  return (
    <div className="user-card">
      <img
        className="user-avatar"
        src={user.avatarURL}
        alt="user avatar"
        height="200"
      />
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Answerd Questions: {user.answersNum}</p>
        <p>Created Questions: {user.questionsNum}</p>
        <h3>Score: {user.score}</h3>
      </div>
    </div>
  );
}
