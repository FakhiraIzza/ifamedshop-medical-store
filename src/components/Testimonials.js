import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Granger Putra',
    feedback: 'Fast and reliable medicine delivery. The doctors are very helpful.',
  },
  {
    id: 2,
    name: 'Kimmy P.',
    feedback: 'No more waiting rooms. I got help online.!',
  },
  {
    id: 3,
    name: 'Yve Bellatrix',
    feedback: 'The health tips and articles really helped me improve my lifestyle.',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="my-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, feedback }) => (
          <div key={id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between">
            <p className="text-gray-700 italic mb-4">"{feedback}"</p>
            <p className="text-indigo-600 font-semibold text-right">- {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
