import "./App.css";
import { Route, Routes } from "react-router";
import MainLayout from "./components/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Auth from "./hoc/Auth";
import UserPage from "./pages/UserPage/UserPage";
import ProductPage from "./pages/ProductPage/ProductPage";
// import Search from "./components/Search/Search";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="user"
          element={
            <Auth>
              <UserPage />
            </Auth>
          }
        />
        <Route
          index
          element={
            // <Auth>
              <HomePage />
            // </Auth>
          }
        />
        <Route
          path="catalog"
          element={
            <Auth>
              <CatalogPage />
            </Auth>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Auth>
              <ProductPage />
            </Auth>
          }
        />
        <Route
          path="/cart"
          element={
            <Auth>
              <ShoppingCart/>
            </Auth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
