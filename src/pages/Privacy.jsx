import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
    <Helmet>
      <title>Privacy Policy - SkyJourney</title>
      <meta name="description" content="Transparent and affordable flight booking services." />
      <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
    </Helmet>
    <Header />
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Privacy Policy
        </h1>

        <p className="mb-6">
          At <strong>SkyJourney</strong>, your privacy is very important to us. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website
          or use our services.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information including:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Name, email, and contact number</li>
            <li>Travel preferences and search history</li>
            <li>Billing and payment information</li>
            <li>Device and browser data (IP address, cookies, etc.)</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use your data to:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Process bookings and provide customer support</li>
            <li>Improve our services and user experience</li>
            <li>Send confirmation emails or important travel updates</li>
            <li>Offer promotional deals and offers (if you opt in)</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">3. Sharing Your Information</h2>
        <p className="mb-6">
          We do not sell your personal data. However, we may share your data with:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Trusted airline or travel partners to process bookings</li>
            <li>Payment gateways to complete transactions securely</li>
            <li>Government or legal authorities if required by law</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">4. Your Data Rights</h2>
        <p className="mb-6">
          You have the right to:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Access or update your personal data</li>
            <li>Request deletion of your data</li>
            <li>Unsubscribe from promotional emails</li>
          </ul>
          Please contact us at <a href="mailto:support@skyjourney.com" className="text-blue-600 underline">support@skyjourney.com</a> for any such requests.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">5. Data Security</h2>
        <p className="mb-6">
          We implement appropriate technical and organizational measures to protect your data 
          against unauthorized access, misuse, or alteration.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">6. Cookies and Tracking</h2>
        <p className="mb-6">
          We use cookies to personalize your experience and analyze site traffic. 
          You can control cookie settings in your browser at any time.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">7. Policy Updates</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mt-2 text-blue-700">
          SkyJourney Pvt. Ltd. <br />
          Email: support@skyjourney.com <br />
          Phone: 471 4754 4585
        </p>

        <p className="mt-10 text-sm text-gray-500 text-center">
          Last Updated: June 12, 2025
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
