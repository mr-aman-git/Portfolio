import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Header />

        <main>
          <section id="/">
            <HomePage />
          </section>

          <section id="about">
            <AboutPage />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
