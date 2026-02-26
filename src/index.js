import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// React Hook help our component dynamic

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
