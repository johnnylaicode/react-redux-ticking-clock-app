import React from "react";
import { Provider } from "react-redux";
import './App.css';
import Clock from "./component/clock.js";
import reduxStore from "./redux/reduxStore";

function App() {
  const store = reduxStore();
  return (
    <Provider store={store}>
      <Clock />
    </Provider>
  );
}

export default App;
