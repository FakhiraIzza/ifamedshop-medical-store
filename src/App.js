import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DrugSearch from './components/DrugSearch';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <DrugSearch />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
