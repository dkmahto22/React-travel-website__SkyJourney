import React from "react";

const destinations = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1619794578892-cbdd3ff81c95?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The City of Light, known for art and fashion.",
    size: "row-span-0 md:row-span-2",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tropical paradise with stunning temples.",
    size: "row-span-0 md:row-span-1",
  },
  {
    name: "Tokyo, Japan",
    image: "https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A blend of tradition and modern life.",
    size: "row-span-0 md:row-span-2",
  },
  {
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1670775396745-da73fe7b5313?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The Big Apple, full of culture and lights.",
    size: "row-span-0 md:row-span-1",
  },
  {
    name: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Home of ancient architecture and pizza.",
    size: "row-span-0 md:row-span-1",
  },
  {
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Skyscrapers, desert and luxury living.",
      size: "row-span-0 md:row-span-2 row-span-0 md:col-span-2",
  },
  {
      name: "Paron Lake, Peru",
      image: "https://images.unsplash.com/photo-1528255915607-9012fda0f838?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Real places that looks like dream",
      size: "row-span-0 md:row-span-1",
    },
  

];

const PopularPlace = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
 <h2 class="text-3xl font-bold text-gray-800 mb-2">Explore the world beauty</h2>
            <p class="text-gray-600 mb-12">Explore now your most popular International destinations</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 auto-rows-[200px] gap-6">
          {destinations.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl shadow-md bg-white group ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{item.name}</h3>
                <p className="text-white text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPlace;
