import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import {
    FaTachometerAlt,
    FaUser,
    FaBook,
    FaChartBar,
    FaChalkboardTeacher,
    FaQuestionCircle,
    FaUsers,
    FaFileAlt,
    FaClipboardList,
  } from 'react-icons/fa';

const Sidebar = () => {

     const {user, handleLogout} = useAuth();
     const navigate = useNavigate();
     const onLogoutClick =()=>{
      handleLogout();
      navigate('/');
     };
     const role = user?.role || 'user';
    const commonLinks = [

        { to: 
           role === 'admin'
           ? '/admin/dashboard'
           : role === 'tutor'
           ? '/tutor/dashboard'
           :'/dashboard',
          label: 'Dashboard',
          icon: <FaTachometerAlt/>,
        },

        { to:'/profile', label: 'Profile', icon: <FaUser/>},

    ];

    const roleLinks = {
        user: [
            { to: '/course', label: 'My Course', icon:<FaBook />},
            { to: '/performance', label: 'Performance', icon:<FaChartBar />},
            { to: '/lecture', label: 'Lecture', icon:<FaChalkboardTeacher />},
            { to: '/quiz', label: 'Quiz', icon:<FaQuestionCircle/>},

        ],

        admin: [
            { to: '/admin/manageuser', label: 'Manage Users', icon:<FaUser />},
            { to: '/admin/reports', label: 'Reports', icon:<FaFileAlt />},
        ],
        tutor: [
            { to: '/my-class', label: 'My Class', icon:<FaChalkboardTeacher/>},
            { to: './assignment', label: 'Assignment', icon:<FaClipboardList/>},
        ],
    };
// {role} 
    const links = [...commonLinks, ...(roleLinks[role]) || []];
  return (
    <aside className="w-64 h-screen flex flex-col bg-[#9E3DAF] text-white p-4 fixed shadow-xl rounded-tr-3xl rounded-br-2xl">
      <h2 className="text-xl font-bold mb-4 capitalize"> StudySphere </h2>
      <nav className="flex-1 space-y-3 overflow-auto">  
        {links.map((link) => (
          <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-3 mb-3 px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-[#D98CE0] text-white'
                : 'hover:bg-[#D98CE0] hover:text-white'
            }`
          }
        >
          <span className="text-lg">{link.icon}</span>
          <span>{link.label}</span>
        </NavLink>
        ))}
      </nav>
        <button
          onClick={onLogoutClick}
          className='mt-4 w-full bg-[#D98CE0] text-white py-2 rounded-md'>
          Logout
        </button>
    </aside>
  );
};

export default Sidebar