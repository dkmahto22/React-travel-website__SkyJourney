// src/components/FlightBookingForm.jsx
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { BookingContext } from "../context/BookingContext";
import BookingConfirmationPopup from "./BookingConfirmationPopup";






const formatTime = (time) => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const formatDuration = (duration) => {
  const clean = duration.replace(/^PT/, '').toLowerCase();
  const hours = clean.match(/(\d+)h/);
  const minutes = clean.match(/(\d+)m/);
  const hrText = hours ? `${hours[1]} hr${hours[1] !== '1' ? 's' : ''}` : '';
  const minText = minutes ? `${minutes[1]} min${minutes[1] !== '1' ? 's' : ''}` : '';
  return `${hrText} ${minText}`.trim();

};

const getAirlineName = async (iataCode) => {
  try {
    const response = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "", // Fill in your Amadeus API credentials
      client_secret: ""
    }));
    const token = response.data.access_token;
    const res = await axios.get(`https://test.api.amadeus.com/v1/reference-data/airlines?airlineCodes=${iataCode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data.data[0]?.businessName || iataCode;
  } catch (err) {
    return iataCode;
  }
};

const FlightBookingForm = () => {

const location = useLocation();
  const flightDetails = location.state?.selectedFlight || {};


  const { state } = useLocation();
  const navigate = useNavigate();
  const { flight, origin, destination, CityName, departureDate, returnDate, Airport } = state || {};
  const [airlineName, setAirlineName] = useState("");

  useEffect(() => {
    if (flight?.itineraries?.[0]?.segments?.[0]?.carrierCode) {
      getAirlineName(flight.itineraries[0].segments[0].carrierCode).then(setAirlineName);
    }
  }, [flight]);


  const [showPopup, setShowPopup] = useState(false);
  // const handleBookingSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Booking submitted");
  //   navigate("/");
  // };


  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");


const handleBookingSubmit = (e) => {
  e.preventDefault();
      setShowPopup(true);

  const itinerary = flight.itineraries[0];
  const segment = itinerary.segments[0];
  const lastSegment = itinerary.segments[itinerary.segments.length - 1];
  const duration = itinerary.duration;
  const stops = itinerary.segments.length - 1;

  const bookingData = {
    firstName,
    lastName,
    email,
    phone,
    airlineName,
    from: `${origin} (${segment.departure.iataCode})`,
    to: `${destination} (${lastSegment.arrival.iataCode})`,
    departureTime: formatTime(segment.departure.at),
    arrivalTime: formatTime(lastSegment.arrival.at),
    duration: formatDuration(duration),
    stops: stops === 0 ? "Non-stop" : `${stops} stop${stops > 1 ? 's' : ''}`,
    departureDate: departureDate || segment.departure.at?.split("T")[0],
    returnDate,
    totalPrice: flight.price.total,
    receivedAt: new Date().toISOString(), // ✅ correctly added
  };

  const existingBookings = JSON.parse(localStorage.getItem("flightBookings")) || [];
  existingBookings.push(bookingData);
  localStorage.setItem("flightBookings", JSON.stringify(existingBookings));

  //navigate("/");
};











  if (!flight) {
    return <div className="text-center py-10">No flight data provided.</div>;
  }

  const itinerary = flight.itineraries[0];
  const segment = itinerary.segments[0];
  const lastSegment = itinerary.segments[itinerary.segments.length - 1];
  const duration = itinerary.duration;
  const stops = itinerary.segments.length - 1;
  const carrierCode = segment.carrierCode;
  const logoUrl = `https://www.gstatic.com/flights/airline_logos/70px/${carrierCode}.png`;

const { addBooking } = useContext(BookingContext);









  return (
    
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Book Your Flight</h2>

          <div className="text-sm text-gray-700 mb-6 space-y-1">

<table className="table-auto w-full border border-gray-200 text-sm text-left">
  <tbody>
    <tr className="border-b border-gray-200">
      
      <td className="p-3" colSpan={2}>
        <div className="flex items-center space-x-2">
          <img
            src={logoUrl}
            alt={carrierCode}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://content.airhex.com/content/logos/airlines_50/${carrierCode}.png`;
            }}
          />
          <span className="uppercase font-semibold">{airlineName || carrierCode}</span>
        </div>
      </td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">From</td>
      <td className="px-3 py-1">{origin} ({segment.departure.iataCode})</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">To</td>
      <td className="px-3 py-1">{destination} ({lastSegment.arrival.iataCode})</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">Departure Time</td>
      <td className="px-3 py-1">{formatTime(segment.departure.at)}</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">Arrival Time</td>
      <td className="px-3 py-1">{formatTime(lastSegment.arrival.at)}</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">Flight Duration</td>
      <td className="px-3 py-1">{formatDuration(duration)}</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">Stops</td>
      <td className="px-3 py-1">{stops === 0 ? "Non-stop" : `${stops} stop${stops > 1 ? 's' : ''}`}</td>
    </tr>
    <tr className="border-b border-gray-200">
      <td className="px-3 py-1 font-semibold">Departure Date</td>
      <td className="px-3 py-1">{departureDate || segment.departure.at?.split("T")[0]}</td>
    </tr>
    {returnDate && (
      <tr className="border-b border-gray-200">
        <td className="px-3 py-1 font-semibold">Return Date</td>
        <td className="px-3 py-1">{returnDate}</td>
      </tr>
    )}
    <tr>
      <td className="px-3 py-1 font-semibold">Total Price</td>
      <td className="px-3 py-1">${flight.price.total}</td>
    </tr>
  </tbody>
</table>

            
          </div>

          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
             <input
  type="text"
  required
  className="mt-1 w-full border px-3 py-2 rounded-md"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
             <input
  type="text"
  required
  className="mt-1 w-full border px-3 py-2 rounded-md"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
/>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
           <input
  type="email"
  required
  className="mt-1 w-full border px-3 py-2 rounded-md"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
            </div>
            <div>
              <label className="block text-sm font-medium">Phone Number</label>
            <input
  type="tel"
  required
  className="mt-1 w-full border px-3 py-2 rounded-md"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>
            </div>

            <input type="hidden" name="flightData" value={JSON.stringify(flight)} />

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Confirm Booking
            </button>
          </form>


{showPopup && (
        <BookingConfirmationPopup
          customerName={`${firstName} ${lastName}`}
          onClose={() => setShowPopup(false)}
        />
      )}


        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightBookingForm;
