// appp.jsx (Apps component)
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homee from "./SPA/Home";
import Loginn from "./SPA/Login";
import Contactt from "./SPA/Contact";
import Regg from "./SPA/Reg";

const Apps = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/login" element={<Loginn />} />
          <Route path="/contact" element={<Contactt />} />
          <Route path="/registration" element={<Regg />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Apps;
