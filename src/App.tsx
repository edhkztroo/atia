import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsAtiaPay from './components/WhatIsAtiaPay';
import KeyBenefits from './components/KeyBenefits';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatIsAtiaPay />
      <KeyBenefits />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
