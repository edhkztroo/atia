import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsAtiaPay from './components/WhatIsAtiaPay';
import KeyBenefits from './components/KeyBenefits';
import HowItWorks from './components/HowItWorks';
import WhoIsAtia from './components/WhoIsAtia';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatIsAtiaPay />
      <KeyBenefits />
      <HowItWorks />
      <WhoIsAtia />
      <Integrations />
      <Footer />
    </div>
  );
}

export default App;
