import React from 'react'
import { NavLink } from 'react-router-dom'
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

const Sidebar = ({role}) => {
  
    const commonLinks = [

        { to: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt/>},
        { to:'/profile', label: 'Profile', icon: <FaUser/>},
        { to: '/course', label: 'My Course', icon:<FaBook />},
            { to: '/performance', label: 'Performance', icon:<FaChartBar />},
            { to: '/lecture', label: 'Lecture', icon:<FaChalkboardTeacher />},
            { to: '/quiz', label: 'Quiz', icon:<FaQuestionCircle/>},
    ];

    const roleLinks = {
        user: [
            { to: '/course', label: 'My Course', icon:<FaBook />},
            { to: '/performance', label: 'Performance', icon:<FaChartBar />},
            { to: '/lecture', label: 'Lecture', icon:<FaChalkboardTeacher />},
            { to: '/quiz', label: 'Quiz', icon:<FaQuestionCircle/>},

        ],
        admin: [
            { to: '/manage-users', label: 'Manage Users', icon:<FaUser />},
            { to: './report', label: 'Reports', icon:<FaFileAlt />},
        ],
        tutor: [
            { to: '/my-class', label: 'My Class', icon:<FaChalkboardTeacher/>},
            { to: './assignment', label: 'Assignment', icon:<FaClipboardList/>},
        ],
    };

    const links = [...commonLinks, ...(roleLinks[role]) || []];
  return (
    <aside className="w-64 h-screen bg-[#9E3DAF] text-white p-4 fixed shadow-xl rounded-tr-3xl ronded-br-2xl">
      <h2 className="text-xl font-bold mb-4 capitalize">{role} Panel </h2>
      <nav className="space-y-3">
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
    </aside>
  );
};

export default Sidebar