export default function termReducer(state = "", action) {
  switch (action.type) {
    case "setTerm":
      return action.payload;
    default:
      return state;
  }
}
