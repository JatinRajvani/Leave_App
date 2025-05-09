import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./Components/authStore.jsx"; // ✅ Import Redux Store
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider
  store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
