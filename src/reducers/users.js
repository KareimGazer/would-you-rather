import { RECIEVE_USERS } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
}
