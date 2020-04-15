import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";

const appReducer = combineReducers({
  UsersReducer: UsersReducer,
  PostsReducer: PostsReducer
});

export default (state, action) => appReducer(state, action);
