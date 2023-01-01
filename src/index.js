import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Error from "./Pages/Error/Error";
import LogementPage from "./Pages/LogementPage/LogementPage";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/location/:id" element={<LogementPage />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>

);
