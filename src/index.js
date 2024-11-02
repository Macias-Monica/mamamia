import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import OrderPage from "./order";
import Menu from "./Menu";
import React from "react";
import JobApplicationPage from "./jobs";
import ReviewsPage from "./reviews";
import AboutUs from "./AboutUs";
import Locations from "./Locations";
import FAQ from "./FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/jobs" element={<JobApplicationPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
		<Route path="/locations" element={<Locations />} />
		<Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
