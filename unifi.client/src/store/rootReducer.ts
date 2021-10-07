import { combineReducers } from "redux";
import { userMessageReducer } from "./slices/UserMessageSlice";
import { userSliceReducer } from "./slices/UserSlice";

export const rootReducer = combineReducers({
  userMessage: userMessageReducer,
  user: userSliceReducer
});

export type RootState = ReturnType<typeof rootReducer>;
