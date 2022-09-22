import { createStore } from "redux";

const reducer = (state = { current: null, details: false }, action) => {
  switch (action.type) {
    case "CURRENT":
      return { current: action.current, details: state.details };
    case "DETAILS":
      return { current: state.current, details: action.details };
  }
  return state;
};

const store = createStore(reducer);
export default store;
