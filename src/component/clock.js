import React from "react";
import { connect } from "react-redux";
import { fetchNewTimeAction } from "../redux/actions";

// Expose state data in Redux store to React component.
const mapState = state => {
    return {
    newTime: state.time  // State data for time
  };
};
// Expose action in Redux store to React component.
const mapDispatch = dispatch => ({
  updateTime: () => dispatch(fetchNewTimeAction())  // Dispatch action to get new time
});

// React class component "Clock"
class Clock extends React.Component {
  // Lifecycle method to start timer after rendering component in HTML DOM
  componentDidMount() {
    // Dispatch action to update time every 1 second 
    this.timerID = setInterval(
      () => this.props.updateTime(),  // Action to update time
      1000
    );  
  }
  // Lifecycle method to stop timer
  componentWillUnmount() {
    alert("componentWillUnmount");
    clearInterval(this.timerID);
  }

  // Return component to be rendered. 
  render() {  
    return (
      <div>
        <h1>--- "Ticking Clock" App using React Redux ---</h1>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.newTime}.</h2>
      </div>
    );
  }
}

// Connect (register) <Clock/> component to Redux store, specifying state data and reducer to be used.
export default connect(mapState, mapDispatch)(Clock);
