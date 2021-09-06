import {
  saveQuestionAnswer,
  saveQuestion,
  getUsers,
  getQuestions,
} from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { recieveUsers } from "./users";

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function recieveQuestions(questions) {
  return {
    type: RECIEVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

// not optimistic update
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => getUsers())
      .then((users) => dispatch(recieveUsers(users)))
      .then(() => dispatch(hideLoading()));
  };
}

function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

// not optimistic update
export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    console.log("save answer", qid, answer, authedUser);
    return saveQuestionAnswer({
      qid,
      answer,
      authedUser,
    })
      .then(() =>
        dispatch(
          addAnswer({
            qid,
            answer,
            authedUser,
          })
        )
      )
      .then(() => dispatch(hideLoading()));
  };
}
