import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;