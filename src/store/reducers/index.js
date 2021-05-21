import { combineReducers } from "redux";

import { spaceXDataReducer } from "./spaceXDataReducer";
export const rootReducer = combineReducers({
  spaceX: spaceXDataReducer,
});
