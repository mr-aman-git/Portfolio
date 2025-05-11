import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
