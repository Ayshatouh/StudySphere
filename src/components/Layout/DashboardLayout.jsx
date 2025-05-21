import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TopNavbar from '../Navbar/TopNavbar';

const DashboardLayout = ({ children}) => {
  const role = localStorage.getItem('role');
  return (
    <div>
      <Sidebar role={role} />

      {/* Main container shifted to the right by sidebar width */}
      <div className="ml-64">
        <TopNavbar /> {/* No ml-64 here */}
        <main className='p-6 w-full'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
