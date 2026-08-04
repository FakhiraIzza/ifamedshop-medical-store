import React from 'react';

function Hero() {
  return (
    <section className="text-center py-16 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg my-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Your One-Stop Solution for Online Medicines & Health Device
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
        Consult doctors, order medicines, and get health tips from the comfort of your home.
      </p>
      <a
        href="#drugsearch"
        className="inline-block px-6 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-100 shadow-lg transition"
      >
        Find What You Need
      </a>
    </section>
  );
}

export default Hero;
