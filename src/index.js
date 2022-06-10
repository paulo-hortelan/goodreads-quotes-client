import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/app/App";
import { GlobalStyle } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
