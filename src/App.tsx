import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from './modules/countryDetails';
import ForgetPassword from './modules/forgetPassword';
import Home from './modules/home';
import Login from './modules/login';
import Signup from './modules/signup';
import Container from './styles';

const App = (): any => {
  return (
    <Container>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:country" element={<CountryDetails />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
