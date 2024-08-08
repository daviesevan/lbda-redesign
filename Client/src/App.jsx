import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import { Helmet } from 'react-helmet-async';
import Footer from './components/footer';
import Nav from './components/hero/nav';
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>The lake basin development authority - Home</title>
              </Helmet>
              <LandingPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
