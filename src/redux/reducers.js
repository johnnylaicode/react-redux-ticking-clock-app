// Initial (starting) state
export const initialState = {
  time: new Date().toLocaleTimeString()
};
  
// The clock reducer starts with the initial state, and then returns the next (new) state.
// Syntax: Reducer takes in (previous state, action) then returns (new state)
export const clockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEW_TIME":
      return {
        time: action.payload  // Return new state (based on "newTime" in mapState)
      };
    default:
      return state;
  }
};
