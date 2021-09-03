import { combineReducers } from "redux";
import { users } from "./users";
import { tweets } from "./tweets";
import { authedUser } from "./authedUser";

export default combineReducers({ users, tweets, authedUser });
