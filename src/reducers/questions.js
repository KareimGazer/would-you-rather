import {
  RECIEVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from "../actions/questions";

// watch out from deep copy cases
export function questions(state = {}, action) {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      return state;
    default:
      return state;
  }
}
