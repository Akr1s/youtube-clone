export const toggleTheme = () => ({ type: "TOGGLE" });

export const logIn = () => ({ type: "LOG_IN" });
export const logOut = () => ({ type: "LOG_OUT" });
export const addVideos = (videos) => ({ type: "add", payload: videos });
export const pushToHistory = (video) => ({ type: "push", payload: video });
export const resetHistory = () => ({ type: "reset" });

export const setSearchTerm = (term) => ({ type: "setTerm", payload: term });
