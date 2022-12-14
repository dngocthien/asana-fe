import { createStore } from "redux";

const reducer = (
  state = { project: { id: 0, groupList: [] }, current: null, details: false },
  action
) => {
  switch (action.type) {
    case "PROJECT":
      return {
        project: action.project,
        task: state.task,
        details: state.details,
      };
    case "CURRENT":
      return {
        project: state.project,
        task: action.current,
        details: state.details,
      };
    case "DETAILS":
      return {
        project: state.project,
        task: state.task,
        details: action.details,
      };
  }
  return state;
};

const store = createStore(reducer);
export default store;
