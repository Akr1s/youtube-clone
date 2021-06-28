import { combineReducers, createStore } from "redux";
import loginReducer from "./reducers/loginReducer";
import themeReducer from "./reducers/themeReducer";

const allReducers = combineReducers({
  isLogged: loginReducer,
  isLightTheme: themeReducer,
});

const store = createStore(allReducers);

export default store;
