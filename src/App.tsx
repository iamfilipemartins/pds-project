import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './modules/countryDetails';
import Home from './modules/home';

const App = (): any => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:country" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
