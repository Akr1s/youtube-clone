export default function themeReducer(state = true, action) {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
}
