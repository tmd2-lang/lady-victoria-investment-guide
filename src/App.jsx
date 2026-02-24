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
          image="https://images.unsplash.com/photo-1558535284-39fe3f893047?q=80&w=2670&auto=format&fit=crop"
          alt="Luxury wedding floral centerpiece closeup soft light"
        />

        <div id="investment" className="w-full h-[40vh] bg-primaryDark flex flex-col items-center justify-center text-center px-6">
          <div className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-6">The Details</div>
          <div className="w-16 h-[1px] bg-accent mb-8"></div>
          <h2 className="font-serif italic text-4xl md:text-5xl text-textDark">"Let's explore what's possible."</h2>
        </div>

        <InvestmentTiers />
        <Differentiators />

        <PhotoBreak
          image="https://images.unsplash.com/photo-1571332760709-8943098311f1?q=80&w=2670&auto=format&fit=crop"
          alt="Wedding ceremony aisle floral arch elegant"
        />

        <InvestmentQuiz />
        <LeadCapture />
        <WhatHappensNext />
      </main>

      <Footer />
    </div>
  );
}

export default App;
