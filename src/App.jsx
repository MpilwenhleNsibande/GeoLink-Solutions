import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './pages/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Tools from './pages/Tools';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Ensures page starts at top on navigation */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
