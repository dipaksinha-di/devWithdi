import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<h2 className="text-center">404 Not Found</h2>}
        />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}
