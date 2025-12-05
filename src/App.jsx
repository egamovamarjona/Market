import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "#1e1e1e" : "#f5f5f5",
        minHeight: "100vh",
        color: dark ? "#fff" : "#000",
        transition: "0.3s",
      }}
    >
      <Navbar dark={dark} setDark={setDark} />

      <Routes>
       
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/product/:id" element={<ProductPage dark={dark} />} />
      </Routes>
    </div>
  );
}
