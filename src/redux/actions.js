// ACTION TYPE:
export const FETCH_NEW_TIME = "FETCH_NEW_TIME";

// ACTION CREATOR: Return an Action object
export const fetchNewTimeAction = () => ({
    type: FETCH_NEW_TIME,
    payload: new Date().toLocaleTimeString()
});
