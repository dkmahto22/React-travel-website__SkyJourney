import { CheckCheck, CircleDollarSign, FileCheck, Headset } from 'lucide-react';
import React from 'react';

const features = [
  {
    id: 1,
    title: "Best Price Guarantee",
    description: "We guarantee the best prices for your flights. Found a better deal? We'll match it.",
    icon: <CircleDollarSign />
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist you with any queries.",
    icon: <Headset />
  },
  {
    id: 3,
    title: "Easy Booking Process",
    description: "Our simple and intuitive booking process makes planning your trip a breeze.",
    icon:<FileCheck />
  },
  {
    id: 4,
    title: "Flexible Cancellation",
    description: "Life happens. Change or cancel your flight with our flexible policies.",
    icon:<CheckCheck />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100X py-16">
      <div className="container max-w-7xl mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 hidden">Why Choose Us</h2>
        <p className="text-gray-600 mb-12 hidden">We're committed to providing the best flight booking experience</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="flex text-xl font-bold text-blue-800 mb-2 items-center"><span className='pr-3'> {feature.icon}</span> {feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;