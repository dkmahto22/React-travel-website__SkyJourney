import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
<>
<Helmet>
  <title>About Us - SkyJourney</title>
  <meta name="description" content="Transparent and affordable flight booking services." />
  <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
</Helmet>
    <Header />
   <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          About SkyJourney
        </h1>

        {/* Company Overview */}
        <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
          SkyJourney is a trusted flight booking platform offering travelers the best options 
          for affordable and smooth journeys around the world. Our platform compares thousands 
          of airline deals and schedules in real time, helping customers book with confidence and ease.
        </p>

        {/* Mission / Values / Why Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To simplify travel by offering the most transparent and affordable flight booking experience.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Why Choose Us</h3>
            <p className="text-gray-600">
              We offer real-time pricing, trusted airlines, and 24/7 customer support on an easy-to-use platform.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Honesty, innovation, and a customer-first mindset drive everything we do at SkyJourney.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Story</h2>
          <p className="text-gray-700">
            SkyJourney began with a simple goal: to make travel accessible and stress-free for everyone. 
            What started as a small travel desk is now a full-scale digital travel solution provider 
            with a growing customer base. We've helped thousands of people discover better flight options 
            through technology, trust, and transparency.
          </p>
        </div>

        {/* How We Work */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">How We Work</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>We connect with top airline APIs for accurate, real-time pricing and availability.</li>
            <li>We compare fares from hundreds of airlines to bring you the best deals.</li>
            <li>We ensure your booking process is smooth, secure, and fast.</li>
            <li>Our support team is available 24/7 to assist with any questions.</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">What Our Customers Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-600 italic">"Booking with SkyJourney saved me time and money. Highly recommend!"</p>
              <p className="text-blue-800 font-semibold mt-2">– Rajeev Sharma</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-600 italic">"Amazing customer support and super fast process. Will use it again!"</p>
              <p className="text-blue-800 font-semibold mt-2">– Sneha Kapoor</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-gray-600 italic">"I found the lowest fare in minutes. Great service and easy to use."</p>
              <p className="text-blue-800 font-semibold mt-2">– Aakash Mehta</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Ready to Fly with Confidence?</h2>
          <p className="text-gray-700 mb-4">Join thousands of happy travelers who trust SkyJourney for their next trip.</p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Book Your Flight
          </a>
        </div>
      </div>
    </div>
    <Footer />
</>
  );
};

export default AboutUs;
