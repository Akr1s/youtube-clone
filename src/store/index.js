import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../features/history/historySlice";
import termReducer from "../features/term/termSlice";
import videosReducer from "../features/video/videosSlice";

const store = configureStore({
  reducer: {
    history: historyReducer,
    term: termReducer,
    videos: videosReducer,
  },
});

export default store;
