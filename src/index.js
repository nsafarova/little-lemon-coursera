import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BookingPage from "./routes/BookingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmationPage from "./routes/ConfirmationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
