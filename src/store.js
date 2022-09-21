import { createStore } from "redux";

const reducer = (state = { current: null }, action) => {
  switch (action.type) {
    case "CURRENT":
      return { current: action.current };
  }
  return state;
};

const store = createStore(reducer);
export default store;
