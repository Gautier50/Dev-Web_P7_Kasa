import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Error from "./Pages/Error/Error";
import Location from "./Pages/Location/Location";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Location/:id" element={<Location />} />
      <Route path="*" element={<Error />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>

);
