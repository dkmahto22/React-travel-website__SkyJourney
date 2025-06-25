import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-sky-50 text-gray-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the Best Deals in Your Inbox</h2>
        <p className="mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and receive exclusive flight deals, travel tips, and more.</p>
        
        {subscribed ? (
          <div className="bg-blue-500 px-6 py-4 rounded-lg inline-block">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex shadow-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800 bg-white "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white hover:bg-blue-900 px-6 py-3 rounded-r-lg font-medium transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;