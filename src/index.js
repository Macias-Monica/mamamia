import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import OrderPage from "./order"; // Página de pedidos
import Menu from "./Menu";
import React from "react";
import JobApplicationPage from "./jobs";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/jobs" element={<JobApplicationPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
