export default function themeReducer(state = [], action) {
  switch (action.type) {
    case "add":
      return [...action.payload];
    default:
      return state;
  }
}
