import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-lg font-bold">App</div>
      <div className="flex  space-x-4">
        <FaBell className="text-[#9E3DAF] text-3xl" />
        <FaUserCircle className="text-[#9E3DAF] text-3xl" />
      </div>
    </header>
  );
};

export default TopNavbar;
