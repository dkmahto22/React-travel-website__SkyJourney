import React from 'react';

const destinations = [
  {
    id: 1,
    city: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: '$450'
  },
  {
    id: 2,
    city: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: '$890'
  },
  {
    id: 3,
    city: 'New York',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: '$520'
  },
  {
    id: 4,
    city: 'Sydney',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: '$950'
  }
];

const PopularDestinations = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 hidden">Popular Destinations</h2>
      <p className="text-gray-600 mb-8 hidden">Find your perfect getaway from our most popular destinations</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map(destination => (
          <div key={destination.id} className="relative rounded-xl overflow-hidden shadow-lg group">
            <img 
              src={destination.image} 
              alt={destination.city} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold">{destination.city}</h3>
              <p className="text-gray-300">{destination.country}</p>
              <div className="mt-2">
                <span className="text-sm">From</span> <span className="font-bold text-lg">{destination.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;