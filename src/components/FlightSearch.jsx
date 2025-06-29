// src/components/FlightSearch.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader } from "lucide-react";

const API_KEY = "";
const API_SECRET = "";

const getAccessToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", API_KEY);
  params.append("client_secret", API_SECRET);

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      params
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Failed to get access token:", error);
    throw new Error("Unable to authenticate with the API.");
  }
};

const searchFlights = async (
  origin,
  destination,
  departureDate,
  returnDate,
  adults,
  children,
  infantsSeat,
  infantsLap,
  travelClass
) => {
  const token = await getAccessToken();
  const params = {
    originLocationCode: origin.split(" - ")[0],
    destinationLocationCode: destination.split(" - ")[0],
    departureDate,
    adults,
    travelClass,
    currencyCode: "USD",
    max: 50,
  };

  if (returnDate) params.returnDate = returnDate;
  if (children > 0) params.children = children;
  if (infantsSeat > 0) params.infants = infantsSeat;

  try {
    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: { Authorization: `Bearer ${token}` },
        params,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Flight search error:", error);
    throw new Error("Failed to fetch flight offers.");
  }
};

const FlightSearch = ({ variant }) => {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState("oneway");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsSeat, setInfantsSeat] = useState(0);
  const [infantsLap, setInfantsLap] = useState(0);
  const [travelClass, setTravelClass] = useState("ECONOMY");
  const [loading, setLoading] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const [airportList, setAirportList] = useState([]);
  const [filteredOrigin, setFilteredOrigin] = useState([]);
  const [filteredDestination, setFilteredDestination] = useState([]);
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  useEffect(() => {
    const fetchAirportData = async () => {
      try {
        const res = await fetch("/data/airport.json");
        const data = await res.json();
        setAirportList(data);
      } catch (err) {
        console.error("Failed to load airport data:", err);
      }
    };
    fetchAirportData();
  }, []);

  const filterAirports = (input) =>
    airportList.filter((a) =>
      [a.CityName, a.Airport, a.IATAcode]
        .join(" ")
        .toUpperCase()
        .includes(input.toUpperCase())
    );

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const flights = await searchFlights(
        origin,
        destination,
        departureDate,
        tripType === "round" ? returnDate : null,
        adults,
        children,
        infantsSeat,
        infantsLap,
        travelClass
      );
      navigate("/results", {
        state: {
          flights,
          origin,
          destination,
          departureDate,
          returnDate,
          tripType,
          adults,
          children,
          infantsSeat,
          infantsLap,
          travelClass,
        },
      });
    } catch (error) {
      alert("Error fetching flights: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className={`max-w-7xl mx-auto p-4 rounded-md ${variant === "results" ? "bg-gray-50" : "shadow-lg bg-white -mt-10"}`}>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded border cursor-pointer ${tripType === "oneway" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
          onClick={() => setTripType("oneway")}
        >
          One Way
        </button>
        <button
          className={`px-4 py-2 rounded border cursor-pointer ${tripType === "round" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
          onClick={() => setTripType("round")}
        >
          Round Trip
        </button>
      </div>

      <form onSubmit={handleSearch} className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-9">
        <div className="col-span-2 relative">
          <input
            type="text"
            placeholder="Origin (e.g. JFK or New York)"
            value={origin}
            onChange={(e) => {
              const input = e.target.value;
              setOrigin(input);
              if (input.length >= 2) {
                setFilteredOrigin(filterAirports(input));
                setShowOriginDropdown(true);
              } else {
                setShowOriginDropdown(false);
              }
            }}
            className="p-2 py-1 md:py-3 border border-gray-400 rounded w-full"
            required
          />
          {showOriginDropdown && (
            <ul className="absolute z-10 bg-white border rounded shadow-md mt-1 max-h-48 overflow-y-auto w-full text-sm">
              {filteredOrigin.map((a) => (
                <li
                  key={a.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setOrigin(`${a.IATAcode} - ${a.CityName}`);
                    setShowOriginDropdown(false);
                  }}
                >
                  <div className="font-semibold">
                    {a.IATAcode} - {a.CityName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {a.Airport}, {a.CountryName}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-span-2 relative">
          <input
            type="text"
            placeholder="Destination (e.g. DXB or Dubai)"
            value={destination}
            onChange={(e) => {
              const input = e.target.value;
              setDestination(input);
              if (input.length >= 2) {
                setFilteredDestination(filterAirports(input));
                setShowDestinationDropdown(true);
              } else {
                setShowDestinationDropdown(false);
              }
            }}
            className="p-2 py-2 md:py-3 border rounded border-gray-400 w-full"
            required
          />
          {showDestinationDropdown && (
            <ul className="absolute z-10 bg-white border rounded shadow-md mt-1 max-h-48 overflow-y-auto w-full text-sm">
              {filteredDestination.map((a) => (
                <li
                  key={a.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setDestination(`${a.IATAcode} - ${a.CityName}`);
                    setShowDestinationDropdown(false);
                  }}
                >
                  <div className="font-semibold">
                    {a.IATAcode} - {a.CityName}
                  </div>
                  <div className="text-xs text-gray-500">
                    {a.Airport}, {a.CountryName}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          required
          className="p-2 py-2 md:py-3 border rounded border-gray-400 w-full"
        />

        {tripType === "round" && (
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="p-2 py-2 md:py-3 border border-gray-400 rounded w-full"
          />
        )}

        <div className={`relative ${tripType === "oneway" ? "md:col-span-2" : ""}`}>
          <button
            type="button"
            onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
            className="w-full p-2 py-2 md:py-3 border border-gray-400 rounded text-left bg-white"
          >
            {adults} Adults (+)
          </button>
          {showPassengerDropdown && (
            <div className="absolute z-10 mt-1 bg-white border rounded shadow-lg p-2 grid grid-cols-1 gap-2 w-full text-xs">
              <div>
                <label>Adults</label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="p-1 shadow-sm rounded w-full"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} Adult(s)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Children (2-11)</label>
                <select
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="p-1 shadow-sm rounded w-full"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                      {i} Children
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Infants (In seat)</label>
                <select
                  value={infantsSeat}
                  onChange={(e) => setInfantsSeat(parseInt(e.target.value))}
                  className="p-1 shadow-sm rounded w-full"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                      {i} Infant(s)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Infants (On lap)</label>
                <select
                  value={infantsLap}
                  onChange={(e) => setInfantsLap(parseInt(e.target.value))}
                  className="p-1 shadow-sm rounded w-full"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                      {i} Infant(s)
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={() => setShowPassengerDropdown(!showPassengerDropdown)} className="bg-green-600 rounded-sm w-20 p-1 text-white mx-auto">Done</button>
            </div>
          )}
        </div>

        <div>
          <select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            className="p-2 py-2 md:py-3 border border-gray-400 rounded w-full"
          >
            <option value="ECONOMY">Economy</option>
            <option value="PREMIUM_ECONOMY">Premium Economy</option>
            <option value="BUSINESS">Business</option>
            <option value="FIRST">First Class</option>
          </select>
        </div>

        <div className="col-span-2 md:col-span-1">
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 md:py-3 rounded hover:bg-blue-700 transition w-full cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader className="animate-spin" />
                Searching...
              </span>
            ) : (
              "Search Flights"
            )}
          </button>
        </div>
      </form>

      {loading && (
        <div className="fixed inset-0 bg-gray-900/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <Loader className="animate-spin w-8 h-8 text-blue-600 mx-auto" />
            <p className="text-blue-800 font-semibold">Searching for the best flight deals...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
