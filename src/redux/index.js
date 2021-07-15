import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import termReducer from "./reducers/termReducer";
import themeReducer from "./reducers/themeReducer";
import videosReducer from "./reducers/videosReducer";
import historyReducer from "./reducers/historyReducer";

const allReducers = combineReducers({
  isLogged: loginReducer,
  isLightTheme: themeReducer,
  videos: videosReducer,
  term: termReducer,
  history: historyReducer,
});

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
