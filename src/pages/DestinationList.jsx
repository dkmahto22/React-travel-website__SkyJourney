import React from 'react'
import { Link } from 'react-router-dom';

const otherDestinations = [
  "Amsterdam, Netherlands", "Barcelona, Spain", "Istanbul, Turkey", "Bangkok, Thailand",
  "Seoul, South Korea", "Vienna, Austria", "Prague, Czech Republic", "Zurich, Switzerland",
  "Cape Town, South Africa", "Sydney, Australia", "Melbourne, Australia", "Toronto, Canada",
  "Vancouver, Canada", "Doha, Qatar", "Cairo, Egypt", "Athens, Greece",
  "San Francisco, CA", "Seattle, WA", "Dallas, TX", "Austin, TX",
  "Denver, CO", "Atlanta, GA", "Boston, MA", "Philadelphia, PA",
  "Phoenix, AZ", "Houston, TX", "San Diego, CA", "Tampa, FL",
  "Honolulu, HI", "Salt Lake City, UT", "Nashville, TN", "Portland, OR",
  "Minneapolis, MN", "New Orleans, LA", "Charlotte, NC", "Kansas City, MO",
  "Detroit, MI", "Cleveland, OH"
];



export default function DestinationList({veriant}) {
  return (
        <section>
     
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm text-gray-700
          ${veriant === "homepage" ? "" : ""
          
          
          }`}>
            {otherDestinations.map((place, index) => (
              <div key={index} className="bg-white rounded-md p-2 hover:shadow">
               <Link to="/results">Flight to {place}</Link> 
              </div>
            ))}
          </div>
        </section>
  )
}
