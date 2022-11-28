import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from 'Pages/About/About';
import Home from 'Pages/Home/Home';
import Error from 'Pages/Error/Error';
import Location from 'Pages/Location/Location';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Location" element={<Location />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;