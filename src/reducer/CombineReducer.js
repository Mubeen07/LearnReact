import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";

const appReducer = combineReducers({
  UsersReducer: UsersReducer
});

export default (state, action) => appReducer(state, action);
