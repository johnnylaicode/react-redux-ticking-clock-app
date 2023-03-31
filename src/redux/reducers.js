/*==================================================
/src/redux/reducers.js
==================================================*/
// Initial (starting) state
export const initialState = {
  time: new Date().toLocaleTimeString()
};
  
// Reducer takes in 2 objects (previous state,  action) and returns the state object with new time
export const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEW_TIME":
      return {
        time: action.payload  // New state (new time in payload)
      };
    default:
      return state;
  }
};
