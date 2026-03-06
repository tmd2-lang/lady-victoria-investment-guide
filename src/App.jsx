import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EmotionalHook from './components/EmotionalHook';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Process from './components/Process';
import PhotoBreak from './components/PhotoBreak';
import InvestmentTiers from './components/InvestmentTiers';
import Differentiators from './components/Differentiators';
import InvestmentQuiz from './components/InvestmentQuiz';
import LeadCapture from './components/LeadCapture';
import WhatHappensNext from './components/WhatHappensNext';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-background text-textLight">
      <Navigation />

      <main>
        <Hero />
        <EmotionalHook />

        {/* Visual Rhythm Breather Element */}
        <div className="w-full flex justify-center py-[80px] md:py-[100px] bg-background">
          <div className="w-12 h-[1px] bg-accent/60"></div>
        </div>

        <Manifesto />
        <Services />
        <Process />

        <PhotoBreak
          image="/underexecution.jpg"
          alt="Execution and production setup aesthetic"
        />

        <div id="investment" className="w-full h-[40vh] bg-primaryDark flex flex-col items-center justify-center text-center px-6">
          <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-6">The Details</div>
          <div className="w-16 h-[1px] bg-accent mb-8"></div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-textDark">"Let's explore what's possible."</h2>
        </div>

        <InvestmentTiers />
        <Differentiators />
        <Testimonials />

        <PhotoBreak
          image="/pink.jpg"
          alt="Pink floral wedding aesthetic"
        />

        <InvestmentQuiz />
        <WhatHappensNext />
        <LeadCapture />
      </main>

      <Footer />
    </div>
  );
}

export default App;
