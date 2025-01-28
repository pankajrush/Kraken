import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize("G-MN98X13FJG"); // Replace with your Measurement ID

ReactGA.send("pageview"); // Track the initial page load

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);













