import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer";
import UserPostsReducer from "./UserPostsReducer";
import AddPostReducer from "./AddPostReducer";

const appReducer = combineReducers({
  UsersReducer: UsersReducer,
  PostsReducer: PostsReducer,
  UserPostReducer: UserPostsReducer,
  AddPostReducer: AddPostReducer
});

export default (state, action) => appReducer(state, action);
