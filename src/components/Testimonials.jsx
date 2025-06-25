import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frequent Traveler",
    content: "I've booked multiple flights with SkyJourney and they always have the best prices. Their customer service is exceptional!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveler",
    content: "The flexibility and ease of booking makes SkyJourney my go-to platform for all my business trips.",
    rating: 4
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Family Traveler",
    content: "Planning our family vacation was so simple with SkyJourney. We got great deals on all our flights!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
      <p className="text-gray-600 mb-12">Hear from travelers who've used our service</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;