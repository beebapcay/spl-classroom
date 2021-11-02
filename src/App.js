import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar className="navbar" />
      <Home className="body" />
    </div>
  );
}

export default App;
