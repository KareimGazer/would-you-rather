import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function getQuestions(info) {
  return Promise.all([_getQuestions()]).then(([questions]) => ({
    questions,
  }));
}
export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function getUsers(info) {
  return _getUsers(info);
}
