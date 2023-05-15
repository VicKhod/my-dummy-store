import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <MainLayout/>
      <HomePage/>
    </div>
  );
}

export default App;
