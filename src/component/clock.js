import React from "react";
import { connect } from "react-redux";
import { fetchNewTimeAction } from "../redux/actions";

// Set up associated state in Redux.
const mapState = state => {
    return {
    newTime: state.time  // State data for time
  };
};
// Set up associated action in Redux (using "dispatch" method).
const mapDispatch = dispatch => ({
  updateTime: () => dispatch(fetchNewTimeAction())  // Dispatch "updateTime" action to update time
});

// React class component "Clock"
class Clock extends React.Component {
  // Lifecycle method to start timer after rendering component in HTML DOM
  componentDidMount() {
    // Dispatch action to update time every 1 second 
    this.timerID = setInterval(
      () => this.props.updateTime(),  // Dispatch "updateTime" action to update time
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

// Connect (register) component to Redux, specifying state data and reducer to be used.
// Syntax: connect([mapState], [mapDispatch])(component);
export default connect(mapState, mapDispatch)(Clock);
