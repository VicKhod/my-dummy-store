import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
// import CatalogPage from './pages/CatalogPage/CatalogPage';
import LoginPage from './pages/LoginPage/LoginPage';
// import ProductPage from './pages/ProductPage/ProductPage';

function App() {  
  
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='login' element={<LoginPage />} />
        <Route index element={<HomePage />} />
        {/* <Route path='catalog' element={<CatalogPage  />} /> */}
        {/* <Route path='product/:id' element={<ProductPage  />} /> */}
        {/* <Route path='cart' element={<CartPage />} /> */}
        {/* <Route path='profile' element={<ProfilePage />} */}
      </Route>
    </Routes>
  );
}

export default App;
