import { getInitialData } from "../utils/api";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

// const AUTHED_ID = "tylermcginnis";

// uses redux-thunk paradigm
export function handelInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
      dispatch(setAuthedUser(""));
      dispatch(hideLoading());
    });
  };
}

export function login(authedUser) {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveQuestions(questions));
      dispatch(setAuthedUser(authedUser));
      dispatch(hideLoading());
    });
  };
}
