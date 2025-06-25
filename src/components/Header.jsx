import React, { useState } from "react";
import { AlignLeft, PlaneTakeoff, X } from "lucide-react";
import { Link } from 'react-router-dom';
import Support from "./Support";
import SupportDropdown from "./SupoortMbl";


const menuItems = [
  { label: "Home", link: "/" },
  { label: "Popular Flights Routes ", link: "/popular-routes" },
  { label: "Destinations", link: "/popular-destinations" },
  { label: "About Us", link: "/about" },
  { label: "Contact", link: "/contact" },
];




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Navbar */}
      <header className="flex items-center justify-between bg-white shadow-sm text-white py-3">
        <div className="container max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
         <button onClick={toggleMenu} className="lg:hidden text-gray-800 cursor-pointer">
          {isOpen ? <X size={28} /> : <AlignLeft size={28} />}
        </button>
          <Link to="/">
          <span className="ml-2 text-xl font-bold text-gray-800 flex items-center gap-2">Sky <PlaneTakeoff className="text-blue-600" /> Journey </span>
          </Link>
        </div>
       

        {/* Shared Menu Items (Visible on Desktop) */}
        <nav className="hidden lg:flex space-x-6 font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-blue-500 transition text-gray-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="hidden xl:block"><Support /></span>
       <span className="block xl:hidden"><SupportDropdown /></span> 
        </div>
      </header>

      {/* Off-Canvas Mobile Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={closeMenu} className="cursor-pointer">
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-4 text-gray-800 font-medium">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={closeMenu}
              className="block hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;