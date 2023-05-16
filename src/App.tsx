import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='catalog' element={<CatalogPage  />} />
      </Route>
    </Routes>
  );
}

export default App;
