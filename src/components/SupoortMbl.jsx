import { CircleUser, EllipsisVertical } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import Support from "./Support";

const SupportDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Support text link */}
      <button onClick={toggleDropdown} className="flex gap-2 items-center text-blue-600 ">
        <CircleUser size={16} /> <EllipsisVertical size={16} />
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-10 right-0 py-3">
       <Support variant="smbl" />
        </div>
      )}
    </div>
  );
};

export default SupportDropdown;
