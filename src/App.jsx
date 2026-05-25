import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Payments from "./components/Payments";
import PromoSection from "./components/PromoSection";
import SessionForm from "./components/SessionForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PromoSection />
      <Services />
      <Payments />
      <SessionForm />
      <Footer />
    </div>
  );
}

export default App;
