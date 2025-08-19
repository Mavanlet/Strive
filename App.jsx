import React from "react";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Features from "./src/components/Features";
import Footer from "./src/components/Footer";
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
