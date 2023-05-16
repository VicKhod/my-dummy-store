import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import Auth from './hoc/Auth';

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route index element={<Auth><HomePage /></Auth>} />
        <Route path='catalog' element={<CatalogPage  />} />
      </Route>
    </Routes>
  );
}

export default App;
