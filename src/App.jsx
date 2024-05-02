// App.js

import React from 'react';

import NavSide from './components/NavSide';
import Main from './components/Main';
import Footer from './components/Footer';
import   './App.css';

function App() {
  return (
    <div className="App">
      <NavSide />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
