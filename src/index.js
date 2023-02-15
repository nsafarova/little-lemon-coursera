import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './App.css';
import App from "./App";
import BookingPage from "./routes/BookingPage";

import { HashRouter, Routes, Route } from "react-router-dom";
import ConfirmationPage from "./routes/ConfirmationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
