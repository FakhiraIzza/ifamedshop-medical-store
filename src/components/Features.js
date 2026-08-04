<<<<<<< HEAD
import React from 'react';

const features = [
  {
    title: 'Online Doctor Consultation',
    description: 'Chat and consult with certified doctors anytime, anywhere.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
      </svg>
    )
  },
  {
    title: 'Medicine Delivery',
    description: 'Get your medicines delivered quickly and safely to your doorstep.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="3" cy="12" r="2" />
        <circle cx="21" cy="12" r="2" />
        <path d="M3 12h18l-3 6h-12l-3-6z" />
      </svg>
    )
  },
  {
    title: 'Health Articles & Tips',
    description: 'Learn how to stay healthy with trusted health advice.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    )
  }
];

function Features() {
  return (
    <section id="features" className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
          >
            {icon}
            <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
=======
import React from 'react';

const features = [
  {
    title: 'Online Doctor Consultation',
    description: 'Chat and consult with certified doctors anytime, anywhere.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path d="M4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
      </svg>
    )
  },
  {
    title: 'Medicine Delivery',
    description: 'Get your medicines delivered quickly and safely to your doorstep.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="3" cy="12" r="2" />
        <circle cx="21" cy="12" r="2" />
        <path d="M3 12h18l-3 6h-12l-3-6z" />
      </svg>
    )
  },
  {
    title: 'Health Articles & Tips',
    description: 'Learn how to stay healthy with trusted health advice.',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    )
  }
];

function Features() {
  return (
    <section id="features" className="my-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition"
          >
            {icon}
            <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
>>>>>>> 477015b4bf5b643a3a604f5e708794bf4e4eba12
