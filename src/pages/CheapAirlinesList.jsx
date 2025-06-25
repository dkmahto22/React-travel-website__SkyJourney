import React from "react";
import { Link } from "react-router-dom";

const usCheapAirlines = [
  { name: "Southwest Airlines", price: "$59" },
  { name: "Spirit Airlines", price: "$39" },
  { name: "Frontier Airlines", price: "$29" },
  { name: "Allegiant Air", price: "$34" },
  { name: "JetBlue Airways", price: "$49" },
  { name: "Sun Country Airlines", price: "$45" },
  { name: "Avelo Airlines", price: "$29" },
  { name: "Breeze Airways", price: "$39" },
  { name: "Hawaiian Airlines", price: "$69" },
 // { name: "American Airlines (Basic)", price: "$59" },
];

const CheapUSAirlines = () => {
  return (
   
      <div className="">
        <ul className="space-y-2 grid grid-cols-2">
          {usCheapAirlines.map((airline, index) => (
            <Link to="/results"
              key={index}
              className="text-gray-400 hover:text-white flex gap-2 items-center transition"
            >
              <span className="">{airline.name}</span>
              <span className="text-gray-600 font-semibold"> ({airline.price})</span>
            </Link>
          ))}
        </ul>
      </div>
    
  );
};

export default CheapUSAirlines;
