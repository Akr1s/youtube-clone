import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import termReducer from "./reducers/termReducer";
import themeReducer from "./reducers/themeReducer";
import videosReducer from "./reducers/videosReducer";

const allReducers = combineReducers({
  isLogged: loginReducer,
  isLightTheme: themeReducer,
  videos: videosReducer,
  term: termReducer,
});

const store = createStore(allReducers);

export default store;
