import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
     <>
     <Helmet>
       <title>Terms and conditions - SkyJourney</title>
       <meta name="description" content="Transparent and affordable flight booking services." />
       <meta name="keywords" content="Flight booking services, Cheap Flight, Last minutes flight, low cost flight" />
     </Helmet>
     <Header />
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Terms & Conditions
        </h1>

        <p className="mb-6">
          These Terms and Conditions ("Terms") govern your use of the SkyJourney website and booking services. By accessing our website or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">1. Booking Policy</h2>
        <p className="mb-6">
          All flight bookings are subject to availability and confirmation. SkyJourney acts as an intermediary between you and the airlines. Final confirmation and tickets are provided by the airline.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">2. Payment Terms</h2>
        <p className="mb-6">
          Full payment must be made at the time of booking. All transactions are processed securely. SkyJourney is not responsible for any failed or incomplete payments due to third-party issues.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">3. Cancellation & Refunds</h2>
        <p className="mb-6">
          Cancellations and refunds depend on the airline's policies. SkyJourney will facilitate the process but does not guarantee full or partial refunds unless confirmed by the airline.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">4. User Responsibilities</h2>
        <p className="mb-6">
          You must provide accurate personal and travel information. SkyJourney is not responsible for delays or issues due to incorrect details submitted by you.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">5. Travel Requirements</h2>
        <p className="mb-6">
          It is your responsibility to check visa, passport, vaccination, and other travel requirements. SkyJourney does not provide legal or immigration advice.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">6. Limitation of Liability</h2>
        <p className="mb-6">
          SkyJourney is not liable for any loss, injury, or damage caused by delays, cancellations, or changes made by the airline or other third-party providers.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">7. Intellectual Property</h2>
        <p className="mb-6">
          All content, branding, and visuals on this site are the property of SkyJourney. Unauthorized use, duplication, or redistribution is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">8. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to update these Terms at any time. Changes will be posted on this page. Continued use of the site means acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">9. Governing Law</h2>
        <p className="mb-6">
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes will be resolved under the jurisdiction of Delhi courts.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mb-2">10. Contact Us</h2>
        <p className="mb-6">
          For any questions regarding these Terms, you can reach us at:
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

export default TermsAndConditions;
