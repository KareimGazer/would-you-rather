import { RECIEVE_QUESTIONS, ADD_QUESTION } from "../actions/questions";

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
    default:
      return state;
  }
}
