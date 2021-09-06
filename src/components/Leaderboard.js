import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    console.log("leaderboard users: ", users);
    const usersKeys = Object.keys(users);
    var usersList = usersKeys.map((userKey) => {
      const user = users[userKey];
      return {
        id: user.id,
        name: user.name,
        answersNum: Object.keys(user.answers).length,
        questionsNum: user.questions.length,
        score: user.questions.length + Object.keys(user.answers).length,
        avatarURL: user.avatarURL,
      };
    });
    usersList.sort((user1, user2) => user2.score - user1.score);
    return (
      <div className="leaderboard center">
        <ul className="leaderboard-list">
          {usersList.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Leaderboard);
