/*==================================================
/src/redux/reduxStore.js
==================================================*/
import { createStore } from "redux";
import { clockReducer } from "./reducers";

// Configure Redux store.
export const reduxStore = () => {
  // Syntax: createStore(reducer, [preloadedState])
  const store = createStore(
    clockReducer,  // reducer
    {time: ''}  // Set default state "time"
  );

  return store;
};

export default reduxStore;
