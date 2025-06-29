// src/components/FlightResults.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import FlightSearch from "./FlightSearch";


const getAccessToken = async () => {
  const response = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", new URLSearchParams({
    grant_type: "client_credentials",
    client_id: "", // Replace with your Amadeus client ID
    client_secret: "" // Replace with your Amadeus client secret
  }));
  return response.data.access_token;
};

const getAirlineName = async (iataCode) => {
  const token = await getAccessToken();
  const res = await axios.get(`https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${iataCode}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data.data[0]?.businessName || iataCode;
};

const getAirlineLogo = (code) => `https://www.gstatic.com/flights/airline_logos/70px/${code}.png`;

const formatTime = (time) => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const formatDuration = (duration) => {
  const clean = duration.replace(/^PT/, '').toLowerCase();
  const hours = clean.match(/(\d+)h/);
  const minutes = clean.match(/(\d+)m/);
  const hrText = hours ? `${hours[1]} hr${hours[1] !== '1' ? 's' : ''}` : '';
  const minText = minutes ? `${minutes[1]} min${minutes[1] !== '1' ? 's' : ''}` : '';
  return `${hrText} ${minText}`.trim();
};

const FlightResults = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { flights, origin, destination, CityName, departureDate, returnDate, Airport } = state || {};
  const [airlineNames, setAirlineNames] = useState({});

  useEffect(() => {
    const fetchAirlineNames = async () => {
      const uniqueCodes = [...new Set(flights?.map(f => f.itineraries[0].segments[0].carrierCode))];
      const updatedNames = {};
      for (let code of uniqueCodes) {
        updatedNames[code] = await getAirlineName(code);
      }
      setAirlineNames(updatedNames);
    };

    if (flights?.length) fetchAirlineNames();
  }, [flights]);

  const handleSelectFlight = (flight) => {
    navigate("/booking", { state: { flight, CityName, origin, destination } });
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen">
<div className="bg-gray-50 py-4">
        <FlightSearch variant="results" />
</div>
        <div className="max-w-2xl mx-auto px-4 py-6">
 
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Flights from {origin} to {destination} {CityName} {Airport}
            </h2>
            <p className="text-gray-500">
              Departure: {departureDate} {returnDate && `| Return: ${returnDate}`}
            </p>
          </div>

          {flights?.length ? (
            <div className="space-y-4">
              {flights.map((flight, index) => {
                const itinerary = flight.itineraries[0];
                const segment = itinerary.segments[0];
                const lastSegment = itinerary.segments[itinerary.segments.length - 1];
                const duration = itinerary.duration;
                const stops = itinerary.segments.length - 1;
                const carrierCode = segment.carrierCode;
                const airlineName = airlineNames[carrierCode] || carrierCode;
                const airlineLogo = getAirlineLogo(carrierCode);

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-md transition p-4 grid grid-cols-6 md:grid-cols-7 md:items-center"
                  >
                    <div className="col-span-full md:col-span-1 border-b border-gray-200 md:border-0 mb-4 pb-4 md:mb-0 md:pb-0">
                      <img
                        src={airlineLogo}
                        alt={airlineName}
                        className="w-10 h-10 object-contain mx-auto md:mx-0"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://content.airhex.com/content/logos/airlines_50/${carrierCode}.png`;
                        }}
                      />
                    </div>

                    <div className="col-span-3 md:col-span-2">
                      <div className="text-xs md:text-sm font-bold">{formatTime(segment.departure.at)} - {formatTime(lastSegment.arrival.at)}</div>
                      <div className="text-xs md:text-sm text-gray-800 lowercase airn">{airlineName}</div>
                    </div>

                    <div className="col-span-2">
                      <div className="text-gray-800 text-xs md:text-sm font-bold">{segment.departure.iataCode} → {lastSegment.arrival.iataCode}</div>
                      <div className="text-xs md:text-sm text-gray-800">{formatDuration(duration)}</div>
                    </div>

                    <div className="text-xs md:text-sm">{stops === 0 ? "Non-stop" : `${stops} stop${stops > 1 ? 's' : ''}`}</div>

                    <div className="text-right mt-2 md:mt-0 col-span-full md:col-span-1 border-t md:border-0 border-gray-200 flex flex-col md:flex-row">
                      <div className="text-md font-semibold text-blue-600">
                        ${flight.price.total}
                        <button
                          onClick={() => handleSelectFlight(flight)}
                          className="mt-2 ml-4 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-600 py-20 text-lg">No flights found.</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightResults;


