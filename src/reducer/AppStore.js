import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import CombineReducers from "./CombineReducer";

export const appStore = createStore(
  CombineReducers,
  {},
  applyMiddleware(ReduxThunk)
);
