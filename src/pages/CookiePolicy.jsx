import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const CookiePolicy = () => {
  
  return (
    <>
    <Helmet>
      <title>Cookie Policy - SkyJourney</title>
      <meta name="description" content="Transparent and affordable flight booking services." />
      <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
    </Helmet>
    <Header />
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Cookie Policy
        </h1>

        <p className="mb-6">
          This Cookie Policy explains how <strong>SkyJourney</strong> uses cookies and similar technologies on our website. By using our site, you agree to the use of cookies as described in this policy.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">1. What Are Cookies?</h2>
        <p className="mb-6">
          Cookies are small text files stored on your device when you visit a website. They help enhance your browsing experience and allow us to understand how users interact with our services.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">2. How We Use Cookies</h2>
        <p className="mb-6">
          We use cookies for the following purposes:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li><strong>Essential Cookies:</strong> Necessary for site functionality and secure access.</li>
            <li><strong>Performance Cookies:</strong> Analyze how users interact with our website to improve usability.</li>
            <li><strong>Functionality Cookies:</strong> Remember user preferences and enhance user experience.</li>
            <li><strong>Marketing Cookies:</strong> Deliver relevant ads based on your browsing behavior.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">3. Third-Party Cookies</h2>
        <p className="mb-6">
          Some cookies may be placed by third-party services such as Google Analytics, payment gateways, or ad networks. These cookies are governed by their respective privacy policies.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">4. How to Manage Cookies</h2>
        <p className="mb-6">
          You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect your ability to use certain features of our site.
          <br />
          Here are links to cookie settings for popular browsers:
          <ul className="list-disc list-inside mt-2 ml-4">
            <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-us/HT201265" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">5. Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Cookie Policy from time to time to reflect changes in our practices or regulations. We encourage you to review this page periodically.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">6. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about our use of cookies, please contact:
        </p>
        <p className="text-blue-700">
          SkyJourney Pvt. Ltd.<br />
          Email: support@skyjourney.com<br />
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

export default CookiePolicy;
