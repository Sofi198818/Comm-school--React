import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.querySelector("#root")
);
