import './App.css';
import { Route, Routes } from 'react-router';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
// import CatalogPage from './pages/CatalogPage/CatalogPage';
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
