/*==================================================
/src/App.js
==================================================*/
import React from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Clock from "./component/clock";
import reduxStore from "./redux/reduxStore";

function App() {
  const store = reduxStore();
  return (
    <Provider store={store}>
      <Router basename="/react-redux-ticking-clock-app">
        <Clock />
      </Router>
    </Provider>
  );
}

export default App;
