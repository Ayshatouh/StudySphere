import React, { useEffect, useState } from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import Tabs from './Reusables/Tabs';
import CourseCard from './Reusables/CourseCard';
import dummyCourses from '../../data/dummyCourses';
//import dummyCourses from '.../data/dummyCourses'; 

const tabs = ['All Courses', 'Ongoing', 'Not started', 'Completed'];

const Mycourse = () => {
  const role = localStorage.getItem('role') || 'user';
  const [activeTab, setActiveTab] =useState('Ongoing');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(()=>{
    if (activeTab === 'All Courses'){
      setFilteredCourses(dummyCourses);
    } else {
      setFilteredCourses(dummyCourses.filter(c => c.status === activeTab));

    }
  }, [activeTab]);
  return (
    <DashboardLayout role={role}>
        <div className='p-6'>
          <h2 className='text-xl font-semibold mb-4'>Courses</h2>
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          <div className='flex flex-wrap gap-4'>
            {filteredCourses.map(course =>(
              <CourseCard key={course.id} course={course} activeTab={activeTab}/>
            ))}
          </div>
        </div>
    </DashboardLayout>
  )
}

export default Mycourse