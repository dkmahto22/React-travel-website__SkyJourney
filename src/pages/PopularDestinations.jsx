import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import DestinationList from "./DestinationList";
import { Helmet } from "react-helmet-async";

const internationalDestinations = [
  { city: "Paris", country: "France", image: "https://plus.unsplash.com/premium_photo-1661914178431-fc899737a386?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Dubai", country: "UAE", image: "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Tokyo", country: "Japan", image: "https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "London", country: "UK", image: "https://plus.unsplash.com/premium_photo-1671809692422-4893b9e09119?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const localDestinations = [
  { city: "New York", state: "NY", image: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Los Angeles", state: "CA", image: "https://images.unsplash.com/photo-1523430410476-0185cb1f6ff9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Miami", state: "FL", image: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Chicago", state: "IL", image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Las Vegas", state: "NV", image: "https://images.unsplash.com/photo-1587223043646-fa771d9e0c8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { city: "Orlando", state: "FL", image: "https://images.unsplash.com/photo-1634221558053-3a617b5201d9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const DestinationCard = ({ title, subtitle, image }) => (
  <div className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="flex justify-between items-center p-4">
      <div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div>
        <Link to="/results" className="bg-blue-600 rounded-sm py-1 px-2 text-white hover:bg-blue-900">Book New</Link>
      </div>
    </div>
  </div>
);

const PopularDestinations = () => {
  return (
<>
<Helmet>
  <title>Popular Destinations - SkyJourney</title>
  <meta name="description" content="Transparent and affordable flight booking services." />
  <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
</Helmet>
<Header />

    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Popular Destinations
        </h1>

        {/* International Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Popular International Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalDestinations.map((dest, i) => (
              <DestinationCard
                key={i}
                title={dest.city}
                subtitle={dest.country}
                image={dest.image}
              />
            ))}
          </div>
        </section>

        {/* Local USA Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Popular USA Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {localDestinations.map((dest, i) => (
              <DestinationCard
                key={i}
                title={dest.city}
                subtitle={dest.state}
                image={dest.image}
              />
            ))}
          </div>
        </section>

        {/* 40 Destination List */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Most Popular Destinations</h2>
          <DestinationList />
        </section>

        <p className="text-center text-sm text-gray-500 mt-12">
          Explore more with SkyJourney — your perfect flight partner.
        </p>
      </div>
    </div>
<Footer />
   </>
  );
};

export default PopularDestinations;
