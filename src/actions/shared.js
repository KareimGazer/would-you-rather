import { getInitialData } from "../utils/api";
import { recieveTweets } from "./tweets";
import { recieveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

// uses redux-thunk paradigm
export function handelInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(recieveTweets(tweets));
      dispatch(recieveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
