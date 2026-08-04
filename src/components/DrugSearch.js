import React, { useState } from 'react';

const sampleDrugs = [
  { id: 1, name: 'Paracetamol', type: 'Pain Reliever', description: 'Used to treat pain and fever.' },
  { id: 2, name: 'Amoxicillin', type: 'Antibiotic', description: 'Used to treat bacterial infections.' },
  { id: 3, name: 'Cetirizine', type: 'Antihistamine', description: 'Used for allergy relief.' },
  { id: 4, name: 'Ibuprofen', type: 'Anti-inflammatory', description: 'Reduces inflammation and pain.' },
  { id: 5, name: 'Omeprazole', type: 'Proton Pump Inhibitor', description: 'Treats acid reflux and ulcers.' },
];

function DrugSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const filtered = sampleDrugs.filter(d =>
      d.name.toLowerCase().includes(query.toLowerCase())
      || d.type.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };

  return (
    <section id="drugsearch" className="my-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Search for Medicines</h2>
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter medicine name or type"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:outline-none"
          aria-label="Medicine search input"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          aria-label="Search medicines"
        >
          Search
        </button>
      </form>
      <div className="mt-8">
        {results.length === 0 && query.trim() !== '' && (
          <p className="text-center text-gray-600">No medicines found matching "{query}".</p>
        )}
        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map(drug => (
              <li key={drug.id} className="border rounded-md p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white">
                <h3 className="text-xl font-semibold text-indigo-700">{drug.name}</h3>
                <p className="text-gray-500 italic">{drug.type}</p>
                <p className="mt-1 text-gray-700">{drug.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default DrugSearch;
