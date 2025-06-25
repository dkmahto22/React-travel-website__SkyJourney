import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalendarClock, Mail, MapPinCheckInside, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
//import emailjs from "@emailjs/browser"; //  Install with: npm install @emailjs/browser

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = "Invalid email format";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      errs.phone = "Invalid phone number";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    // Send email using EmailJS (you can replace this with your backend email API)
    emailjs.send("service_xxxx", "template_xxxx", form, "your_user_id")
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
        console.error(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - SkyJourney</title>
        <meta name="description" content="Transparent and affordable flight booking services." />
        <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
      </Helmet>
      <Header />
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
            Contact SkyJourney
          </h1>
          <p className="text-center text-gray-700 mb-10">
            Have questions, suggestions, or need help with your booking? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="bg-blue-50 p-6 rounded-xl shadow text-gray-800 space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>
              <p>We're here to assist you with your flight booking or travel queries.</p>
              <div className="flex gap-3 items-start">
                <MapPinCheckInside size={32} className="text-blue-900 mt-1" />
                <div>
                  <strong>Address:</strong>
                  <p>SkyJourney Pvt. Ltd.<br />47 W 13th St, New York, NY 10011, USA</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={32} className="text-blue-900 mt-1" />
                <div>
                  <strong>Email:</strong>
                  <p>support@skyjourney.com</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={32} className="text-blue-900 mt-1" />
                <div>
                  <strong>Phone:</strong>
                  <p>471 4754 4585</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CalendarClock size={32} className="text-blue-900 mt-1" />
                <div>
                  <strong>Working Hours:</strong>
                  <p>Mon – Sat: 9 AM – 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
