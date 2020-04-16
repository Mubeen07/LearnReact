import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";
import UserPostsReducer from "./UserPostsReducer";

const appReducer = combineReducers({
  UsersReducer: UsersReducer,
  PostsReducer: PostsReducer,
  UserPostReducer: UserPostsReducer
});

export default (state, action) => appReducer(state, action);
