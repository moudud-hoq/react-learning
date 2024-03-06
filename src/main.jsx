import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import UseRef from "./UseRef.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import UseState from "./UseState.jsx";
// import App2 from "./App2.jsx";
// import ParentPropsPassing from "./ParentPropsPassing.jsx";
// import RespondingEventFormHandeling from "./RespondingEventFormHandeling.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <App2 />
    <ParentPropsPassing />
    <RespondingEventFormHandeling />
    <UseRef /> */}
    <UseState />
  </React.StrictMode>
);
