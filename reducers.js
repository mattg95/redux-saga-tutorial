export default function counter(
  state = { counter: 0, starWars: null },
  action
) {
  switch (action.type) {
    case "INCREMENT":
      console.log("incrementing");
      return { ...state, counter: state.counter + 1 };
    case "GETSTARWARS":
      console.log(action);
      return { ...state, starWars: action.data };
    case "DECREMENT":
      console.log("decrementing");
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
