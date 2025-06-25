import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import TopNavbar from '../Navbar/TopNavbar';

const DashboardLayout = ({ children}) => {
  const [role, setRole] = useState(null);
  //const role = localStorage.getItem('role');
//  const userData = localStorage.getItem('User');
//   const user = userData ? JSON.parse(userData) : null;
//   const role = user?.role || 'user';
  useEffect(() =>{
   const userData = localStorage.getItem('user');
   if (userData) {
    const user = JSON.parse(userData);
    setRole(user.role || 'user');
   }
  }, []);
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
