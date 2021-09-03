import { RECIEVE_TWEETS } from "../actions/tweets";

export function tweets(state = {}, action) {
  switch (action.type) {
    case RECIEVE_TWEETS:
      return { ...state, ...action.tweets };
    default:
      return state;
  }
}
