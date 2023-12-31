import React from "react";
import ReactDOM from "react-dom/client";
// import "./custom.scss";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { WorkoutContextProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>
);
