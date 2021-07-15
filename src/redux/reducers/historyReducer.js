export default function historyReducer(state = [], action) {
  switch (action.type) {
    case "push":
      if (state.find((video) => video.id === action.payload.id)) return state;
      return [...state, action.payload];
    case "reset":
      return [];
    default:
      return state;
  }
}
