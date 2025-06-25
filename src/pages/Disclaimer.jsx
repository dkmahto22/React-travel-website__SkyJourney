import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  return (
     <>
     <Helmet>
       <title>Disclaimer - SkyJourney</title>
       <meta name="description" content="Transparent and affordable flight booking services." />
       <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
     </Helmet>
     <Header />
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Disclaimer
        </h1>

        <p className="mb-6">
          The information provided by <strong>SkyJourney</strong> (“we,” “us” or “our”) on this website is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">1. No Professional Advice</h2>
        <p className="mb-6">
          The content on this website is not intended to be a substitute for professional travel, legal, or financial advice. Users are encouraged to seek the services of qualified professionals for specific concerns.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">2. External Links Disclaimer</h2>
        <p className="mb-6">
          Our website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, or completeness by us.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">3. Airline Information Disclaimer</h2>
        <p className="mb-6">
          All airline logos, names, and related branding shown on this site are the property of their respective owners. SkyJourney acts as an aggregator and does not claim any affiliation or partnership unless explicitly stated.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">4. Limitation of Liability</h2>
        <p className="mb-6">
          Under no circumstance shall SkyJourney be held liable for any loss or damage of any kind incurred as a result of using the site or relying on any information provided. Your use of the site and your reliance on any information is solely at your own risk.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">5. Changes and Updates</h2>
        <p className="mb-6">
          We reserve the right to update this Disclaimer at any time. Any changes will be posted on this page with the revised date.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">6. Contact Us</h2>
        <p className="mb-6">
          If you have any questions or need more clarification about this disclaimer, you can contact us at:
        </p>

        <p className="text-blue-700">
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

export default Disclaimer;
