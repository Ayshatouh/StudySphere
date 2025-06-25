import React, { useEffect, useState } from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
//import Graduate from '../assets/graduate.png'
import Graduate from "../../assets/graduate.png";
import { Card, CardBody } from 'reactstrap';

import TopNavbar from '../Navbar/TopNavbar';
import CurrentActivity from './Dashboard/CurrentActivity';
import RecentCourses from './Dashboard/RecentCourses';
const Dashboard = () => {

  
  const [username, setUsername] = useState('');
 
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
      setUsername(user.firstname)
    } 
  
  }, []);
    const role = localStorage.getItem('role') || 'user';
  return (
    <DashboardLayout role={role}>
        <CardBody className='bg-gradient-to-r from-[#D98CE0] to-[#9E3DAF] p-6 pt-2 rounded-t-2xl rounded-b-2xl shadow-md text-white'>
           <div className='flex flex-col md:flex-row items-center  justify-between gap-4'>
          {/* text-section */}
           <div className='flex-1' >
            <h1 className='text-2xl font-semibold'>Wellcome Back, {username}</h1>
            <p className='text-white text-sm md:text-base'>Congratulation! you have learned 80% of your course this month. Keep it up, you're almost there.</p>
           
           </div>
           {/* Image section */}
           <div className='w-32 h-32 md:w-40 md:h-40 flex-shrink-0'>
             <img 
             src={Graduate}
             alt='graduate'
             className='w-full h-full object-contain rounded-full '
             />
           </div>
           </div>
        </CardBody>
       
       {/* section for performance check */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
        <CurrentActivity/>
        <RecentCourses/>
       </div>
    </DashboardLayout>
  );
};

export default Dashboard