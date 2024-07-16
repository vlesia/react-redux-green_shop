import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Cart } from "./components/pages/Cart";
import { Products } from "./components/pages/Products";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Layout } from "./components/Layout/Layout";
import "./App.scss";
import { About } from "./components/pages/About";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
