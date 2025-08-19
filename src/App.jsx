import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Features />
        {/* Weitere Sektionen (Benefits, Steps, Pricing, FAQ, CTA-Bottom) */}
      </main>
      <Footer />
    </>
  );
}
