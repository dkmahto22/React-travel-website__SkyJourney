import { Headset, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Support({ variant }) {

const handlePhoneClick = () => {
  const clicks = JSON.parse(localStorage.getItem("phoneClicks") || "[]");
  clicks.push(new Date().toISOString()); // store click time
  localStorage.setItem("phoneClicks", JSON.stringify(clicks));
};


  return (
      <div className={`justify-center  ${variant === "smbl" ? "grid grid-row gap-2" : "flex space-x-4" }`}>
        
<Link to="tel: 1234567891" onClick={handlePhoneClick}  className="flex items-center border-1 border-blue-200 bg-white text-blue-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-100 transition"><Phone size={20} className='mr-2' /> <span className='grid grid-row'><span>Quick Booking</span><small className='text-gray-500 text-xs'>(Book Now Toll-free)</small></span>
          </Link>
          <Link to="tel: 1234567891" onClick={handlePhoneClick}  className="flex items-center border-1 border-blue-200 text-blue-600 px-4 py-1 rounded-lg font-medium  hover:bg-gray-100 transition">
            <Headset size={20} className='mr-2' /> <span className='grid grid-row'><span>Travel Expert</span><small className='text-gray-500 text-xs'>(Available 24*7)</small></span>
          </Link>
        </div>
  )
}
