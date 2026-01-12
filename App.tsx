import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        {/* Required: Surgery Count Section */}
        <StatsSection />
        <ServicesSection />
      </main>
      <Footer />
      
      {/* Sticky Consultation Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="tel:02-1234-5678"
          className="bg-amber-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center animate-bounce hover:bg-amber-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </div>
  );
}

export default App;