import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </Router>
  );
}

export default App;
