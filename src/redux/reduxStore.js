import { createStore } from "redux";
import { clockReducer, initialState } from "./reducers";

// Configure redux store.
export const reduxStore = () => {
  // Syntax: createStore(reducer, [preloadedState], [enhancer])
  const store = createStore(
    clockReducer,  // reducer
    initialState   // preloaded initial state
  );

  return store;
};

export default reduxStore;
