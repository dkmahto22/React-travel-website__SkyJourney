// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { Mail, PhoneIncoming, PlaneTakeoff, Ticket, Trash2, User } from "lucide-react";






function Dashboard() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("flightBookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleDelete = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("flightBookings", JSON.stringify(updatedBookings));
  };

  const isRecentBooking = (receivedAt) => {
    if (!receivedAt) return false;
    const now = new Date();
    const receivedTime = new Date(receivedAt);
    const diffInHours = (now - receivedTime) / (1000 * 60 * 60);
    return diffInHours <= 12;
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    return new Date(b.receivedAt) - new Date(a.receivedAt);
  });



const [prevAdminName, setPrevAdminName] = useState("");
  const [prevLoginTime, setPrevLoginTime] = useState("");

useEffect(() => {
  setPrevAdminName(localStorage.getItem("prevAdminName") || "None");
  setPrevLoginTime(localStorage.getItem("prevLoginTime") || "No previous login");
}, []);


const [clickCount, setClickCount] = useState(0);

useEffect(() => {
  const clicks = JSON.parse(localStorage.getItem("phoneClicks") || "[]");
  const now = new Date();
  const last24HoursClicks = clicks.filter((timestamp) => {
    const clickTime = new Date(timestamp);
    const diffInHours = (now - clickTime) / (1000 * 60 * 60);
    return diffInHours <= 24;
  });

  setClickCount(last24HoursClicks.length);
}, []);


  return (

    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 text-xl font-bold text-blue-600 border-b">
          <span className="ml-2 text-xl font-bold text-gray-800 flex items-center gap-2">Sky <PlaneTakeoff className="text-blue-600" /> Journey </span>
        </div>
        <nav className="p-4 space-y-2 text-gray-700">
          <a href="#" className="block p-2 rounded hover:bg-blue-100">Dashboard</a>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">Bookings</a>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">Users</a>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Welcome: {localStorage.getItem("adminName")}</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
             <button
      onClick={() => {
        localStorage.removeItem("isAdmin");
        window.location.href = "/admin";
      }}
      className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
    >
      Logout
    </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
            <div className="p-4 bg-white rounded shadow">
             
              <div>
              <h2 className="flex gap-3 items-center text-sm text-gray-500"> <Ticket /> Total Bookings</h2>
              <p className="text-4xl font-bold text-blue-600">{bookings.length}</p>
              </div>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="flex gap-3 items-center text-sm text-gray-500"><Mail /> Total Inquery</h2>
              <p className="text-4xl font-bold text-green-600">34</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h2 className="flex gap-3 items-center text-sm text-gray-500"><PhoneIncoming /> Total Calls (Last 24 hours only)</h2>
              <p className="text-4xl font-bold text-purple-600">{clickCount}</p>
            </div>

            <div className="p-4 bg-white rounded shadow">
              <h2 className="flex gap-3 items-center text-sm text-gray-500"><User /> Last Login <small>({prevLoginTime})</small></h2>
              <p className="text-4xl font-bold text-red-600">{prevAdminName}</p>
            </div>
          </div>



          <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <h2 className="text-2xl font-bold mb-0 md:col-span-4">All Bookings</h2>

            {bookings.length === 0 ? (
              <p className="text-center text-gray-500">No bookings found.</p>
            ) : (
              sortedBookings.map((b, i) => (

                <div
                  key={i}
                  className="">
                  <div className={`${isRecentBooking(b.receivedAt) ? 'bg-yellow-100 border-yellow-300' : 'bg-white'
                    } flex-1 grid grid-cols-2 md:grid-cols-2 gap-2 text-sm text-gray-500 max-w-sm p-4 rounded-md`}
                  >
                    <div className="col-span-2 flex bg-gray-200 -mx-4 -mt-4 p-4 justify-between rounded-md">
                      <h2 className="text-lg text-gray-900">Passenger booking details<br />
                        {b.receivedAt && (<p className="col-span-2 text-xs text-gray-400 italic"> Received on: {b.receivedAt}</p>)}
                      </h2>

                      <button onClick={() => handleDelete(i)} className="text-red-600 px-4 py-1 mt-4 md:mt-0 rounded hover:text-red-700 transition"> <Trash2 size={16} /> </button>
                    </div>
                    <p><strong>Passenger:</strong><br /> {b.firstName} {b.lastName}</p>
                    <p><strong>Email:</strong><br />  {b.email}</p>
                    <p><strong>Phone:</strong><br />  {b.phone}</p>
                    <p><strong>Airline:</strong><br />  {b.airlineName}</p>
                    <p><strong>From:</strong><br />  {b.from}</p>
                    <p><strong>To:</strong><br />  {b.to}</p>
                    <p><strong>Departure:</strong><br />  {b.departureTime}</p>
                    <p><strong>Arrival:</strong><br />  {b.arrivalTime}</p>
                    <p><strong>Duration:</strong><br />  {b.duration}</p>
                    <p><strong>Stops:</strong><br />  {b.stops}</p>
                    <p><strong>Departure Date:</strong><br />  {b.departureDate}</p>
                    {b.returnDate && <p><strong>Return Date:</strong><br />  {b.returnDate}</p>}
                    <p><strong>Price:</strong><br />  ${b.totalPrice}</p>


                  </div>


                </div>
              ))
            )}
          </div>


        </main>
      </div>
    </div>
  );
}

export default Dashboard;
