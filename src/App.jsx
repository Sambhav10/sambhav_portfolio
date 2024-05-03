// App.js

import React from 'react';

import NavSide from './components/NavSide';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import   './App.css';
import Portfolio from './components/Portfolio';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavSide />
      <Home />
      <Portfolio/>
      <Skills/>
      <WorkExperience/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
