import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [tripType, setTripType] = useState('round');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState('economy');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    onSearch({
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      cabinClass
    });
  };

  return (
    <section className="container mx-auto px-4 -mt-10 z-10 relative">
      <div className="bg-white rounded-xl shadow-lg p-6 ">
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`pb-4 px-4 font-medium ${tripType === 'round' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setTripType('round')}
          >
            Round Trip
          </button>
          <button
            className={`pb-4 px-4 font-medium ${tripType === 'oneway' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setTripType('oneway')}
          >
            One Way
          </button>
          <button
            className={`pb-4 px-4 font-medium ${tripType === 'multi' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setTripType('multi')}
          >
            Multi-City
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-4 mb-6 items-end">
            <div className='col-span-2'>
              <label className="block text-gray-700 text-sm font-medium mb-2">From</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City or Airport"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>
            <div className='col-span-2'> 
              <label className="block text-gray-700 text-sm font-medium mb-2">To</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="City or Airport"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Departure</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                {tripType === 'round' ? 'Return' : 'Passengers'}
              </label>
              {tripType === 'round' ? (
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required={tripType === 'round'}
                />
              ) : (
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                  ))}
                </select>
              )}
            </div>
          
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Passengers</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Cabin Class</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
              >
                <option value="economy">Economy</option>
                <option value="premium">Premium Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
            </div>
            <div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Search Flights
          </button>
          </div>
          </div>

          
        </form>
      </div>
    </section>
  );
};

export default SearchForm;