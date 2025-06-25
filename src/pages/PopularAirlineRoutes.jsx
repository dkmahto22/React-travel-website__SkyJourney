import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlightSearch from "../components/FlightSearch";

const airlineRoutes = [
  { airline: "Delta Airlines", route: "New York → Los Angeles", price: "$120" },
  { airline: "American Airlines", route: "Chicago → Miami", price: "$95" },
  { airline: "United Airlines", route: "San Francisco → Las Vegas", price: "$89" },
  { airline: "JetBlue", route: "Boston → Orlando", price: "$75" },
  { airline: "Alaska Airlines", route: "Seattle → San Diego", price: "$99" },
  { airline: "Southwest Airlines", route: "Denver → Houston", price: "$85" },
  { airline: "Spirit Airlines", route: "Atlanta → Tampa", price: "$60" },
  { airline: "Frontier Airlines", route: "Phoenix → Dallas", price: "$55" },
  { airline: "Hawaiian Airlines", route: "Honolulu → Maui", price: "$78" },
  { airline: "Sun Country Airlines", route: "Minneapolis → Las Vegas", price: "$92" },
  { airline: "Allegiant Air", route: "Cincinnati → Fort Lauderdale", price: "$65" },
  { airline: "Avelo Airlines", route: "Burbank → Santa Rosa", price: "$49" },
  { airline: "Breeze Airways", route: "Akron → Charleston", price: "$59" },
  { airline: "Silver Airways", route: "Fort Lauderdale → Key West", price: "$70" },
  { airline: "Delta Airlines", route: "Detroit → Atlanta", price: "$88" },
  { airline: "JetBlue", route: "Newark → Fort Myers", price: "$80" },
  { airline: "United Airlines", route: "Houston → San Francisco", price: "$110" },
  { airline: "Southwest Airlines", route: "Baltimore → Nashville", price: "$77" },
  { airline: "American Airlines", route: "Philadelphia → Dallas", price: "$98" },
  { airline: "Alaska Airlines", route: "Portland → Los Angeles", price: "$102" },
];
const internationalRoutes = [
  { airline: "Emirates", route: "New York → Dubai", price: "$430" },
  { airline: "Qatar Airways", route: "Los Angeles → Doha", price: "$460" },
  { airline: "Singapore Airlines", route: "San Francisco → Singapore", price: "$500" },
  { airline: "British Airways", route: "Chicago → London", price: "$420" },
  { airline: "Lufthansa", route: "Boston → Frankfurt", price: "$410" },
  { airline: "Turkish Airlines", route: "Houston → Istanbul", price: "$450" },
  { airline: "Air France", route: "Atlanta → Paris", price: "$440" },
  { airline: "KLM", route: "Seattle → Amsterdam", price: "$430" },
  { airline: "Etihad Airways", route: "Dallas → Abu Dhabi", price: "$470" },
  { airline: "ANA", route: "Los Angeles → Tokyo", price: "$490" },
];
const PopularAirlineRoutes = () => {
  return (
    <>
    <Header />
    <div className="bg-gray-100 py-4">
        <FlightSearch variant="results" />
</div>
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-3xl font-bold text-gray-600 mb-8"> Most Popular Airline Routes (USA)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {airlineRoutes.map((route, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-blue-700">{route.airline}</h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                  {route.price}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{route.route}</p>
            </div>
          ))}
        </div>
        </div>

        <div className="my-16 bg-white p-8 rounded-md">
          <h2 className="text-3xl font-bold text-gray-600 mb-8">Popular International Airline Routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalRoutes.map((route, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition border border-gray-100"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-indigo-700">{route.airline}</h3>
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
                    {route.price}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{route.route}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      
    </section>
    <Footer />
    </>
  );
};

export default PopularAirlineRoutes;
