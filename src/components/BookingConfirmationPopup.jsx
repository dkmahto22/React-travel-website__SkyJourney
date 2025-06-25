import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmationPopup = ({ customerName, onClose }) => {
  if (!customerName) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/90 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md  shadow-xl space-y-4">
        <p className="text-green-700 text-2xl">
            <small>Hey <span className="font-bold">{customerName}</span>, thank you!</small><br />
        Your booking details have been received.
        </p>
        <p className="text-gray-600 text-sm">
          One of our travel experts will contact you within a few minutes to confirm your booking.
        </p>
        <p className="text-sm text-blue-800 font-medium mt-2">– Team SkyJourney</p>
        <Link to="/"
          onClick={onClose}
          className="mt-4 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition mx-auto flex w-16"
        >
          Close
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmationPopup;
