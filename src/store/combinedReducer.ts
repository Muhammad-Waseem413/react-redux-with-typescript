import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  articles: articleReducer,
});

export default rootReducer;

// Infer the `RootState` type from the reducer itself
export type State = ReturnType<typeof rootReducer>;
