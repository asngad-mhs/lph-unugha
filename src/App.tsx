import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
