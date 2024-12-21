import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import AboutPage from './pages/AboutPage';
import HashGenerator from './pages/HashGenerator';
import HashChecker from './pages/HashChecker';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/generate" element={<HashGenerator />} />
          <Route path="/check" element={<HashChecker />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
