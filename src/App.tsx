import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './modules/countryDetails';
import Home from './modules/home';
import Login from './modules/login';
import Container from './styles';

const App = (): any => {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:country" element={<CountryDetails />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
