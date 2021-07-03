import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import themeReducer from "./reducers/themeReducer";
import videosReducer from "./reducers/videosReducer";

const allReducers = combineReducers({
  isLogged: loginReducer,
  isLightTheme: themeReducer,
  videos: videosReducer,
});

const store = createStore(allReducers);

export default store;
