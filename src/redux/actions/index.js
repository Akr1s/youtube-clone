export const toggleTheme = () => ({ type: "TOGGLE" });

export const logIn = () => ({ type: "LOG_IN" });
export const logOut = () => ({ type: "LOG_OUT" });
export const addVideos = (videos) => ({ type: "add", payload: videos });

export const setSearchTerm = (term) => ({ type: "setTerm", payload: term });
